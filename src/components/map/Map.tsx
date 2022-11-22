import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import SearchControl from "./searchControl";
import L from 'leaflet';
import React, { useEffect, useState } from "react";
import { Hotel } from "../../models/models";
import Button from '@mui/material/Button';

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

interface Icon {
  icon: L.Icon
}

const icons: { [name: string]: Icon } = {
  // 1 star -> Red
  1: {
    icon: new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    })
  },
  // 2 stars -> Violet
  2: {
    icon: new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    })
  },
  // 3 stars -> Blue
  3: {
    icon: new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    })
  },
  // 4 stars -> Green
  4: {
    icon: new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    })
  },
  // 5 stars -> Gold
  5: {
    icon: new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    })
  }
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
            <Marker position={[hotel['LATITUDE'] || 0, hotel['LONGITUDE'] || 0]} icon={icons[hotel['OVERALL_RATING']].icon}>
              <Popup>
                <div>
                  <p><strong>Hotel: </strong> {hotel['HOTEL_NAME']}</p>
                  <p><strong>Rating: </strong>{hotel['OVERALL_RATING']}</p>
                  <Button variant="contained">More Info</Button>
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
