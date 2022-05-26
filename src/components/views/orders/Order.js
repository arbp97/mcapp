import "./Order.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Order = (props) => {
  const modes = ["pickup", "delivery"];
  const [activeMode, setActiveMode] = useState(props.active);

  return (
    <div className="Order">
      <p className="title">Pedidos</p>
      <div className="mode-button-container">
        <NavLink
          className={
            activeMode === modes[0] ? "mode-button selected" : "mode-button"
          }
          onClick={() => setActiveMode(modes[0])}
          to={"/orders"}
        >
          Pickup
        </NavLink>
        <NavLink
          className={
            activeMode === modes[1] ? "mode-button selected" : "mode-button"
          }
          onClick={() => setActiveMode(modes[1])}
          to={"/orders/delivery"}
        >
          McDelivery
        </NavLink>
      </div>
    </div>
  );
};

export default Order;
