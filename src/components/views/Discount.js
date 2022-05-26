import offers from "../../data/offers.js";
import OfferList from "../offers/OffersList.js";

const Discount = () => {
  return (
    <div className="discount">
      <p>Discount view</p>
      <OfferList offers={offers}/>
    </div>
  );
};

export default Discount;
