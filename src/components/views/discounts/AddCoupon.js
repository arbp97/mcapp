import { useParams } from "react-router-dom";
import { useState } from "react";
import "./AddCoupon.css";
import discounts from "../../../data/discounts.js";
import CouponModal from "../../modal/CouponModal.js";

const AddCoupon = () => {
  // coupon data
  const { category, id } = useParams();
  const data = discounts[category].items[id];
  let coupons = JSON.parse(localStorage.getItem("coupons"));
  // get date 30 days from now
  let date = new Date();
  date.setDate(date.getDate() + 30);

  const displayDate = (d) => {
    return (
      d.getDate() + "/" + Number(date.getMonth() + 1) + "/" + date.getFullYear()
    );
  };

  // Modal open state
  const [modal, setModal] = useState(false);
  // Toggle for Modal
  const toggleModal = () => setModal(!modal);
  const [added, setAdded] = useState(false);

  const handleAddCoupon = () => {
    if (!added) {
      const coupon = {
        title: data.title,
        img: data.img,
        validDate: date,
      };

      if (!coupons) {
        coupons = [];
      }

      coupons.push(coupon);
      localStorage.setItem("coupons", JSON.stringify(coupons));
      setAdded(true);
    }

    toggleModal();
  };

  return (
    <div className="AddCoupon">
      <img src={"/img/" + data.img} alt="" />
      <p className="warning">
        🇦🇷 Este cupón solo es válido para la República Argentina.
      </p>
      <p className="title">{data.title}</p>
      <button className="button" onClick={handleAddCoupon}>
        <img src="/img/qr-icon.png" alt="" />
        OBTENER CUPÓN
      </button>
      <CouponModal
        modal={modal}
        toggleModal={toggleModal}
        title={data.title}
        validDate={displayDate(date)}
      />
    </div>
  );
};

export default AddCoupon;
