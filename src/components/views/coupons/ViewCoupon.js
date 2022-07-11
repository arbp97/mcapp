import { Navigate, useParams } from "react-router-dom";
import { useState } from "react";
import "./ViewCoupon.css";
import CouponModal from "../../modal/CouponModal.js";
import useLocalStorage from "../../../hooks/useLocalStorage.js";

const ViewCoupon = () => {
  // coupon data
  const { id } = useParams();
  const [getStorageItem] = useLocalStorage();
  const coupons = getStorageItem("coupons");
  const data = coupons[id];
  const date = new Date();

  // Modal open state
  const [modal, setModal] = useState(false);

  // Toggle for Modal
  const toggleModal = () => setModal(!modal);

  // deny access if its not an active coupon
  if (new Date(data.validDate) < date) {
    return <Navigate to={"/coupons"} replace />;
  }

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
        code={data.code}
        title={data.title}
        validDate={data.validDate}
      />
    </div>
  );
};

export default ViewCoupon;
