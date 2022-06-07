import "./Checkout.css";
import UserForm from "../../form/UserForm.js";
import McButton from "../../buttons/McButton.js";
import { useState } from "react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    dni: "",
    phone: "",
  });

  const handleValidation = () => {
    // eslint-disable-next-line
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      alert("Correo inválido");
      return;
    }

    if (!/^[a-zA-Z]+$/.test(formData.name)) {
      alert("Nombre inválido");
      return;
    }

    if (!/^[0-9]+$/.test(formData.dni)) {
      alert("Ingrese un DNI");
      return;
    }

    if (!/^([0-9]{10})+$/.test(formData.phone)) {
      alert("Ingrese un teléfono válido");
      return;
    }
  };

  return (
    <div className="Checkout">
      <UserForm data={formData} setData={setFormData} />
      <McButton content={"Aceptar"} onClick={() => handleValidation()} fixed />
    </div>
  );
};

export default Checkout;
