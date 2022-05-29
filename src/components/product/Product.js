import "./Product.css";

const Product = (props) => {
  //componente funcional props-->propiedades

  return (
    <div className="Product">
      <img src={"/img/" + props.img} alt="" />
      <div className="Product-info">
        <p className="Product-title">{props.title}</p>
        <p className="Product-text">{props.description}</p>
      </div>
    </div>
  );
};

export default Product;
