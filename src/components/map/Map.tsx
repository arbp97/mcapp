import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LeafletControlGeocoder from "./LeafletControlGeocoder";
import MarkerIcon from "./MarkerIcon";
import { MarkerType } from "../../@types/marker";

type MapProps = {
  markers: MarkerType[];
  setLocation: (location: string) => void;
  locateCurrent: boolean;
};

const Map = ({ markers, setLocation, locateCurrent }: MapProps) => {
  return (
    <MapContainer
      center={{ lat: -34.7355251653576, lng: -58.391348921321224 }}
      zoom={9}
      className="Map"
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {Object.entries(markers).map(([key, value]) => {
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
                setLocation(value.location);
              },
            }}
          >
            <Popup>{value.location}</Popup>
          </Marker>
        );
      })}
      {locateCurrent && (
        <>
          <LeafletControlGeocoder setLocation={setLocation} />
        </>
      )}
    </MapContainer>
  );
};

export default Map;
