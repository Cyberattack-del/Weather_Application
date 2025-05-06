// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// const WeatherMap = ({ weather }) => {
//   const position = weather?.coord
//     ? [weather.coord.lat, weather.coord.lon]
//     : [13.0827, 80.2707]; // Default to Chennai

//   // Use OpenWeatherMap dynamic icon
//   const customWeatherIcon = weather && new L.Icon({
//     iconUrl: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
//     iconSize: [50, 50],
//     iconAnchor: [25, 50],
//     popupAnchor: [0, -50],
//   });

//   return (
//     <div className="my-6 rounded-md overflow-hidden shadow-lg">
//       <MapContainer
//         center={position}
//         zoom={7}
//         className="h-[500px] w-full"
//         scrollWheelZoom={true}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
//         />
//         {weather && (
//           <Marker position={position} icon={customWeatherIcon}>
//             <Popup>
//               <strong>{weather.name}</strong>
//               <br />
//               {weather.weather[0].description}
//               <br />
//               Temp: {weather.main.temp} °C
//             </Popup>
//           </Marker>
//         )}
//       </MapContainer>
//     </div>
//   );
// };

// export default WeatherMap;
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


delete L.Icon.Default.prototype._getIconUrl;

const WeatherMap = ({ weather }) => {
  const position = weather?.coord
    ? [weather.coord.lat, weather.coord.lon]
    : [13.0827, 80.2707]; // Default to Chennai

  const customWeatherIcon =
    weather &&
    new L.Icon({
      iconUrl: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
      iconSize: [70, 70],
      iconAnchor: [25, 50],
      popupAnchor: [0, -50],
    });

  return (
    <div className="my-6 rounded-md overflow-hidden shadow-lg">
      <MapContainer
        center={position}
        zoom={7}
        className="h-[500px] w-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        {weather && (
          <Marker position={position} icon={customWeatherIcon}>
            <Popup>
              <strong>{weather.name}</strong>
              <br />
              {weather.weather[0].description}
              <br />
              Temp: {weather.main.temp} °C
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default WeatherMap;