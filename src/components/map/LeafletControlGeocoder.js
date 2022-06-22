import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import MarkerIcon from "./MarkerIcon.js";

// init the empty layerGroup used to control search markers
const layerGroup = L.layerGroup();

// Geocode Wrapper function for the Leaflet Map
const LeafletControlGeocoder = (props) => {
  const map = useMap();
  const setLocation = props.setLocation;

  useEffect(() => {
    let geocoder = L.Control.Geocoder.nominatim({
      geocodingQueryParams: {
        limit: 3,
        countrycodes: "ar",
      },
    });
    if (typeof URLSearchParams !== "undefined" && window.location.search) {
      // parse /?geocoder=nominatim from URL
      let params = new URLSearchParams(window.location.search);
      let geocoderString = params.get("geocoder");
      if (geocoderString && L.Control.Geocoder[geocoderString]) {
        geocoder = L.Control.Geocoder[geocoderString]();
      } else if (geocoderString) {
        console.warn("Unsupported geocoder", geocoderString);
      }
    }

    const control = L.Control.geocoder({
      query: "",
      placeholder: "Buscar dirección...",
      defaultMarkGeocode: false,
      geocoder,
    })
      .on("markgeocode", function (e) {
        // clear the layerGroup from previous stored circle and marker
        layerGroup.clearLayers();
        //send location name to parent
        setLocation(e.geocode.name);
        //append new marker to the map
        let latlng = e.geocode.center;
        const marker = L.marker(latlng, {
          icon: MarkerIcon,
        })
          .addTo(layerGroup)
          .bindPopup(e.geocode.name);
        map.fitBounds(e.geocode.bbox);

        // here add the layerGroup to the map
        map.addLayer(layerGroup);
        marker.openPopup();
      })
      .addTo(map);

    // cleanup function (removes the search element & control)
    return () => {
      map.removeControl(control);
      layerGroup.clearLayers();
      setLocation(null);
    };
  }, [map, setLocation]);

  return null;
};

export default LeafletControlGeocoder;
