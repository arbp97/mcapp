import "./Catalogue.css";
import { IMG_PATH, URLS } from "../../../config";
import PRODUCTS from "../../../data/products";
import { NavLink } from "react-router-dom";

const Catalogue = () => {
  return (
    <div className="Catalogue">
      {PRODUCTS.map((value, index) => {
        // map all categories as links
        return (
          <NavLink
            key={index}
            className={"category-link"}
            to={URLS.CATALOGUE + value.id}
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
