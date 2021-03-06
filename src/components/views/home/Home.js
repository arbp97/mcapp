import "./Home.css";
import Carousel from "../../carousel/Carousel.js";
import McButton from "../../buttons/McButton.js";
import { useNavigate } from "react-router-dom";
import useOrder from "../../../hooks/useOrder.js";

const Home = (props) => {
  const navigate = useNavigate();
  const [order] = useOrder();

  return (
    <div className="Home">
      <Carousel items={props.carouselItems} />
      <div className="home-list">
        {Object.entries(props.links).map(([key, value]) => {
          return (
            <div key={key} className="home-link">
              <p className="title">{value.title}</p>
              <a href={value.href}>
                <img src={"/img/" + value.img} alt="" />
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
