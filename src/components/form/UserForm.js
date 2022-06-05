import "./UserForm.css";
import McInput from "../input/McInput.js";

const UserForm = () => {
  return (
    <div className="UserForm">
      <McInput
        id={"test-input"}
        type={"text"}
        label={"Test input"}
        width={"50%"}
      />
      <McInput
        id={"test-input-2"}
        type={"text"}
        label={"Test input 2"}
        width={"100%"}
      />
    </div>
  );
};

export default UserForm;
