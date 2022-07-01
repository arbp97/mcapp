import "./CurrentOrder.css";
import McButton from "../../buttons/McButton.js";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { QRCode } from "react-qrcode-logo";

const CurrentOrder = (props) => {
  const navigate = useNavigate();
  const order = JSON.parse(localStorage.getItem("order"));
  const addressTitle = order.isDelivery
    ? "Domicilio"
    : "Dirección de retiro en el local";

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
          <strong>{addressTitle}</strong>
        </h3>
        <h3>{order.address}</h3>
      </div>
      <QRCode
        value="https://mcdapp.vercel.app"
        size={256}
        bgColor={"#ffc72c"}
      />
      <div className="info">
        <h1>
          <strong>AM1 - A2T - DKE</strong>
        </h1>
        <h3>
          <strong>Método de Pago: </strong>
          {order.paymentType}
        </h3>
        <h3>
          <strong>Total: </strong>
          {"$ " + order.total + ".00"}
        </h3>
      </div>
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
