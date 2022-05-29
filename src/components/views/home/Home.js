import "./Home.css";
import Carousel from "../../carousel/Carousel.js";

const Home = (props) => {
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
    </div>
  );
};

export default Home;
