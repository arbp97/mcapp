import "./Catalogue.css";
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
            <img src={"img/" + value.items[0].img} alt="" />
            <p>{value.category}</p>
            <img
              className="category-arrow"
              src={"../img/right-arrow.png"}
              alt=""
            />
          </NavLink>
        );
      })}
    </div>
  );
};

export default Catalogue;
