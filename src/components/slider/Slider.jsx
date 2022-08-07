import { NavLink } from "react-router-dom";
import { IMG_PATH } from "../../config";
import useFormat from "../../hooks/useFormat";
import "./Slider.css";

const Slider = (props) => {
  const [currencyFormatter] = useFormat();
  return (
    <div className="Slider">
      {Object.entries(props.items).map(([key, value]) => {
        return (
          <NavLink
            className="slide"
            key={key}
            to={props.link ? props.link + key : ""}
            state={{
              name: value.title,
              img: value.img,
              price: value.price ? value.price : null,
            }}
          >
            <img src={IMG_PATH + value.img} alt=""></img>
            <p className="title" title={value.title}>
              {value.title}
            </p>
            {props.showPrice && (
              <p className="price">{currencyFormatter().format(value.price)}</p>
            )}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Slider;
