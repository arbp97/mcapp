import "./CurrentOrder.css";
import McButton from "../../buttons/McButton.js";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { QRCode } from "react-qrcode-logo";

const CurrentOrder = (props) => {
  const navigate = useNavigate();
  const order = JSON.parse(localStorage.getItem("order"));

  // restrict access when an order is in place
  if (!props.isOrderConfirmed) {
    return <Navigate to={"/"} replace />;
  }

  const cancelOrder = () => {
    localStorage.removeItem("order");
    props.setIsOrderConfirmed(false);
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
