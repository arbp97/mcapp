import "./Checkout.css";
import UserForm from "../../form/UserForm.js";
import McButton from "../../buttons/McButton.js";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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

const Detail = (props) => {
  return (
    <div className="Detail">
      <div className="detail-box">
        <h1 className="title">
          <strong>Detalle del pedido</strong>
        </h1>
        <div className="address">
          <h3>
            <strong>Dirección de retiro en el local</strong>
          </h3>
          <h3>{props.order.address}</h3>
        </div>
        <div className="items">
          <h3>
            <strong>Resumen</strong>
          </h3>
          {Object.entries(props.order.items).map(([key, value]) => {
            return (
              <div className="item" key={key}>
                <p className="name">{value.name}</p>
                <p>{"x " + value.quantity}</p>
                <p>{"$" + value.pricePerUnit * value.quantity}</p>
              </div>
            );
          })}
        </div>
        <h1 className="pay-method">
          <strong>Método de pago</strong>
        </h1>
        <h3>Pagás al retirar el pedido en la sucursal.</h3>
      </div>
      <div className="detail-total">
        <p>Total</p>
        <p>{"$ " + props.total}</p>
      </div>
      <McButton content={"Enviar pedido"} onClick={() => alert("WIP")} fixed />
    </div>
  );
};

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isValidated, setIsValidated] = useState(false);

  useEffect(() => {
    // exit if there is no order in the state
    if (!location.state) navigate("/");

    const user = JSON.parse(localStorage.getItem("user"));
    if (user) setIsValidated(true);
  }, [navigate, location, setIsValidated]);

  return (
    <div className="Checkout">
      {!isValidated && <UserValidation setIsValidated={setIsValidated} />}
      {isValidated && (
        <Detail order={location.state.order} total={location.state.total} />
      )}
    </div>
  );
};

export default Checkout;
