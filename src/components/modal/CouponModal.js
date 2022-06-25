import "./CouponModal.css";
import { Modal } from "reactstrap";
import { QRCode } from "react-qrcode-logo";

const CouponModal = (props) => {
  return (
    <Modal isOpen={props.modal} toggle={props.toggleModal} centered={true}>
      <p className="title">{props.title}</p>
      <div>
        <QRCode value="https://mcdapp.vercel.app" size={256} />
        <p className="warning">Válido hasta el {props.validDate}</p>
      </div>
      <div className="coupon-code">AM1 - A2T - DKE</div>
    </Modal>
  );
};

export default CouponModal;
