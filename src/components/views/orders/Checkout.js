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

  return (
    <div className="Checkout">
      <UserForm data={formData} setData={setFormData} />
      <McButton
        content={"Aceptar"}
        onClick={() => alert(JSON.stringify(formData))}
        fixed
      />
    </div>
  );
};

export default Checkout;
