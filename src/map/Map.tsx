import { MapContainer, TileLayer, Marker, Popup,CircleMarker, useMap  } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "../assets/icon.png";
import L from 'leaflet';
import styled from "styled-components";
import {  useEffect, useRef, useState } from "react";

interface MapInput { 
  coords: any;
  display_name: string;
};

interface MapCoords {
  latitude: number;
  longitude :number;
};

interface CurrentLocation {
  latitude:number
  longitude:number,
  display_name:string
}

interface props {
  currentLocation: CurrentLocation,
  location: MapInput
}

export default function Map( { currentLocation , location }: props) {

  const currentCity:CurrentLocation = currentLocation;
  const mapcoords : MapCoords = location.coords ;
  const [ timeZone, setTimeZone ] = useState<string>();
  const markerRef = useRef<L.Marker>(null);
  
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


  function getTime(){
      const currntDateTime = new Date();
      return currntDateTime.toLocaleString('en-US', { timeZone: timeZone });    
  }

  const requestOptions = {
    method: 'GET',
  };
  
  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.bindPopup( `${ location.display_name } \n  ${ getTime() }` ).openPopup();
    
    }
  }, [ markerRef.current ]);


  fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${ mapcoords.latitude }&lon=${ mapcoords.longitude }
  &apiKey=b0f154e5c5e740f59de754920300a457`, requestOptions)
    .then(response => response.json())
    .then(result => setTimeZone(result.features[0].properties.timezone.name ))
    .catch(error => console.log('error', error));

    
  return (
    <StyledMapContainer
      className="map"
      center={[ mapcoords.latitude, mapcoords.longitude]}
      zoom={2.4}
      scrollWheelZoom={false}    //map can't be zoomed with mouse        
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

       <CircleMarker radius={10} center={[ currentCity.latitude , currentCity.longitude ]}  pathOptions={ { color: 'red'} }>
        <Popup>{ `${ currentCity.display_name } \n  ${ getTime() }` }</Popup>
      </CircleMarker>

       { !( mapcoords.latitude == 0 &&   mapcoords.longitude == 0 )? (
      <Marker ref={markerRef} icon={customIcon} position={[ mapcoords.latitude, mapcoords.longitude]}>        
      </Marker>
      ): ''
        }
      <MapView />
    </StyledMapContainer>
  );
}


const StyledMapContainer = styled(MapContainer)`  
    padding:0px 50px;
`;