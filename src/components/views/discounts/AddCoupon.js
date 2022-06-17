import { useLocation } from "react-router-dom";
import "./AddCoupon.css";

const AddCoupon = () => {
  const location = useLocation();
  const data = location.state;
  return (
    <div className="AddCoupon">
      <img src={"/img/" + data.img} alt="" />
      <p className="warning">
        🇦🇷 Este cupón solo es válido para la República Argentina.
      </p>
      <p className="title">{data.name}</p>
      <button className="button">
        <img src="/img/qr-icon.png" alt="" />
        OBTENER CUPÓN
      </button>
    </div>
  );
};

export default AddCoupon;
