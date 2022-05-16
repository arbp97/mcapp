import "../theme/Product.css";

const Product = (props) => {
  //componente funcional props-->propiedades

  return (
    <div className="contenedor-producto">
      <img
        className="imagen-producto"
        src={"img/catalogue/" + props.imagen}
        alt=""
      />
      <div className="contenedor-texto-producto">
        <p className="nombre-producto">
          <strong> {props.nombre}</strong>
        </p>
        <p className="precio-producto">{props.precio}</p>
        <p className="ingredientes-producto">"{props.ingredientes}"</p>
      </div>
    </div>
  );
};

export default Product;
