import "../theme/Catalogue.css";
import { NavLink } from "react-router-dom";

const Catalogue = (props) => {
  return (
    <div className="Catalogue">
      <NavLink to={"/catalogue/burgers"}>Burgers</NavLink>
    </div>
  );
};

export default Catalogue;
