import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import * as L from "leaflet";
import Geocoder, { geocoders } from "leaflet-control-geocoder";
import MarkerIcon from "./MarkerIcon";

// init the empty layerGroup used to control search markers
const layerGroup = L.layerGroup();

type LeafletControlGeocoderProps = {
  setLocation: (location: string) => void;
};

// Geocode Wrapper function for the Leaflet Map
const LeafletControlGeocoder = ({
  setLocation,
}: LeafletControlGeocoderProps) => {
  const map = useMap();
  const geocoder = geocoders.nominatim({
    geocodingQueryParams: {
      limit: 3,
      countrycodes: "ar",
    },
  });

  // this listeners are inside a useEffect hook
  // because we need to remove those when the user
  // changes back to pickup view.
  useEffect(() => {
    map.on("click", (e) => {
      // clear the layerGroup from previous stored circle and marker
      layerGroup.clearLayers();

      geocoder.reverse(
        e.latlng,
        map.options.crs!.scale(map.getZoom()),
        (results) => {
          let result = results[0];
          if (result) {
            const marker = L.marker(result.center, {
              icon: MarkerIcon,
            })
              .addTo(layerGroup)
              .bindPopup(result.name);

            // here add the layerGroup to the map
            map.addLayer(layerGroup);
            marker.openPopup();
            map.flyTo(result.center, map.getZoom());
            setLocation(result.name);
          }
        }
      );
    });

    const control = new Geocoder({
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
      map.removeEventListener("click");
      layerGroup.clearLayers();
      setLocation("");
    };
    // eslint-disable-next-line
  }, [map, layerGroup]);

  return null;
};

export default LeafletControlGeocoder;
