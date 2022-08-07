import "./CouponModal.css";
import { LOCALE } from "../../config";
import { Modal } from "reactstrap";
import { QRCode } from "react-qrcode-logo";

type CouponModalProps = {
  modal: boolean;
  toggleModal: () => void;
  title: string;
  validDate: Date;
  code: string;
};

const CouponModal = ({
  modal,
  toggleModal,
  title,
  validDate,
  code,
}: CouponModalProps) => {
  return (
    <Modal isOpen={modal} toggle={toggleModal} centered={true}>
      <p className="title">{title}</p>
      <div>
        <QRCode value="https://mcdapp.vercel.app" size={256} />
        <p className="warning">
          Válido hasta el {new Date(validDate).toLocaleDateString(LOCALE)}
        </p>
      </div>
      <div className="coupon-code">{code}</div>
    </Modal>
  );
};

export default CouponModal;
