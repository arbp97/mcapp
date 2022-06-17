import Slider from "../../slider/Slider.js";
import Carousel from "../../carousel/Carousel.js";
import "./Discount.css";
import { useLocation } from "react-router-dom";

const Discount = (props) => {
  const location = useLocation();

  return (
    <div className="Discount">
      <Carousel items={props.carouselItems} />
      <div className="slides">
        {Object.entries(props.items).map(([key, value]) => {
          return (
            <div className="slider-container" key={key}>
              <p>{value.category}</p>
              <Slider items={value.items} link={location.pathname + "/item"} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Discount;
