import "./ComboList.css";
import { useLocation } from "react-router-dom";
import Slider from "../../slider/Slider.js";

const ComboList = (props) => {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="ComboList">
      <div className="restaurant">
        <img src={"/img/" + data.img} alt="" />
        <div className="address">
          <p>{data.name}</p>
          <p>{data.address}</p>
        </div>
      </div>
      <div className="ComboList-slides">
        {Object.entries(props.items).map(([key, value]) => {
          return (
            <div className="slider-container" key={key}>
              <p>{value.category}</p>
              <Slider items={value.items} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComboList;
