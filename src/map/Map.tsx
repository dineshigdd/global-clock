import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";
import icon from "../assets/icon.png";
import L from 'leaflet';

interface MapInput {
  coords: any;
  display_name: string;
};

interface MapCoords {
  latitude: number;
  longitude :number;
};


export default function Map( props: MapInput ) {

 
  const mapcoords : MapCoords = props.coords ;

  const customIcon = new L.Icon({//creating a custom icon to use in Marker
    iconUrl: icon,
    iconSize: [25, 35],
    iconAnchor: [5, 30]
  });

  function MapView() {
    let map = useMap();
    map.setView([ mapcoords.latitude, mapcoords.longitude], map.getZoom());
     //Sets geographical center and zoom for the view of the map
    return null;
  }

  return (
    <MapContainer
      className="map"
      center={[ mapcoords.latitude, mapcoords.longitude]}
      zoom={10}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={customIcon} position={[ mapcoords.latitude, mapcoords.longitude]}>
        <Popup>{ props.display_name }</Popup>
      </Marker>
      <MapView />
    </MapContainer>
  );
}