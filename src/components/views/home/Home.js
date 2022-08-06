import "./Home.css";
import { IMG_PATH } from "../../../config.js";
import Carousel from "../../carousel/Carousel.js";
import McButton from "../../buttons/McButton.js";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../../../context/OrderContext.js";
import HOME_SLIDES from "../../../data/homeSlides.js";
import HOME_LINKS from "../../../data/homeLinks.js";

const Home = () => {
  const navigate = useNavigate();
  const order = useOrder();

  return (
    <div className="Home">
      <Carousel items={HOME_SLIDES} />
      <div className="home-list">
        {Object.entries(HOME_LINKS).map(([key, value]) => {
          return (
            <div key={key} className="home-link">
              <p className="title">{value.title}</p>
              <a href={value.href}>
                <img src={IMG_PATH + value.img} alt="" />
              </a>
            </div>
          );
        })}
      </div>
      {order && order.confirmed && (
        <McButton
          content={"Pedido en curso >>>"}
          img={"order-bag-nobg.png"}
          onClick={() => navigate("/orders/current")}
          fixed
        />
      )}
    </div>
  );
};

export default Home;
