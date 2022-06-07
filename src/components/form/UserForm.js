import "./UserForm.css";
import McInput from "../input/McInput.js";

const UserForm = (props) => {
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
        value={props.data.name}
        onChange={(e) => {
          // eslint-disable-next-line
          props.setData({ ...props.data, ["name"]: e.target.value });
        }}
      />
      <McInput
        id={"input-email"}
        type={"email"}
        label={"Correo"}
        width={"100%"}
        value={props.data.email}
        onChange={(e) => {
          // eslint-disable-next-line
          props.setData({ ...props.data, ["email"]: e.target.value });
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
          value={props.data.dni}
          onChange={(e) => {
            // eslint-disable-next-line
            props.setData({ ...props.data, ["dni"]: e.target.value });
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
          value={props.data.phone}
          onChange={(e) => {
            // eslint-disable-next-line
            props.setData({ ...props.data, ["phone"]: e.target.value });
          }}
        />
      </div>
    </div>
  );
};

export default UserForm;
