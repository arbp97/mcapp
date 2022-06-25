import { useEffect, useState } from "react";
import "./Coupon.css";

const Coupon = () => {
  const coupons = JSON.parse(localStorage.getItem("coupons"));
  const [nothingToDisplay, setNothingToDisplay] = useState(false);
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (!coupons || coupons.length <= 0) {
      setNothingToDisplay(true);
    }
  }, [coupons]);

  const DefaultView = () => {
    return (
      <div className="default-view">
        <img src="/img/logo-plain.png" alt="" />
        <h1>
          <strong>No existen cupones para mostrar</strong>
        </h1>
      </div>
    );
  };

  return (
    <div className="Coupon">
      <div className="mode-button-container">
        <button
          type="button"
          className={active ? "mode-button selected" : "mode-button"}
          onClick={() => setActive(!active)}
        >
          Activos
        </button>
        <button
          type="button"
          className={!active ? "mode-button selected" : "mode-button"}
          onClick={() => setActive(!active)}
        >
          Inactivos
        </button>
      </div>
      {nothingToDisplay && <DefaultView />}
    </div>
  );
};

export default Coupon;
