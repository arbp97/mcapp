import "./Home.css";
import Carousel from "../../carousel/Carousel.js";
import McButton from "../../buttons/McButton.js";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const order = JSON.parse(localStorage.getItem("order"));
  const navigate = useNavigate();

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
          onClick={() =>
            navigate("/orders/current", { state: { order: order } })
          }
          fixed
        />
      )}
    </div>
  );
};

export default Home;
