import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';

interface ChangeViewProps {
  coords: { lat: number; lng: number }; // Specify the expected object structure
}

export function ChangeView({ coords }: ChangeViewProps) {
  const map = useMap();
  map.setView(coords, 17);
  return null;
}

export default function Map() {
  const [geoData, setGeoData] = useState({ lat: 64.536634, lng: 16.779852 });

  // const center = [geoData.lat, geoData.lng];
  const center = { lat: geoData.lat, lng: geoData.lng };


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        setGeoData({ lat: position.coords.latitude, lng: position.coords.longitude })
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  }, []);


  return (
    // <MapContainer center={ center } zoom={ 1 } style={{ height: '100vh' }}>
    <MapContainer center={center} zoom={1} style={{ height: '100vh' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoData.lat && geoData.lng && (
        <Marker position={[geoData.lat, geoData.lng]} />
      )}
      <ChangeView coords={center} />
    </MapContainer>
  );
}
