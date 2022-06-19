import { useParams } from "react-router-dom";
import { useState } from "react";
import { QRCode } from "react-qrcode-logo";
import "./AddCoupon.css";
import { Modal, ModalBody } from "reactstrap";
import McButton from "../../buttons/McButton.js";
import discounts from "../../../data/discounts.js";

const AddCoupon = () => {
  // coupon data
  const { category, id } = useParams();
  const data = discounts[category].items[id];

  // Modal open state
  const [modal, setModal] = useState(false);

  // Toggle for Modal
  const toggleModal = () => setModal(!modal);

  const CouponModal = () => {
    // get date 30 days from now
    let date = new Date();
    date.setDate(date.getDate() + 30);
    const validDate =
      date.getDate() +
      "/" +
      Number(date.getMonth() + 1) +
      "/" +
      date.getFullYear();

    return (
      <Modal isOpen={modal} toggle={toggleModal} centered={true}>
        <ModalBody>
          <p className="title">{data.title}</p>
          <div>
            <QRCode value="https://mcdapp.vercel.app" size={256} />
            <p className="warning">Válido hasta el {validDate}</p>
          </div>
          <McButton
            color={"#ffc72c"}
            onClick={() => alert("WIP")}
            content="Añadir cupón"
          />
        </ModalBody>
      </Modal>
    );
  };

  return (
    <div className="AddCoupon">
      <img src={"/img/" + data.img} alt="" />
      <p className="warning">
        🇦🇷 Este cupón solo es válido para la República Argentina.
      </p>
      <p className="title">{data.title}</p>
      <button className="button" onClick={toggleModal}>
        <img src="/img/qr-icon.png" alt="" />
        OBTENER CUPÓN
      </button>
      <CouponModal />
    </div>
  );
};

export default AddCoupon;
