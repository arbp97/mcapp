import React from "react";
import MapView from "../../pedidos/MapView.js";
import "./Order.css";

const Order = () => {
  return (
    <div className="Order" >
    <h1 className="Pedidos">Pedidos</h1>
        <input class="navbar-text" type="text"
          placeholder="Busca restaurante, direccion, ..."
          />
      <MapView />
    </div>
  );
};

export default Order;
