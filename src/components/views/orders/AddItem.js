import "./AddItem.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const AddItem = () => {
  const location = useLocation();
  const data = location.state;
  const [count, setCount] = useState(1);

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
        <button onClick={() => setCount(count >= 50 ? count : count + 1)}>
          <img src="/img/plus.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default AddItem;
