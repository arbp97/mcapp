import React from "react";
import Map from "../../map/Map.js";
import { NavLink } from "react-router-dom";
import "./Order.css";
import { Form, FormGroup, Input } from "reactstrap";

const Order = (props) => {
  return (
    <div className="Order-Clase">
      <p className="Order-Titulo">Pedidos</p>
      <div className="inner-addon left-addon">
        <i className="glyphicon glyphicon-search"></i>
        <Form>
          <FormGroup>
            <Input
              className="form-control"
              type="text"
              name="search"
              id="searchRestaurant"
              placeholder="Buscar por dirección..."
            />
          </FormGroup>
        </Form>
      </div>

      <Map markers={props.markers} />
      <strong>Lista de Restaurantes</strong>
      <div className="Order-ListElements">
        {Object.entries(props.markers).map(([key, value]) => {
          return (
            <NavLink
              key={key}
              className={"Order-link"}
              to={""} //TODO: "/orders/" + key  (PARA REDIRIGIR CUANDO TOQUE EL RESTAURANTE)
            >
              <img className="Order-img" src={"../img/" + value.img} alt="" />
              <div className="Order-ListElements1">
                <h6 className="Order-ListTitulo">{value.title} </h6>
                <div className="Order-ListElements2">
                  <h6 className="Order-SubListTitulo">{value.location}</h6>
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
