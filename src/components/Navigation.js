import "../theme/Navigation.css";
import { createRef, useState } from "react";

const Navigation = () => {
  // nav button values
  const buttons = {
    home: { text: "Home", img: "logo-black.png" },
    orders: { text: "Pedidos", img: "fries.png" },
    discounts: { text: "Ofertas", img: "ticket.png" },
    coupons: { text: "Cupones", img: "coupon.png" },
    more: { text: "Más", img: "more.png" },
  };

  // default view is home view
  const [active, setActive] = useState("home");

  return (
    <nav className="nav-container">
      <ul className="nav-list">
        {Object.entries(buttons).map(([key, value]) => {
          // load all buttons listed before
          return (
            <li
              className={
                // if key is the actual active key, set active class
                active == key ? "nav-list-item active" : "nav-list-item"
              }
              key={key}
              onClick={() => setActive(key)} // change active button on click
            >
              <img src={"img/nav/" + value.img}></img>
              <p>{value.text}</p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
