import "./RestaurantList.css";
import Map from "../../map/Map.js";
import Searchbar from "../../searchbar/Searchbar.js";
import { NavLink } from "react-router-dom";

const RestaurantList = (props) => {
  return (
    <div className="RestaurantList">
      <Searchbar
        placeholder={"Buscar por direccion..."}
        icontype={"glyphicon-search"}
        name={"orderSearch"}
        id={"orderSearch"}
      />
      <Map markers={props.markers} />
      <div className="marker-list">
        <p className="title">Sucursales</p>
        {Object.entries(props.markers).map(([key, value]) => {
          return (
            <NavLink key={key} className={"marker"} to={"/orders/pickup/add"}>
              <img src={"../img/" + value.img} alt="" />
              <div className="marker-info">
                <h6 className="title">{value.title} </h6>
                <h6 className="location">{value.location}</h6>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantList;
