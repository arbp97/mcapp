import "./ProductList.css";
import Product from "../../product/Product";
import PRODUCTS from "../../../data/products";
import { useParams } from "react-router-dom";

const ProductList = () => {
  const { category } = useParams<{ category?: string }>();
  const categoryData = PRODUCTS.find(
    (productCategory) => productCategory.id === category
  );

  return (
    <div className="ProductList">
      <p>{categoryData?.category}</p>
      {categoryData!.items.map((value, index) => {
        // load all products of this category
        return (
          <Product
            key={index}
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
