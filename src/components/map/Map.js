import "./Map.css";
import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { Icon } from "leaflet";

const Map = (props) => {
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
      <Marker
        position={position}
        icon={
          new Icon({
            iconUrl: markerIcon,
            shadowUrl: markerShadow,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      >
        <Popup className="popup">Estás Acá</Popup>
      </Marker>
    );
  };

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
            icon={
              new Icon({
                iconUrl: markerIcon,
                shadowUrl: markerShadow,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
          >
            <Popup className="popup">{value.location}</Popup>
          </Marker>
        );
      })}
      {props.locateCurrent && <LocationMarker />}
    </MapContainer>
  );
};

export default Map;
