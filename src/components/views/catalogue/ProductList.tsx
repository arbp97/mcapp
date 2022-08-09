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
      {Object.entries(categoryData!.items).map(([key, value]) => {
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
