import "./UserForm.css";
import McInput from "../input/McInput.js";

const UserForm = () => {
  return (
    <div className="UserForm">
      <h1>
        <strong>Datos</strong>
      </h1>
      <McInput
        id={"input-name"}
        type={"text"}
        label={"Nombre y apellido"}
        width={"100%"}
      />
      <McInput
        id={"input-email"}
        type={"email"}
        label={"Correo"}
        width={"100%"}
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
          placeholder={"000-0000-0000"}
          label={"Teléfono"}
          width={"70%"}
        />
      </div>
    </div>
  );
};

export default UserForm;
