import "./AddItem.css";
import { IMG_PATH } from "../../../config.js";
import { useNavigate, useParams } from "react-router-dom";
import McButton from "../../buttons/McButton.js";
import { useState } from "react";
import combos from "../../../data/combos.js";
import { useOrder, useOrderUpdate } from "../../../context/OrderContext.js";
import useFormat from "../../../hooks/useFormat.js";

const AddItem = () => {
  const navigate = useNavigate();
  const { category, id } = useParams();
  const data = combos[category].items[id];
  const [count, setCount] = useState(1);
  const order = useOrder();
  const updateOrder = useOrderUpdate();
  const [currencyFormatter] = useFormat();

  // add selected qty of this item and adds them to the order
  const handleClick = () => {
    let existingItem = order.items.find((item) => item.name === data.title);
    // if the item exists in the current order,
    //just add the count to it to avoid duplications
    if (existingItem) {
      existingItem.quantity += count;
      updateOrder(order);
    } else {
      const newItem = {
        quantity: count,
        name: data.title,
        img: data.img,
        pricePerUnit: data.price,
      };

      updateOrder({
        ...order,
        // eslint-disable-next-line
        ["items"]: order.items.concat([newItem]),
        // eslint-disable-next-line
        ["total"]: order.total + newItem.pricePerUnit * count,
      });
    }

    navigate(-1);
  };

  return (
    <div className="AddItem">
      <p className="title">{data.title}</p>
      <img src={IMG_PATH + data.img} alt="" />
      <p className="price">{currencyFormatter().format(data.price)}</p>
      <div className="counter-container">
        <button onClick={() => setCount(count === 1 ? count : count - 1)}>
          <img src={IMG_PATH + "minus.png"} alt="" />
        </button>
        <p>{count}</p>
        <button onClick={() => setCount(count >= 5 ? count : count + 1)}>
          <img src={IMG_PATH + "plus.png"} alt="" />
        </button>
      </div>
      <McButton
        content={"Agregar al pedido"}
        onClick={() => handleClick()}
        fixed
      />
    </div>
  );
};

export default AddItem;
