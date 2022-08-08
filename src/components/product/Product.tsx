import "./Product.css";
import { IMG_PATH } from "../../config";
import { ProductType } from "../../@types/product";

const Product = ({ img, title, description }: ProductType) => {
  return (
    <div className="Product">
      <img src={IMG_PATH + img} alt="" />
      <div className="Product-info">
        <p className="Product-title">{title}</p>
        <p className="Product-text">{description}</p>
      </div>
    </div>
  );
};

export default Product;
