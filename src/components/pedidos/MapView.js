import React from "react";
import {MapContainer, TileLayer, Marker } from 'react-leaflet';
// import Markers from "./Markers.js";
import 'leaflet/dist/leaflet.css'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

const MapView = () => {
    return (
    <MapContainer center={{lat: '-34.7355251653576', lng: '-58.391348921321224'}} zoom={9} 
        style={{width: "445px", height: "400px", backgroundColor:"grey", marginBottom:'15px', alignItems:"center", justifyContent: "center", display: "flex"}}>
        <TileLayer 
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contribution'
        />
        <Marker position={{lat: '-34.706257157184325', lng: '-58.391984558790625'}} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} />
        <Marker position={{lat: '-34.705987308354636', lng: '-58.39221154793112'}} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} />
        <Marker position={{lat: '-34.708073913106524', lng: '-58.38949553517521'}} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} />
        <Marker position={{lat: '-34.71063139932972', lng: '-58.38616948850077'}} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} />
        <Marker position={{lat: '-34.74268730642369', lng: '-58.39928551358787'}} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} />
        <Marker position={{lat: '-34.7509384623247', lng: '-58.40065839448942'}} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} />
        <Marker position={{lat: '-34.76010581447104', lng: '-58.39911336321022'}} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} />
        <Marker position={{lat: '-34.78095534042407', lng: '-58.40584473442899'}} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} />
        <Marker position={{lat: '-34.80738493902929', lng: '-58.401607483546044'}} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} />
        <Marker position={{lat: '-34.6722951313174', lng: '-58.458020038808264'}} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} />
        <Marker position={{lat: '-34.64861600685424', lng: '-58.41740501466388'}} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} />
        <Marker position={{lat: '-34.707857004259175', lng: '-58.38942223926658'}} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} />
        {/* <Marker position={{lat: '[-34.71032632455545', lng: '-58.38620363454534'}} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} /> */}

    </MapContainer>
    );
};

export default MapView

