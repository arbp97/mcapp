import "./McInput.css";

/**
 *
 * @param {*} id
 * @param {*} label
 * @param {*} type
 * @param {*} placeholder optional
 * @param {*} value optional
 * @param {*} disabled optional
 */
const McInput = (props) => {
  return (
    <div className="McInput" style={{ width: props.width }}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        disabled={props.disabled ? true : false}
        placeholder={props.placeholder ? props.placeholder : ""}
        defaultValue={props.value ? props.value : ""}
      />
    </div>
  );
};

export default McInput;
