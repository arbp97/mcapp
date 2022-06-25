import { useParams } from "react-router-dom";
import { useState } from "react";
import "./ViewCoupon.css";
import CouponModal from "../../modal/CouponModal.js";

const ViewCoupon = () => {
  // coupon data
  const { id } = useParams();
  const coupons = JSON.parse(localStorage.getItem("coupons"));
  const data = coupons[id];

  // Modal open state
  const [modal, setModal] = useState(false);

  // Toggle for Modal
  const toggleModal = () => setModal(!modal);

  return (
    <div className="ViewCoupon">
      <img src={"/img/" + data.img} alt="" />
      <p className="warning">
        🇦🇷 Este cupón solo es válido para la República Argentina.
      </p>
      <p className="title">{data.title}</p>
      <button className="button" onClick={toggleModal}>
        <img src="/img/qr-icon.png" alt="" />
        Utilizar QR
      </button>
      <CouponModal
        modal={modal}
        toggleModal={toggleModal}
        title={data.title}
        validDate={data.validDate}
      />
    </div>
  );
};

export default ViewCoupon;
