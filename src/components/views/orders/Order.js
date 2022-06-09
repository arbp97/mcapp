import "./Order.css";
import Map from "../../map/Map.js";
import Searchbar from "../../input/Searchbar.js";
import McButton from "../../buttons/McButton.js";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const RestaurantList = (props) => {
  const [query, setQuery] = useState("");

  return (
    <div className="RestaurantList">
      <Searchbar
        placeholder={"Buscar por direccion..."}
        icontype={"glyphicon-search"}
        name={"orderSearch"}
        id={"orderSearch"}
        query={query}
        setQuery={setQuery}
      />
      <Map markers={props.markers} />
      <div className="marker-list">
        <p className="title">Sucursales</p>
        {Object.entries(props.markers)
          .filter(([key, value]) =>
            value.title.toLowerCase().includes(query.toLowerCase())
          )
          .map(([key, value]) => {
            return (
              <NavLink
                key={key}
                className={"marker"}
                to={"/orders/add"}
                state={{
                  name: value.title,
                  address: value.location,
                  img: value.img,
                }}
              >
                <img src={"/img/" + value.img} alt="" />
                <div className="marker-info">
                  <h6 className="title">{value.title} </h6>
                  <h6 className="location">{value.location}</h6>
                </div>
              </NavLink>
            );
          })}
      </div>
    </div>
  );
};

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

const Order = (props) => {
  const modes = ["pickup", "delivery"];
  const [activeMode, setActiveMode] = useState(props.active);

  return (
    <div className="Order">
      <p className="title">Pedidos</p>
      <div className="mode-button-container">
        <button
          type="button"
          className={
            activeMode === modes[0] ? "mode-button selected" : "mode-button"
          }
          onClick={() => setActiveMode(modes[0])}
        >
          Pickup
        </button>
        <button
          type="button"
          className={
            activeMode === modes[1] ? "mode-button selected" : "mode-button"
          }
          onClick={() => setActiveMode(modes[1])}
        >
          McDelivery
        </button>
      </div>
      {activeMode === modes[0] && <RestaurantList markers={props.markers} />}
      {activeMode === modes[1] && <Delivery />}
    </div>
  );
};

export default Order;
