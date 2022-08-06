import "./Order.css";
import { IMG_PATH, URLS } from "../../../config.js";
import Map from "../../map/Map";
import Searchbar from "../../input/Searchbar";
import McButton from "../../buttons/McButton";
import InfoModal from "../../modal/InfoModal";
import { useEffect, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useOrder } from "../../../context/OrderContext";
import MARKERS from "../../../data/markers.js";

const RestaurantList = (props) => {
  return (
    <div className="RestaurantList">
      <div className="marker-list">
        <p className="title">Sucursales</p>
        {Object.entries(MARKERS)
          .filter(([key, value]) =>
            value.location.toLowerCase().includes(props.query.toLowerCase())
          )
          .map(([key, value]) => {
            return (
              <NavLink
                key={key}
                className={"marker"}
                to={URLS.ORDERS_ADD}
                state={{
                  name: value.title,
                  address: value.location,
                  img: value.img,
                  isDelivery: false,
                }}
              >
                <img src={IMG_PATH + value.img} alt="" />
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
  const navigate = useNavigate();
  const shortLocation = props.location.split(",").slice(0, 3).join(", ");

  const toggleModal = () => setShowModal(!showModal);

  const handleSubmit = () => {
    if (!props.location || props.location === "") {
      alert("Seleccione una dirección");
    } else {
      navigate(URLS.ORDERS_ADD, {
        state: {
          name: shortLocation,
          address: props.location,
          img: "delivery.png",
          isDelivery: true,
        },
      });
    }
  };

  return (
    <div className="Delivery">
      <McButton content={"Aceptar"} onClick={() => handleSubmit()} />
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
  const [activeMode, setActiveMode] = useState(true);
  const [mapMarkers, setMapMarkers] = useState(MARKERS);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const order = useOrder();

  // set searchbar query from the selected marker
  useEffect(() => {
    if (activeMode) {
      setQuery(location);
    }
  }, [location, activeMode]);

  // restrict access when an order is in place
  if (order.confirmed) {
    props.toggleOrderModal();
    return <Navigate to={URLS.ROOT} replace />;
  }

  const changeMode = (mode) => {
    setActiveMode(mode);
    !mode ? setMapMarkers([]) : setMapMarkers(MARKERS);
  };

  return (
    <div className="Order">
      <p className="title">Pedidos</p>
      <div className="mode-button-container">
        <button
          type="button"
          className={activeMode ? "mode-button selected" : "mode-button"}
          onClick={() => changeMode(true)}
        >
          Pickup
        </button>
        <button
          type="button"
          className={!activeMode ? "mode-button selected" : "mode-button"}
          onClick={() => changeMode(false)}
        >
          McDelivery
        </button>
      </div>
      <Map
        markers={mapMarkers}
        locateCurrent={!activeMode}
        setLocation={setLocation}
      />
      {activeMode && (
        <>
          <Searchbar
            placeholder={"Buscar por direccion..."}
            icontype={"glyphicon-search"}
            name={"search"}
            id={"search"}
            query={query}
            setQuery={setQuery}
          />
          <RestaurantList query={query} />
        </>
      )}
      {!activeMode && <Delivery location={location} />}
    </div>
  );
};

export default Order;
