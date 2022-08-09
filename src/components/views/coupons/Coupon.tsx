import { useEffect, useState } from "react";
import { IMG_PATH, LOCALE, STORAGE, URLS } from "../../../config";
import { Link } from "react-router-dom";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { CouponType } from "../../../@types/coupon";
import useFormat from "../../../hooks/useFormat";
import "./Coupon.css";

// local types
type CouponAndIndexType = CouponType & {
  parentIndex: number;
};

const Coupon = () => {
  const [nothingToDisplay, setNothingToDisplay] = useState(false);
  const [active, setActive] = useState(true);
  const { getStorageItem, setStorageItem } = useLocalStorage();
  const [currencyFormatter] = useFormat();
  const date = new Date();

  let coupons = getStorageItem(STORAGE.COUPONS) as CouponType[];

  if (!coupons) {
    coupons = [];
    setStorageItem(STORAGE.COUPONS, coupons);
  }

  let activeCoupons: CouponAndIndexType[] = [],
    inactiveCoupons: CouponAndIndexType[] = [];

  for (const [i, coupon] of coupons.entries()) {
    new Date(coupon.validDate) > date
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
    // eslint-disable-next-line
  }, [active]);

  const DefaultView = () => {
    return (
      <div className="default-view">
        <img src={IMG_PATH + "logo-plain.png"} alt="" />
        <h2>
          <strong>No existen cupones para mostrar</strong>
        </h2>
      </div>
    );
  };

  type CouponCardProps = Omit<CouponAndIndexType, "title" | "code"> & {
    disabled?: boolean;
  };

  const CouponCard = ({
    validDate,
    disabled,
    parentIndex,
    img,
    price,
  }: CouponCardProps) => {
    return (
      <Link
        className="coupon-card"
        to={disabled ? " " : URLS.COUPONS + parentIndex}
      >
        <img src={IMG_PATH + img} alt="" />
        <div className="info">
          <span className="date">
            {"Vence el " + new Date(validDate).toLocaleDateString(LOCALE)}
          </span>
          <span className="price">{currencyFormatter().format(price)}</span>
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
              validDate={element.validDate}
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
              validDate={element.validDate}
              img={element.img}
              price={element.price}
            />
          );
        })}
    </div>
  );
};

export default Coupon;
