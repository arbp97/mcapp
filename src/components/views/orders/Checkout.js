import "./Checkout.css";
import UserForm from "../../form/UserForm.js";
import McButton from "../../buttons/McButton.js";
import { useEffect, useState } from "react";

const UserValidation = (props) => {
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

    if (!/^([a-zA-Z ]){2,30}$/.test(formData.name)) {
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

    localStorage.setItem("user", JSON.stringify(formData));
    props.setIsValidated(true);
  };

  return (
    <div className="UserValidation">
      <UserForm data={formData} setData={setFormData} />
      <McButton content={"Aceptar"} onClick={() => handleValidation()} fixed />
    </div>
  );
};

const Checkout = () => {
  const [isValidated, setIsValidated] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) setIsValidated(true);
  }, [setIsValidated]);

  return (
    <div className="Checkout">
      {!isValidated && <UserValidation setIsValidated={setIsValidated} />}
      {isValidated && <p>VALIDATED</p>}
    </div>
  );
};

export default Checkout;
