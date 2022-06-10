import "./Home.css";
import Carousel from "../../carousel/Carousel.js";
import McButton from "../../buttons/McButton.js";

const Home = (props) => {
  const order = JSON.parse(localStorage.getItem("order"));

  return (
    <div className="Home">
      <Carousel />
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
          img={"order-bag.png"}
          onClick={() => alert("Work in progress")}
          fixed
        />
      )}
    </div>
  );
};

export default Home;
