import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../../../hooks/useLocalStorage.js";
import "./Coupon.css";

const Coupon = () => {
  const [nothingToDisplay, setNothingToDisplay] = useState(false);
  const [active, setActive] = useState(true);
  const [getStorageItem, setStorageItem] = useLocalStorage();
  const date = new Date();

  let coupons = getStorageItem("coupons");
  if (!coupons) {
    coupons = [];
    setStorageItem("coupons", coupons);
  }

  // filter coupons into two distinct arrays active / inactive
  // based on current date
  let activeCoupons = [],
    inactiveCoupons = [];

  for (const [i, coupon] of coupons.entries()) {
    const newDate = new Date(coupon.validDate);
    newDate > date
      ? activeCoupons.push({ ...coupon, parentIndex: i })
      : inactiveCoupons.push({ ...coupon, parentIndex: i });
  }

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
  }, [active, activeCoupons.length, inactiveCoupons.length]);

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

  const CouponCard = (props) => {
    return (
      <Link
        className="coupon-card"
        to={props.disabled ? " " : "/coupons/" + props.parentIndex}
      >
        <img src={"/img/" + props.img} alt="" />
        <div className="info">
          <span className="date">
            {"Vence el " + new Date(props.date).toLocaleDateString("es-AR")}
          </span>
          <span className="price">{"$ " + props.price}</span>
        </div>
      </Link>
    );
  };

  return (
    <div className="Coupon">
      <div className="mode-button-container">
        <button
          type="button"
          className={active ? "mode-button selected" : "mode-button"}
          onClick={() => setActive(true)}
        >
          Activos
        </button>
        <button
          type="button"
          className={!active ? "mode-button selected" : "mode-button"}
          onClick={() => setActive(false)}
        >
          Inactivos
        </button>
      </div>
      {nothingToDisplay && <DefaultView />}
      {!nothingToDisplay &&
        active &&
        activeCoupons.map((element, index) => {
          return (
            <CouponCard
              key={index}
              parentIndex={element.parentIndex}
              date={element.validDate}
              img={element.img}
              price={element.price}
            />
          );
        })}
      {!nothingToDisplay &&
        !active &&
        inactiveCoupons.map((element, index) => {
          return (
            <CouponCard
              disabled={true}
              key={index}
              parentIndex={element.parentIndex}
              date={element.validDate}
              img={element.img}
              price={element.price}
            />
          );
        })}
    </div>
  );
};

export default Coupon;
