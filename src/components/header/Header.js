import "./Header.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  const handleNavigate = () => {
    return location.pathname === "/" ? false : navigate(-1);
  };

  useEffect(() => {
    setShowButton(location.pathname !== "/");
  }, [location]);

  return (
    <div className="div-header">
      <button
        className={showButton ? "go-back-btn" : "go-back-btn hidden"}
        onClick={() => {
          handleNavigate();
        }}
      >
        <img src={"../img/left-arrow.png"} alt="" />
        Volver
      </button>
      <img className="logo" src="../img/logo-plain.png" alt="" />
    </div>
  );
};

export default Header;
