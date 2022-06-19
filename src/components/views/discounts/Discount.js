import Slider from "../../slider/Slider.js";
import Carousel from "../../carousel/Carousel.js";
import "./Discount.css";

const Discount = (props) => {
  return (
    <div className="Discount">
      <Carousel items={props.carouselItems} />
      <div className="slides">
        {Object.entries(props.items).map(([key, value]) => {
          return (
            <div className="slider-container" key={key}>
              <p>{value.category}</p>
              <Slider items={value.items} link={"/discounts/" + key + "/"} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Discount;
