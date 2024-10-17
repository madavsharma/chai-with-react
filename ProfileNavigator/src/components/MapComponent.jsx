import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import marker icon images
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Custom hook to center the map on the marker
function CenterMap({ location }) {
  const map = useMap();

  useEffect(() => {
    if (location) {
      map.setView([location.lat, location.lng], 12, { animate: true });
    }
  }, [location, map]);

  return null;
}

const containerStyle = {
  width: '100%',
  height: '400px',
};

function MapComponent({ address }) {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (address && address.latitude && address.longitude) {
      setLocation({ lat: address.latitude, lng: address.longitude });
    }
  }, [address]);

  if (!location) {
    return <p>Invalid address data. Unable to display map.</p>;
  }

  return (
    <MapContainer center={location} zoom={12} scrollWheelZoom={true} style={containerStyle}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={location} eventHandlers={{
        click: () => {
          const map = useMap();
          map.setView(location, 14, { animate: true });  // Zoom in on marker click
        },
      }}>
        <Popup>
          <b>{address.street}, {address.city}</b><br />
          Latitude: {address.latitude}, Longitude: {address.longitude}
        </Popup>
      </Marker>

      <CenterMap location={location} />
    </MapContainer>
  );
}

export default MapComponent;
