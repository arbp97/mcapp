import { useCallback, useEffect } from "react";
import { IMG_PATH, URLS } from "../../../config.js";
import useFormat from "../../../hooks/useFormat.js";
import { useNavigate } from "react-router-dom";
import McButton from "../../buttons/McButton.js";
import { useOrder, useOrderUpdate } from "../../../context/OrderContext.js";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const order = useOrder();
  const updateOrder = useOrderUpdate();
  const [currencyFormatter] = useFormat();

  const getTotal = useCallback(() => {
    let result = 0;

    for (const item of order.items) {
      result += item.pricePerUnit * item.quantity;
    }

    return result;
  }, [order.items]);

  useEffect(() => {
    // go back if there is nothing no display
    if (order.items.length <= 0) {
      navigate(-1);
    }
    // change order stored if the item list changed
    // eslint-disable-next-line
    updateOrder({ ...order, ["total"]: getTotal() });
    // eslint-disable-next-line
  }, [order.items]);

  // delete selected item from the order
  const deleteItem = (item) => {
    const list = order.items.filter((element, index) => {
      return index !== item;
    });
    // eslint-disable-next-line
    updateOrder({ ...order, ["items"]: list });
  };

  return (
    <div className="Cart">
      {order.items.map((item, index) => {
        return (
          <div className="item" key={index}>
            <img src={IMG_PATH + item.img} alt="" />
            <div className="item-info">
              <p>{item.name}</p>
              <p>{"Cantidad: " + item.quantity}</p>
              <p>
                {currencyFormatter().format(item.pricePerUnit)}
                <button
                  className="delete-btn"
                  onClick={() => deleteItem(index)}
                >
                  Eliminar
                </button>
              </p>
            </div>
          </div>
        );
      })}
      <div className="cart-info">
        <div className="cart-total">
          <p>Total</p>
          <p>{currencyFormatter().format(getTotal())}</p>
        </div>
        <McButton
          content={"Pagar con la app"}
          onClick={() => navigate(URLS.ORDERS_CHECKOUT)}
        />
      </div>
    </div>
  );
};

export default Cart;
