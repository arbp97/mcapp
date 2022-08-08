import "./Navigation.css";
import { IMG_PATH, URLS } from "../../config";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NAV_BUTTONS = [
  { text: "Home", img: "logo-black.png", path: URLS.ROOT },
  { text: "Pedidos", img: "fries.png", path: URLS.ORDERS },
  { text: "Ofertas", img: "ticket.png", path: URLS.DISCOUNTS },
  { text: "Cupones", img: "coupon.png", path: URLS.COUPONS },
  { text: "Menú", img: "more.png", path: URLS.CATALOGUE },
];

const Navigation = () => {
  // default view is home
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  useEffect(() => {
    // returns the root section of a route, as route
    const toRoot = (route: string) => {
      if (route === URLS.ROOT) return URLS.ROOT;

      for (const button of NAV_BUTTONS) {
        if (button.path === URLS.ROOT) continue;
        if (route.includes(button.path)) return button.path;
      }
    };

    setActive(toRoot(location.pathname)!);
    // eslint-disable-next-line
  }, [location]);

  return (
    <nav className="nav-container">
      <ul className="nav-list">
        {NAV_BUTTONS.map((value) => {
          // load all buttons listed before
          return (
            <li
              className={
                // if key is the actual active key, set active class
                active === value.path ? "nav-list-item active" : "nav-list-item"
              }
              key={value.path}
            >
              <NavLink to={value.path} className="nav-link">
                <img src={IMG_PATH + value.img} alt="" />
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
