import "./Order.css";
import Map from "../../map/Map.js";
import Searchbar from "../../input/Searchbar.js";
import McButton from "../../buttons/McButton.js";
import InfoModal from "../../modal/InfoModal.js";
import { useEffect, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";

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

const Delivery = (props) => {
  // Delivery Info
  const [showModal, setShowModal] = useState(true);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="Delivery">
      <McButton content={"Aceptar"} onClick={() => alert(props.location)} />
      <InfoModal
        toggle={toggleModal}
        isOpen={showModal}
        title="Localización"
        message="Presiona en el botón de búsqueda arriba a la derecha del mapa para buscar tu dirección."
      />
    </div>
  );
};

const Order = (props) => {
  const modes = ["pickup", "delivery"];
  const [activeMode, setActiveMode] = useState(props.active);
  const [mapMarkers, setMapMarkers] = useState(props.markers);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState(null);

  //show warning modal when an order is in place
  useEffect(() => {
    if (props.isOrderConfirmed) props.toggleOrderModal();
  }, [props]);

  // restrict access when an order is in place
  if (props.isOrderConfirmed) {
    return <Navigate to={"/"} replace />;
  }

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
      <Map
        markers={mapMarkers}
        locateCurrent={activeMode === modes[1]}
        setLocation={setLocation}
      />
      {activeMode === modes[0] && (
        <>
          <Searchbar
            placeholder={"Buscar por direccion..."}
            icontype={"glyphicon-search"}
            name={"search"}
            id={"search"}
            query={query}
            setQuery={setQuery}
          />
          <RestaurantList query={query} markers={mapMarkers} />
        </>
      )}
      {activeMode === modes[1] && <Delivery location={location} />}
    </div>
  );
};

export default Order;
