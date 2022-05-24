import React from "react";
import Map from "../../map/Map.js";
import { NavLink } from "react-router-dom";
import "./Order.css";
import { Input } from "reactstrap";

const Order = (props) => {
  return (
    <div className="Order">
      <p className="title">Pedidos</p>
      <div className="searchbar">
        <i className="glyphicon glyphicon-search"></i>
        <Input
          type="text"
          name="search"
          id="searchRestaurant"
          placeholder="Buscar por dirección..."
        />
      </div>

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
