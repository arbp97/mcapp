import "./Order.css";
import { IMG_PATH, URLS } from "../../../config";
import MARKERS from "../../../data/markers";
import Map from "../../map/Map";
import Searchbar from "../../input/Searchbar";
import McButton from "../../buttons/McButton";
import InfoModal from "../../modal/InfoModal";
import { useEffect, useMemo, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useOrderContext } from "../../../context/OrderContext";

type PickupProps = {
  query: string;
  handleStoreSelect: (
    title: string,
    location: string,
    img: string,
    isDelivery: boolean
  ) => void;
};

const Pickup = ({ query, handleStoreSelect }: PickupProps) => {
  const filteredMarkers = useMemo(() => {
    return MARKERS.filter((value) =>
      value.location.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="Pickup">
      <div className="marker-list">
        <p className="title">Sucursales</p>
        {filteredMarkers.map((value, index) => {
          return (
            <NavLink
              key={index}
              className={"marker"}
              to={URLS.ORDERS_ADD}
              onClick={() =>
                handleStoreSelect(value.title, value.location, value.img, false)
              }
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

type DeliveryProps = {
  location?: string;
  handleStoreSelect: (
    title: string,
    location: string,
    img: string,
    isDelivery: boolean
  ) => void;
};

const Delivery = ({ location, handleStoreSelect }: DeliveryProps) => {
  // Delivery Info
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();
  const shortLocation = location?.split(",").slice(0, 3).join(", ");

  const toggleModal = () => setShowModal(!showModal);

  const handleSubmit = () => {
    if (!location || location === "") {
      alert("Seleccione una dirección");
      return;
    }

    handleStoreSelect(shortLocation!, location, "delivery.png", true);

    navigate(URLS.ORDERS_ADD);
  };

  return (
    <div className="Delivery">
      <McButton text={"Aceptar"} onClick={() => handleSubmit()} />
      <InfoModal
        toggle={toggleModal}
        isOpen={showModal}
        title="Localización"
        message="Presiona en el botón de búsqueda arriba a la derecha del mapa para buscar tu dirección.
         Alternativamente, puedes hacer click directamente en el mapa."
      />
    </div>
  );
};

type OrderProps = {
  toggleOrderModal: () => void;
};

const Order = ({ toggleOrderModal }: OrderProps) => {
  const [activeMode, setActiveMode] = useState(true);
  const [mapMarkers, setMapMarkers] = useState(MARKERS);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const { order, updateOrder } = useOrderContext();

  // set searchbar query from the selected marker
  useEffect(() => {
    if (activeMode) setQuery(location);
  }, [location, activeMode]);

  // restrict access when an order is in place
  if (order.confirmed) {
    toggleOrderModal();
    return <Navigate to={URLS.ROOT} replace />;
  }

  const changeMode = (mode: boolean) => {
    setActiveMode(mode);
    !mode ? setMapMarkers([]) : setMapMarkers(MARKERS);
  };

  const handleStoreSelect = (
    title: string,
    location: string,
    img: string,
    isDelivery: boolean
  ) => {
    updateOrder({
      ...order,
      // eslint-disable-next-line
      ["details"]: {
        name: title,
        address: location,
        img: img,
        isDelivery: isDelivery,
      },
    });
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
          <Pickup query={query} handleStoreSelect={handleStoreSelect} />
        </>
      )}
      {!activeMode && (
        <Delivery location={location} handleStoreSelect={handleStoreSelect} />
      )}
    </div>
  );
};

export default Order;
