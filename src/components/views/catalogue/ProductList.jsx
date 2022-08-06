import { useParams } from "react-router-dom";
import Product from "../../product/Product";
import products from "../../../data/products.js";
import "./ProductList.css";

const ProductList = () => {
  const { category } = useParams();
  const data = products[category];

  return (
    <div className="ProductList">
      <p>{data.category}</p>
      {Object.entries(data.items).map(([key, value]) => {
        // load all products of this category
        return (
          <Product
            key={key}
            img={value.img}
            title={value.title}
            description={value.description}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
