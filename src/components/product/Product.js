import "./Product.css";
import { IMG_PATH } from "../../config.js";

const Product = (props) => {
  return (
    <div className="Product">
      <img src={IMG_PATH + props.img} alt="" />
      <div className="Product-info">
        <p className="Product-title">{props.title}</p>
        <p className="Product-text">{props.description}</p>
      </div>
    </div>
  );
};

export default Product;
