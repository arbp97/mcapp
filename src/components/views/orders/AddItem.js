import "./AddItem.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const AddItem = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const [count, setCount] = useState(1);

  // add selected qty of this item and adds them to the order
  const handleClick = () => {
    const order = JSON.parse(localStorage.getItem("order"));
    const newItem = {
      quantity: count,
      name: data.name,
      pricePerUnit: data.price,
    };

    // if the order object does not exist then create it
    // with the new item inside
    if (!order) {
      localStorage.setItem(
        "order",
        JSON.stringify({
          items: [newItem],
          status: "pending",
        })
      );
    } else {
      // if the item exists in the current order,
      //just add the count to it to avoid duplications
      let existingItem = order.items.find((item) => item.name === data.name);

      if (existingItem) {
        existingItem.quantity += count;
      } else {
        order.items.push(newItem);
      }

      localStorage.setItem("order", JSON.stringify(order));
    }

    navigate(-1);
  };

  return (
    <div className="AddItem">
      <p className="title">{data.name}</p>
      <img src={"/img/" + data.img} alt="" />
      <p className="price">{"$" + data.price}</p>
      <div className="counter-container">
        <button onClick={() => setCount(count === 1 ? count : count - 1)}>
          <img src="/img/minus.png" alt="" />
        </button>
        <p>{count}</p>
        <button onClick={() => setCount(count >= 5 ? count : count + 1)}>
          <img src="/img/plus.png" alt="" />
        </button>
      </div>
      <button className="additem-btn" onClick={() => handleClick()}>
        Agregar al pedido
      </button>
    </div>
  );
};

export default AddItem;
