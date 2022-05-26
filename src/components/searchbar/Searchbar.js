import "./Searchbar.css";
import { Input } from "reactstrap";

const Searchbar = (props) => {
  return (
    <div className="Searchbar">
      <i className={"glyphicon " + props.icontype}></i>
      <Input
        type="text"
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Searchbar;
