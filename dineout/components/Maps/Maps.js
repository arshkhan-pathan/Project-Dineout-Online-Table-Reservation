import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

function Maps({ coordinates }) {
  function convertStringToArray(inputString) {
    const stringValues = inputString.split(",");
    return stringValues;
  }
  const latlng = convertStringToArray(coordinates);
  console.log(latlng);
  const icon = L.icon({
    iconUrl:
      "https://res.cloudinary.com/dhe9hmzbn/image/upload/v1688643781/marker-icon_avub9w.png",
  });

  return (
    <MapContainer
      center={latlng}
      zoom={13}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "40rem" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={latlng} icon={icon}></Marker>
      <></>
    </MapContainer>
  );
}

export default Maps;
