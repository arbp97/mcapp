import "./Slider.css";
import { NavLink } from "react-router-dom";
import { IMG_PATH } from "../../config";
import useFormat from "../../hooks/useFormat";

type SliderProps = {
  items: any[];
  link?: string;
  showPrice?: boolean;
};

const Slider = ({ items, link, showPrice }: SliderProps) => {
  const [currencyFormatter] = useFormat();
  return (
    <div className="Slider">
      {items.map((value, index) => {
        return (
          <NavLink
            className="slide"
            key={index}
            to={link ? link + index : ""}
            state={{
              name: value.title,
              img: value.img,
              price: value.price ?? null,
            }}
          >
            <img src={IMG_PATH + value.img} alt=""></img>
            <p className="title" title={value.title}>
              {value.title}
            </p>
            {showPrice && (
              <p className="price">{currencyFormatter().format(value.price)}</p>
            )}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Slider;
