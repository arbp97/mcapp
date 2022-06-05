import "./Delivery.css";
import Map from "../../map/Map.js";
import Searchbar from "../../input/Searchbar.js";
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
      <McButton
        content={"Localizarme en el mapa"}
        onClick={() => alert("Work in progress")}
        fixed
      />
    </div>
  );
};

export default Delivery;
