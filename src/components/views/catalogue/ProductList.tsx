import "./ProductList.css";
import Product from "../../product/Product";
import PRODUCTS from "../../../data/products";
import { Navigate, useParams } from "react-router-dom";
import { URLS } from "../../../config";

const ProductList = () => {
  const { category } = useParams<{ category?: string }>();
  const categoryData = PRODUCTS.find(
    (productCategory) => productCategory.id === category
  );

  if (!categoryData) return <Navigate to={URLS.CATALOGUE} replace />;

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
