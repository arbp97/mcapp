import "./AddCoupon.css";
import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { IMG_PATH, STORAGE } from "../../../config";
import DISCOUNTS from "../../../data/discounts";
import CouponModal from "../../modal/CouponModal";
import useRandom from "../../../hooks/useRandom";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { CouponType } from "../../../@types/coupon";

const AddCoupon = () => {
  // coupon couponData
  const { category, id } = useParams<{ category?: string; id?: string }>();
  const couponData = DISCOUNTS.find(
    (discountCategory) => discountCategory.id === category
  )!.items[Number(id)];

  const { getStorageItem, setStorageItem } = useLocalStorage();
  let coupons = getStorageItem(STORAGE.COUPONS) as CouponType[];

  // get date 30 days from now
  let date = new Date();
  date.setDate(date.getDate() + 30);

  // Modal open state
  const [modal, setModal] = useState(false);
  // Toggle for Modal
  const toggleModal = () => setModal(!modal);
  const [added, setAdded] = useState(false);

  const randomString = useRandom(9);
  const code = useMemo(() => {
    return randomString.match(/.{1,3}/g)!.join("-");
    // eslint-disable-next-line
  }, []);

  const handleAddCoupon = () => {
    if (!added) {
      const coupon = {
        title: couponData?.title,
        img: couponData?.img,
        price: couponData?.price,
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
      <img src={IMG_PATH + couponData?.img} alt="" />
      <p className="warning">
        🇦🇷 Este cupón solo es válido para la República Argentina.
      </p>
      <p className="title">{couponData?.title}</p>
      <button className="button" onClick={handleAddCoupon}>
        <img src={IMG_PATH + "qr-icon.png"} alt="" />
        OBTENER CUPÓN
      </button>
      <CouponModal
        modal={modal}
        toggleModal={toggleModal}
        title={couponData?.title}
        code={code}
        validDate={date}
      />
    </div>
  );
};

export default AddCoupon;
