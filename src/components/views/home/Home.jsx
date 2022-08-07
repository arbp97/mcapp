import "./Home.css";
import { IMG_PATH, URLS } from "../../../config";
import Carousel from "../../carousel/Carousel";
import McButton from "../../buttons/McButton";
import { useNavigate } from "react-router-dom";
import { useOrderContext } from "../../../context/OrderContext";
import HOME_SLIDES from "../../../data/homeSlides";
import HOME_LINKS from "../../../data/homeLinks";

const Home = () => {
  const navigate = useNavigate();
  const { order } = useOrderContext();

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
          onClick={() => navigate(URLS.ORDERS_CURRENT)}
          fixed
        />
      )}
    </div>
  );
};

export default Home;