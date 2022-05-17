import React from "react";
import { ReactComponent as Logo } from "./McDonalds.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav-header">
      <div className="div-header">
        <div className="div-svg">
          <Logo />
        </div>
      </div>
    </nav>
  );
};

export default Header;
