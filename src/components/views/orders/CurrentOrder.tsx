import "./CurrentOrder.css";
import { IMG_PATH, URLS } from "../../../config";
import McButton from "../../buttons/McButton";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { QRCode } from "react-qrcode-logo";
import useFormat from "../../../hooks/useFormat";
import { useOrderContext } from "../../../context/OrderContext";

const CurrentOrder = () => {
  const navigate = useNavigate();
  const { order, removeOrder } = useOrderContext();
  const [currencyFormatter] = useFormat();

  // restrict access when an order is in place
  if (!order || !order.confirmed) {
    return <Navigate to={URLS.ROOT} replace />;
  }

  const cancelOrder = () => {
    removeOrder();
    navigate(URLS.ROOT);
  };

  const addressTitle = order.isDelivery
    ? "Domicilio"
    : "Dirección de retiro en el local";

  return (
    <div className="CurrentOrder">
      <div className="title">
        <img src={IMG_PATH + "order-bag-nobg.png"} alt="" />
        Pedido en curso
      </div>
      <div className="address">
        <h3>
          <strong>{addressTitle}</strong>
        </h3>
        <h3>{order.address.split(",").slice(0, 3).join(", ")}</h3>
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
          {currencyFormatter().format(order.total)}
        </h3>
      </div>
      <McButton
        text={"Cancelar pedido"}
        color="#da291c"
        onClick={() => cancelOrder()}
        fixed
      />
    </div>
  );
};

export default CurrentOrder;
