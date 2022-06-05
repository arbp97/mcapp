import "./Checkout.css";
import UserForm from "../../form/UserForm.js";
import McButton from "../../buttons/McButton.js";

const Checkout = () => {
  return (
    <div className="Checkout">
      <UserForm />
      <McButton
        content={"Aceptar"}
        onClick={() => alert("Work in progress")}
        fixed
      />
    </div>
  );
};

export default Checkout;
