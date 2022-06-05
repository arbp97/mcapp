import "./Delivery.css";
import Map from "../../map/Map.js";
import Searchbar from "../../searchbar/Searchbar.js";
import McButton from "../../buttons/McButton.js";

const Delivery = () => {
  return (
    <div className="Delivery">
      <div className="delivery-map">
        <Searchbar
          placeholder={"Ingresar dirección de entrega"}
          icontype={"glyphicon-search"}
          name={"deliverySearch"}
          id={"deliverySearch"}
        />
        <Map markers={[]} />
      </div>
      <div className="button-container">
        <McButton
          content={"Localizarme en el mapa"}
          onClick={() => alert("Work in progress")}
        />
      </div>
    </div>
  );
};

export default Delivery;
