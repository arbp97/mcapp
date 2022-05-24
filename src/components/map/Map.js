import "./Map.css";
import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

const Map = (props) => {
  return (
    <MapContainer
      center={{ lat: "-34.7355251653576", lng: "-58.391348921321224" }}
      zoom={9}
      className="Map"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contribution'
      />
      {Object.entries(props.markers).map(([key, value]) => {
        return (
          <Marker
            key={key}
            title={value.location}
            position={{
              lat: value.lat,
              lng: value.lng,
            }}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
          />
        );
      })}
      {/* <Marker position={{lat: '[-34.71032632455545', lng: '-58.38620363454534'}} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} /> */}
    </MapContainer>
  );
};

export default Map;
