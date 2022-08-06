import "./UserForm.css";
import McInput from "../input/McInput.js";
import McButton from "../buttons/McButton.js";
import { useState } from "react";
import InfoModal from "../modal/InfoModal.js";
import useLocalStorage from "../../hooks/useLocalStorage.js";
import { STORAGE } from "../../config.js";

const UserForm = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    dni: "",
    phone: "",
  });
  const [setStorageItem] = useLocalStorage();

  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const toggleModal = (message) => {
    setModalMessage(message ? message : "");
    setShowModal(!showModal);
  };

  const handleValidation = () => {
    // eslint-disable-next-line
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      toggleModal("Correo inválido");
      return;
    }

    if (!/^([a-zA-Z ]){2,30}$/.test(formData.name)) {
      toggleModal("Nombre inválido");
      return;
    }

    if (!/^[0-9]+$/.test(formData.dni)) {
      toggleModal("DNI inválido");
      return;
    }

    if (!/^([0-9]{10})+$/.test(formData.phone)) {
      toggleModal("Teléfono inválido");
      return;
    }

    setStorageItem(STORAGE.USER, formData);
    props.setIsValidated(true);
  };

  return (
    <div className="UserForm">
      <div className="UserFormContainer">
        <h1>
          <strong>Datos</strong>
        </h1>
        <McInput
          id={"input-name"}
          type={"text"}
          label={"Nombre y apellido"}
          width={"100%"}
          value={formData.name}
          onChange={(e) => {
            // eslint-disable-next-line
            setFormData({ ...formData, ["name"]: e.target.value });
          }}
        />
        <McInput
          id={"input-email"}
          type={"email"}
          label={"Correo"}
          width={"100%"}
          value={formData.email}
          onChange={(e) => {
            // eslint-disable-next-line
            setFormData({ ...formData, ["email"]: e.target.value });
          }}
        />
        <McInput
          id={"input-country"}
          type={"text"}
          label={"País"}
          width={"100%"}
          value={"Argentina"}
          disabled
        />
        <div className="composite-input">
          <McInput
            id={"input-dni-type"}
            type={"text"}
            label={"Tipo"}
            width={"25%"}
            value={"DNI"}
            disabled
          />
          <McInput
            id={"input-dni"}
            type={"text"}
            label={"Documento"}
            width={"70%"}
            value={formData.dni}
            onChange={(e) => {
              // eslint-disable-next-line
              setFormData({ ...formData, ["dni"]: e.target.value });
            }}
          />
        </div>
        <div className="composite-input">
          <McInput
            id={"input-phone-prefix"}
            type={"text"}
            label={"Prefijo"}
            width={"25%"}
            value={"+54"}
            disabled
          />
          <McInput
            id={"input-phone"}
            type={"tel"}
            placeholder={"00-0000-0000"}
            label={"Teléfono"}
            width={"70%"}
            value={formData.phone}
            onChange={(e) => {
              // eslint-disable-next-line
              setFormData({ ...formData, ["phone"]: e.target.value });
            }}
          />
        </div>
      </div>
      <InfoModal
        toggle={() => toggleModal()}
        isOpen={showModal}
        title="Atención"
        message={modalMessage}
      />
      <McButton content={"Aceptar"} onClick={() => handleValidation()} fixed />
    </div>
  );
};

export default UserForm;
