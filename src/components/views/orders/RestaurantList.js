import "./RestaurantList.css";
import Map from "../../map/Map.js";
import Searchbar from "../../searchbar/Searchbar.js";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const RestaurantList = (props) => {
  const [query, setQuery] = useState("");

  return (
    <div className="RestaurantList">
      <Searchbar
        placeholder={"Buscar por direccion..."}
        icontype={"glyphicon-search"}
        name={"orderSearch"}
        id={"orderSearch"}
        query={query}
        setQuery={setQuery}
      />
      <Map markers={props.markers} />
      <div className="marker-list">
        <p className="title">Sucursales</p>
        {Object.entries(props.markers)
          .filter(([key, value]) => value.title.toLowerCase().includes(query))
          .map(([key, value]) => {
            return (
              <NavLink
                key={key}
                className={"marker"}
                to={"/orders/pickup/add"}
                state={{
                  name: value.title,
                  address: value.location,
                  img: value.img,
                }}
              >
                <img src={"/img/" + value.img} alt="" />
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
