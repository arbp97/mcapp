import "./ComboList.css";
import Slider from "../../slider/Slider.js";

const ComboList = (props) => {
  return (
    <div className="ComboList">
      {Object.entries(props.items).map(([key, value]) => {
        return (
          <div className="slider-container" key={key}>
            <p>{value.category}</p>
            <Slider items={value.items} />
          </div>
        );
      })}
    </div>
  );
};

export default ComboList;
