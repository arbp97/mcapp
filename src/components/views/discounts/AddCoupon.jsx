import { useParams } from "react-router-dom";
import { useState } from "react";
import { IMG_PATH, STORAGE } from "../../../config.js";
import "./AddCoupon.css";
import discounts from "../../../data/discounts.js";
import CouponModal from "../../modal/CouponModal";
import useRandom from "../../../hooks/useRandom.js";
import useLocalStorage from "../../../hooks/useLocalStorage.js";

const AddCoupon = () => {
  // coupon data
  const { category, id } = useParams();
  const data = discounts[category].items[id];
  const [getStorageItem, setStorageItem] = useLocalStorage();
  let coupons = getStorageItem(STORAGE.COUPONS);
  const [randomString] = useRandom(9);
  // get date 30 days from now
  let date = new Date();
  date.setDate(date.getDate() + 30);

  // Modal open state
  const [modal, setModal] = useState(false);
  // Toggle for Modal
  const toggleModal = () => setModal(!modal);
  const [added, setAdded] = useState(false);
  const code = randomString.match(/.{1,3}/g).join("-");

  const handleAddCoupon = () => {
    if (!added) {
      const coupon = {
        title: data.title,
        img: data.img,
        price: data.price,
        code: code,
        validDate: date,
      };

      if (!coupons) {
        coupons = [];
      }

      coupons.push(coupon);
      setStorageItem(STORAGE.COUPONS, coupons);
      setAdded(true);
    }

    toggleModal();
  };

  return (
    <div className="AddCoupon">
      <img src={IMG_PATH + data.img} alt="" />
      <p className="warning">
        🇦🇷 Este cupón solo es válido para la República Argentina.
      </p>
      <p className="title">{data.title}</p>
      <button className="button" onClick={handleAddCoupon}>
        <img src={IMG_PATH + "qr-icon.png"} alt="" />
        OBTENER CUPÓN
      </button>
      <CouponModal
        modal={modal}
        toggleModal={toggleModal}
        title={data.title}
        code={code}
        validDate={date}
      />
    </div>
  );
};

export default AddCoupon;
