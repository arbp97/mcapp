import "./Catalogue.css";
import { IMG_PATH } from "../../../config.js";
import { NavLink } from "react-router-dom";

const Catalogue = (props) => {
  return (
    <div className="Catalogue">
      {Object.entries(props.categories).map(([key, value]) => {
        // map all categories as links
        return (
          <NavLink
            key={key}
            className={"category-link"}
            to={"/catalogue/" + key}
          >
            <img src={IMG_PATH + value.items[0].img} alt="" />
            <p>{value.category}</p>
            <img
              className="category-arrow"
              src={IMG_PATH + "right-arrow.png"}
              alt=""
            />
          </NavLink>
        );
      })}
    </div>
  );
};

export default Catalogue;
