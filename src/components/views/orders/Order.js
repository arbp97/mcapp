import "./Order.css";
import { useState } from "react";
import Map from "../../map/Map.js";
import Searchbar from "../../searchbar/Searchbar.js";
import { NavLink } from "react-router-dom";

const Order = (props) => {
  const modes = ["pickup", "delivery"];
  const [activeMode, setActiveMode] = useState(modes[0]);

  return (
    <div className="Order">
      <p className="title">Pedidos</p>
      <div className="mode-button-container">
        <div
          className={
            activeMode === modes[0] ? "mode-button selected" : "mode-button"
          }
          onClick={() => setActiveMode(modes[0])}
        >
          Pickup
        </div>
        <div
          className={
            activeMode === modes[1] ? "mode-button selected" : "mode-button"
          }
          onClick={() => setActiveMode(modes[1])}
        >
          McDelivery
        </div>
      </div>
      <Searchbar
        placeholder={"Buscar por direccion..."}
        icontype={"glyphicon-search"}
        name={"orderSearch"}
        id={"orderSearch"}
      />

      <Map markers={props.markers} />
      <div className="marker-list">
        <p className="title">Sucursales</p>
        {Object.entries(props.markers).map(([key, value]) => {
          return (
            <NavLink
              key={key}
              className={"marker"}
              to={""} //TODO: "/orders/" + key  (PARA REDIRIGIR CUANDO TOQUE EL RESTAURANTE)
            >
              <img src={"../img/" + value.img} alt="" />
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

export default Order;
