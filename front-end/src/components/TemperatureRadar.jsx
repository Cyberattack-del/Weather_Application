// TemperatureRadar.js 
import React from 'react'; 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; 
import 'leaflet/dist/leaflet.css'; 
import '../styles/TemperatureRadar.css'; 
import moment from 'moment';

const heatPoints = [ { city: 'Coimbatore', lat: 11.0168, lng: 76.9558, temp: 36 }, { city: 'Salem', lat: 11.6643, lng: 78.1460, temp: 39 }, { city: 'Mysuru', lat: 12.2958, lng: 76.6394, temp: 33 }, { city: 'Madurai', lat: 9.9252, lng: 78.1198, temp: 39 }, { city: 'Kochi', lat: 9.9312, lng: 76.2673, temp: 33 }, { city: 'Kozhikode', lat: 11.2588, lng: 75.7804, temp: 31 } ];

const TemperatureRadar = () => { const timestamp = moment().format('MMMM DD, YYYY h:mm A');

return ( <div className="radar-container"> <div className="radar-header"> <h2>TemperatureRadar</h2> <h3>Coimbatore</h3> <p>{timestamp}</p> </div>

<MapContainer center={[11.0168, 76.9558]} zoom={7} scrollWheelZoom={false} className="radar-map">
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {heatPoints.map((point, i) => (
      <Marker key={i} position={[point.lat, point.lng]}>
        <Popup>{point.city}: {point.temp}&deg;C</Popup>
      </Marker>
    ))}
  </MapContainer>

  <div className="radar-footer">
    <p><strong>weather</strong>&<strong>radar</strong></p>
    <p>Available for Android, iOS, Web</p>
    <p>as of: {moment().format('MM/DD/YYYY')}</p>
  </div>
</div>

); };

export default TemperatureRadar;