import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import McButton from "../../buttons/McButton.js";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  let order = JSON.parse(localStorage.getItem("order"));
  const [itemList, setItemList] = useState(order.items);

  const getTotal = () => {
    let result = 0;

    for (const item of order.items) {
      result += item.pricePerUnit * item.quantity;
    }

    return result;
  };

  const [total, setTotal] = useState(getTotal);

  // delete selected item from the order
  const deleteItem = (item) => {
    order.items = order.items.filter(function (value, index) {
      return index !== item;
    });

    localStorage.setItem("order", JSON.stringify(order));
    setItemList(order.items);

    // change total if the item list changed
    setTotal(getTotal);
  };

  useEffect(() => {
    // go back if there is nothing no display
    if (!order || order.items.length <= 0) {
      navigate(-1);
    }
  }, [order, navigate]);

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
          <p>{"$ " + total}</p>
        </div>
        <McButton
          content={"Pagar con la app"}
          onClick={() => alert("Work in progress")}
        />
      </div>
    </div>
  );
};

export default Cart;
