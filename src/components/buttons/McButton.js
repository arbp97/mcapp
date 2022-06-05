import "./McButton.css";

const McButton = (props) => {
  return (
    <button className="McButton" onClick={props.onClick}>
      {props.content}
    </button>
  );
};

export default McButton;
