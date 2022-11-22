import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';
import { useEffect } from 'react';
import "leaflet-geosearch/dist/geosearch.css";

const SearchControl = () => {
  const provider = new OpenStreetMapProvider();

  // @ts-ignore
  const searchControl = new GeoSearchControl({
    provider: provider,
    style: 'bar',
    showMarker: false,
    autoClose: true,
    autoComplete: true,
    autoCompleteDelay: 250
  });

  const map = useMap();
  useEffect(() => {
    map.addControl(searchControl);
  }, []);

  return null;
};

export default SearchControl