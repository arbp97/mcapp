import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  let order = JSON.parse(localStorage.getItem("order"));
  const [itemList, setItemList] = useState(order.items);

  useEffect(() => {
    // go back if there is nothing no display
    if (!order || order.items.length <= 0) {
      navigate(-1);
    }
  }, [order, navigate]);

  // delete selected item from the order
  const deleteItem = (item) => {
    order.items = order.items.filter(function (value, index) {
      return index !== item;
    });
    setItemList(order.items);
    localStorage.setItem("order", JSON.stringify(order));
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
                {item.pricePerUnit}
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
    </div>
  );
};

export default Cart;
