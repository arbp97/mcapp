import { NavLink } from "react-router-dom";
import "./Slider.css";

const Slider = (props) => {
  return (
    <div className="Slider">
      {Object.entries(props.items).map(([key, value]) => {
        return (
          <NavLink
            className="slide"
            key={key}
            to={props.link ? props.link : ""}
            state={{
              name: value.title,
              img: value.img,
              price: value.price ? value.price : null,
            }}
          >
            <img src={"/img/" + value.img} alt=""></img>
            <p className="title" title={value.title}>
              {value.title}
            </p>
            {value.price && <p className="price">{"$" + value.price}</p>}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Slider;
