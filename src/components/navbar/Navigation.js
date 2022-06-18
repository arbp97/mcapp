import "./Navigation.css";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navigation = (props) => {
  // default view is home
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  // returns supposed route with a slash
  const toRoute = (route) => {
    return route === "home" ? "/" : "/" + route;
  };

  useEffect(() => {
    // returns the root section of a route, as route
    const toRoot = (route) => {
      for (const b of Object.entries(props.buttons)) {
        if (route.includes(b[0])) return toRoute(b[0]);
      }
      return route;
    };

    setActive(toRoot(location.pathname));
  }, [location, props.buttons]);

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
            >
              <NavLink to={toRoute(key)} className="nav-link">
                <img src={"/img/" + value.img} alt="" />
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
