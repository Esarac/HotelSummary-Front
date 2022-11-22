import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import SearchControl from "./searchControl";
import L from 'leaflet';
import React, { useEffect, useState } from "react";
import { Hotel } from "../../models/models";

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
  const [hotels, setHotels] = useState<Hotel[]>(props.hotels)

  useEffect(() => {
    setHotels(props.hotels)
  }, [])

  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={14} scrollWheelZoom={true} style={{ height: "83vh", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <SearchControl />
        {hotels.map((hotel) => {
          return (
            <Marker position={[hotel.lat, hotel.long]}>
              <Popup>
                <div>
                  <h5>{'Hotel: ' + hotel.name}</h5>
                  <h5>{'Rating: ' + hotel.OverallRating}</h5>
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
