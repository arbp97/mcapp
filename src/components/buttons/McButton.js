import "./McButton.css";

const McButton = (props) => {
  return (
    <button
      className={props.fixed ? "McButton fixed" : "McButton"}
      onClick={props.onClick}
    >
      {props.content}
    </button>
  );
};

export default McButton;
