import "./CurrentOrder.css";
import McButton from "../../buttons/McButton.js";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { QRCode } from "react-qrcode-logo";

const CurrentOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state ? location.state.order : null;

  useEffect(() => {
    if (!order || !order.confirmed) navigate("/");
  }, [order, navigate]);

  const cancelOrder = () => {
    localStorage.removeItem("order");
    navigate("/");
  };

  return (
    <div className="CurrentOrder">
      <div className="title">
        <img src="/img/order-bag-nobg.png" alt="" />
        Pedido en curso
      </div>
      <div className="address">
        <h3>
          <strong>Dirección de retiro en el local</strong>
        </h3>
        <h3>{order.address}</h3>
      </div>
      <QRCode
        value="https://mcdapp.vercel.app"
        size={256}
        bgColor={"#ffc72c"}
      />
      <h1 className="info">
        <strong>
          Muéstrale este código al cajero, pagá y retirá tu pedido en minutos.
        </strong>
      </h1>
      <McButton
        content={"Cancelar pedido"}
        color="#da291c"
        onClick={() => cancelOrder()}
        fixed
      />
    </div>
  );
};

export default CurrentOrder;
