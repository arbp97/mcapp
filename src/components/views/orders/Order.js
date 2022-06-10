import "./Order.css";
import Map from "../../map/Map.js";
import Searchbar from "../../input/Searchbar.js";
import McButton from "../../buttons/McButton.js";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const RestaurantList = (props) => {
  return (
    <div className="RestaurantList">
      <div className="marker-list">
        <p className="title">Sucursales</p>
        {Object.entries(props.markers)
          .filter(([key, value]) =>
            value.title.toLowerCase().includes(props.query.toLowerCase())
          )
          .map(([key, value]) => {
            return (
              <NavLink
                key={key}
                className={"marker"}
                to={"/orders/add"}
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

const Delivery = () => {
  return (
    <div className="Delivery">
      <McButton
        content={"Localizarme en el mapa"}
        onClick={() => alert("Work in progress")}
        fixed
      />
    </div>
  );
};

const Order = (props) => {
  const modes = ["pickup", "delivery"];
  const [activeMode, setActiveMode] = useState(props.active);
  const [mapMarkers, setMapMarkers] = useState(props.markers);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const order = JSON.parse(localStorage.getItem("order"));

    if (order && order.status === "confirmed") {
      alert("Ya existe un pedido en curso");
      navigate("/");
    }
  }, [navigate]);

  const changeMode = (mode) => {
    setActiveMode(mode);
    mode === "delivery" ? setMapMarkers([]) : setMapMarkers(props.markers);
  };

  return (
    <div className="Order">
      <p className="title">Pedidos</p>
      <div className="mode-button-container">
        <button
          type="button"
          className={
            activeMode === modes[0] ? "mode-button selected" : "mode-button"
          }
          onClick={() => changeMode(modes[0])}
        >
          Pickup
        </button>
        <button
          type="button"
          className={
            activeMode === modes[1] ? "mode-button selected" : "mode-button"
          }
          onClick={() => changeMode(modes[1])}
        >
          McDelivery
        </button>
      </div>
      <Map markers={mapMarkers} />
      <Searchbar
        placeholder={"Buscar por direccion..."}
        icontype={"glyphicon-search"}
        name={"search"}
        id={"search"}
        query={query}
        setQuery={setQuery}
      />
      {activeMode === modes[0] && (
        <RestaurantList query={query} markers={mapMarkers} />
      )}
      {activeMode === modes[1] && <Delivery />}
    </div>
  );
};

export default Order;
