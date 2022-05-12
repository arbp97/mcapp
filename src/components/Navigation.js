import "../theme/Navigation.css";
import { useState } from "react";

const Navigation = (props) => {
  // default view is home view
  const [active, setActive] = useState(props.default);

  return (
    <nav className="nav-container">
      <ul className="nav-list">
        {Object.entries(props.buttons).map(([key, value]) => {
          // load all buttons listed before
          return (
            <li
              className={
                // if key is the actual active key, set active class
                active == key ? "nav-list-item active" : "nav-list-item"
              }
              key={key}
              onClick=
              {() => setActive(key)} // change active button on click
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
