import "./Carousel.css";
import { IMG_PATH } from "../../config";

type CarouselProps = {
  items: string[];
};

const Carousel = ({ items }: CarouselProps) => {
  return (
    <div className="Carousel">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          {items.map((element, index) => {
            return (
              <li
                key={index}
                className={index === 0 ? "active" : ""}
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                aria-label={"Slide " + Number(index + 1)}
                aria-current={index === 0 ? "true" : "false"}
              ></li>
            );
          })}
        </ol>
        <div className="carousel-inner">
          {items.map((element, index) => {
            return (
              <div
                key={index}
                className={
                  index === 0 ? "carousel-item active" : "carousel-item"
                }
              >
                <img
                  src={IMG_PATH + element}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
