import "./Discount.css";
import Slider from "../../slider/Slider";
import Carousel from "../../carousel/Carousel";
import DISCOUNTS from "../../../data/discounts";
import DISCOUNT_SLIDES from "../../../data/discountSlides";
import { URLS } from "../../../config";

const Discount = () => {
  return (
    <div className="Discount">
      <Carousel items={DISCOUNT_SLIDES} />
      <div className="slides">
        {DISCOUNTS.map((value, index) => {
          return (
            <div className="slider-container" key={index}>
              <p>{value.category}</p>
              <Slider
                items={value.items}
                link={URLS.DISCOUNTS + value.id + "/"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Discount;
