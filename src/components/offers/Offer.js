import "./Offer.css";

const Offer = (props) => {
  //componente funcional props-->propiedades

  return (
    <div className="Offer">
      <img src={"/img/" + props.img} alt="" />
      <div className="Offer-info">
        <p className="Offer-title">{props.title}</p>
        <p className="Offer-text">{props.description}</p>
        <p className="Offer-text">{props.price}</p>
      </div>
    </div>
  );
};

export default Offer;
