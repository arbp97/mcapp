import React from "react";
import MapView from "../../pedidos/MapView.js";
import "./Order.css";

const Order = () => {
  return (
    <div className="Order" >
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-text">
            Busca restaurante, direccion, ...
          </span>
        </div>
      </nav>
      <MapView />
    </div>
  );
};

export default Order;
