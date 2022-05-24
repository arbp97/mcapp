import React from "react";
import MapView from "../../pedidos/MapView.js";
import { NavLink, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "../../product/ProductList.js";
import "./Order.css";

const Order = (props) => {
  return (
    <div className="Order" >
    <h2 className="Pedidos">Pedidos</h2>
    
        <div class="input-group">
          <input class="navbar-text" type="text"
          placeholder="Busca restaurante, direccion, ..."
          />
        </div>

      <MapView />

      <strong>Lista de Restaurantes</strong>
      
      <div className="Order-ListElements">
            {Object.entries(props.category).map(([key, value]) => {
              // map all categories as links
              return (
                <NavLink
                  key={key}
                  className={"Order-link"}
                  to={"/catalogue/" + key}
                >
                <img className="Order-img" src={"../img/" + value.img} alt="" />
                <div className="Order-ListElements1">
                  <h6>{value.title} </h6>
                    <div className="Order-ListElements2">
                      <h6>{value.location}</h6>
                    </div>
                </div>
                </NavLink>
              );
            })}
          </div>
    </div>
  );
};

export default Order;
