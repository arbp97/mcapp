import "./CouponModal.css";
import { LOCALE } from "../../config.js";
import { Modal } from "reactstrap";
import { QRCode } from "react-qrcode-logo";

const CouponModal = (props) => {
  return (
    <Modal isOpen={props.modal} toggle={props.toggleModal} centered={true}>
      <p className="title">{props.title}</p>
      <div>
        <QRCode value="https://mcdapp.vercel.app" size={256} />
        <p className="warning">
          Válido hasta el {new Date(props.validDate).toLocaleDateString(LOCALE)}
        </p>
      </div>
      <div className="coupon-code">{props.code}</div>
    </Modal>
  );
};

export default CouponModal;
