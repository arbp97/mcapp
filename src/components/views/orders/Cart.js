import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import McButton from "../../buttons/McButton.js";
import { useOrder, useOrderUpdate } from "../../../context/OrderContext.js";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const order = useOrder();
  const updateOrder = useOrderUpdate();
  const [itemList, setItemList] = useState(order.items);

  const getTotal = useCallback(() => {
    let result = 0;

    for (const item of itemList) {
      result += item.pricePerUnit * item.quantity;
    }

    return result;
  }, [itemList]);

  useEffect(() => {
    // go back if there is nothing no display
    if (itemList.length <= 0) {
      navigate(-1);
    }
    // change total && order stored if the item list changed
    order.items = itemList;
    // eslint-disable-next-line
    updateOrder({ ...order, ["total"]: getTotal() });
    // eslint-disable-next-line
  }, [itemList]);

  // delete selected item from the order
  const deleteItem = (item) => {
    setItemList(
      itemList.filter((element, index) => {
        return index !== item;
      })
    );
  };

  return (
    <div className="Cart">
      {itemList.map((item, index) => {
        return (
          <div className="item" key={index}>
            <img src={"/img/" + item.img} alt="" />
            <div className="item-info">
              <p>{item.name}</p>
              <p>{"Cantidad: " + item.quantity}</p>
              <p>
                {"$" + item.pricePerUnit}
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
          <p>{"$ " + getTotal()}</p>
        </div>
        <McButton
          content={"Pagar con la app"}
          onClick={() => navigate("/orders/checkout")}
        />
      </div>
    </div>
  );
};

export default Cart;
