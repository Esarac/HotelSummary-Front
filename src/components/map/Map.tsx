import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import SearchControl from "./searchControl";
import L from 'leaflet';
import React, { useEffect, useState } from "react";
import { Hotel } from "../../models/models";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

interface Props {
  hotels: Hotel[]
}

function Map(props: Props) {

  return (
    <div>
      <MapContainer center={[50, 9]} zoom={6} scrollWheelZoom={true} style={{ height: "83vh", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <SearchControl />
        {props.hotels.map((hotel) => {
          return (
            <Marker position={[hotel['LATITUDE'] || 0, hotel['LONGITUDE'] || 0]}>
              <Popup>
                <div>
                  <h5>{'Hotel: ' + hotel['HOTEL_NAME']}</h5>
                  <h5>{'Rating: ' + hotel['OVERALL_RATING']}</h5>
                  <button>More Info</button>
                </div>
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </div>
  );
}

export default Map;
