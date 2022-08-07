import { useParams } from "react-router-dom";
import Product from "../../product/Product";
import products from "../../../data/products";
import { IProductCategory } from "../../../@types/product";
import "./ProductList.css";

const ProductList = () => {
  const { category } = useParams<{ category?: string }>();
  const data = products.find(
    (product) => product.id === category
  ) as IProductCategory;

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
