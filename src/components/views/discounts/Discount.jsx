import "./Discount.css";
import Slider from "../../slider/Slider";
import Carousel from "../../carousel/Carousel";
import DISCOUNTS from "../../../data/discounts.js";
import DISCOUNT_SLIDES from "../../../data/discountSlides.js";
import { URLS } from "../../../config.js";

const Discount = () => {
  return (
    <div className="Discount">
      <Carousel items={DISCOUNT_SLIDES} />
      <div className="slides">
        {Object.entries(DISCOUNTS).map(([key, value]) => {
          return (
            <div className="slider-container" key={key}>
              <p>{value.category}</p>
              <Slider items={value.items} link={URLS.DISCOUNTS + key + "/"} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Discount;
