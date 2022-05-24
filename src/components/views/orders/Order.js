import React from "react";
import MapView from "../../pedidos/MapView.js";
import { NavLink, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "../../product/ProductList.js";
import "./Order.css";

const Order = (props) => {
  return (
    <div className="Order-Clase" >
    <text className="Order-Titulo">Pedidos</text>
    
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet"/>
        <div class="inner-addon left-addon">
          <i class="glyphicon glyphicon-search"></i>
            <input type="text" class="form-control" placeholder="Busca restaurante, direccion, ..."
          />
        </div>

      <MapView />

      <strong>Lista de Restaurantes</strong>
      
      <div className="Order-ListElements">
            {Object.entries(props.category).map(([key, value]) => {
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
