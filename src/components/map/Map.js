import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LeafletControlGeocoder from "./LeafletControlGeocoder.js";
import MarkerIcon from "./MarkerIcon.js";

const Map = (props) => {
  /* NEEDS FIXING
  const LocationMarker = () => {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position} icon={MarkerIcon}>
        <Popup>Estás Acá</Popup>
      </Marker>
    );
  };*/

  return (
    <MapContainer
      center={{ lat: "-34.7355251653576", lng: "-58.391348921321224" }}
      zoom={9}
      className="Map"
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {Object.entries(props.markers).map(([key, value]) => {
        return (
          <Marker
            key={key}
            position={{
              lat: value.lat,
              lng: value.lng,
            }}
            icon={MarkerIcon}
            eventHandlers={{
              click: () => {
                props.setLocation(value.location);
              },
            }}
          >
            <Popup>{value.location}</Popup>
          </Marker>
        );
      })}
      {props.locateCurrent && (
        <>
          <LeafletControlGeocoder setLocation={props.setLocation} />
        </>
      )}
    </MapContainer>
  );
};

export default Map;
