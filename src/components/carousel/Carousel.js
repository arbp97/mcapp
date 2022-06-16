import "./Carousel.css";

const Carousel = (props) => {
  return (
    <div className="Carousel">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          {Object.entries(props.items).map(([key, value]) => {
            return (
              <li
                key={key}
                type="button"
                // eslint-disable-next-line
                className={key == 0 ? "active" : ""}
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={key}
                aria-label={"Slide " + Number(key + 1)}
                // eslint-disable-next-line
                aria-current={key == 0 ? "true" : "false"}
              ></li>
            );
          })}
        </ol>
        <div className="carousel-inner">
          {Object.entries(props.items).map(([key, value]) => {
            return (
              <div
                key={key}
                // eslint-disable-next-line
                className={key == 0 ? "carousel-item active" : "carousel-item"}
              >
                <img
                  src={"img/" + value.img}
                  className="d-block w-100"
                  alt="..."
                  width="300px"
                  height="300px"
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
