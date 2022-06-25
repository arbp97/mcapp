import { useEffect, useState } from "react";
import "./Coupon.css";

const Coupon = () => {
  const [nothingToDisplay, setNothingToDisplay] = useState(false);
  const [active, setActive] = useState(true);
  let coupons = JSON.parse(localStorage.getItem("coupons"));
  if (!coupons) {
    coupons = [];
    localStorage.setItem("coupons", coupons);
  }
  // valid coupons
  const activeCoupons = coupons.filter((element) => {
    const actualDate = new Date();
    const newDate = new Date(element.validDate);
    return newDate > actualDate;
  });
  // coupons that expired
  const inactiveCoupons = coupons.filter((element) => {
    const actualDate = new Date();
    const newDate = new Date(element.validDate);
    return newDate < actualDate;
  });

  useEffect(() => {
    // display default view when there is no coupons to
    // display in the current selected section
    if (active) {
      activeCoupons.length <= 0
        ? setNothingToDisplay(true)
        : setNothingToDisplay(false);
    } else {
      inactiveCoupons.length <= 0
        ? setNothingToDisplay(true)
        : setNothingToDisplay(false);
    }
  }, [active, activeCoupons, inactiveCoupons]);

  const DefaultView = () => {
    return (
      <div className="default-view">
        <img src="/img/logo-plain.png" alt="" />
        <h2>
          <strong>No existen cupones para mostrar</strong>
        </h2>
      </div>
    );
  };

  return (
    <div className="Coupon">
      <div className="mode-button-container">
        <button
          type="button"
          className={active === true ? "mode-button selected" : "mode-button"}
          onClick={() => setActive(true)}
        >
          Activos
        </button>
        <button
          type="button"
          className={active === false ? "mode-button selected" : "mode-button"}
          onClick={() => setActive(false)}
        >
          Inactivos
        </button>
      </div>
      {nothingToDisplay && <DefaultView />}
    </div>
  );
};

export default Coupon;
