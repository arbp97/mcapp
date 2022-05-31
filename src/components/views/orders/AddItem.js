import "./AddItem.css";
import { useLocation } from "react-router-dom";

const AddItem = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="AddItem">
      <p className="title">{data.name}</p>
      <img src={"/img/" + data.img} alt="" />
      <p className="price">{"$" + data.price}</p>
      <div className="counter-container">
        <button>
          <img src="/img/minus.png" alt="" />
        </button>
        <p>1</p>
        <button>
          <img src="/img/plus.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default AddItem;
