import "./McInput.css";

const McInput = (props) => {
  return (
    <div className="McInput" style={{ width: props.width }}>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} type={props.type} />
    </div>
  );
};

export default McInput;
