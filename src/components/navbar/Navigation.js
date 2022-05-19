import "./Navigation.css";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navigation = (props) => {
  // default view is home
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const toRoute = (route) => {
    return route === "home" ? "/" : "/" + route;
  };

  return (
    <nav className="nav-container">
      <ul className="nav-list">
        {Object.entries(props.buttons).map(([key, value]) => {
          // load all buttons listed before
          return (
            <li
              className={
                // if key is the actual active key, set active class
                active === toRoute(key)
                  ? "nav-list-item active"
                  : "nav-list-item"
              }
              key={key}
              onClick={() => setActive(toRoute(key))} // change active button on click
            >
              <NavLink to={toRoute(key)} className="nav-link">
                <img src={"../img/" + value.img} alt="" />
                {value.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
