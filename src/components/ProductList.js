import Product from "./Product.js";
import "../theme/ProductList.css";

const ProductList = (props) => {
  return (
    <div className="ProductList">
      <p>{props.category}</p>
      {Object.entries(props.products).map(([key, value]) => {
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
