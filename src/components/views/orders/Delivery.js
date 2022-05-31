import "./Delivery.css";
import Map from "../../map/Map.js";
import Searchbar from "../../searchbar/Searchbar.js";

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
      <button className="findme-btn">Localizarme en el mapa</button>
    </div>
  );
};

export default Delivery;
