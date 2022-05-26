import Offer from "./Offer.js";
import "./OffersList.css";

const OffersList = (props) => {
  return (
    <div className="OffersList">
      {Object.entries(props.offers).map(([key, value]) => {
        <p>{props.category}</p>
        return (
          <Offer
            key={key}
            img={value.img}
            title={value.title}
            description={value.description}
            price={value.price}
          />
        );
      })}
    </div>
  );
};

export default OffersList;
