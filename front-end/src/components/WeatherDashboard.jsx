// // // // // import React, { useState, useEffect } from "react";
// // // // // import SearchBar from "./SearchBar";
// // // // // import WeatherInfo from "./WeatherInfo";
// // // // // import Forecast from "./Forecast";
// // // // // import WeatherMap from "./WeatherMap";
// // // // // import HamburgerMenu from "./HamburgerMenu";
// // // // // import Share from "./Share";
// // // // // import Livelocation from "./Livelocation";
// // // // // import AirQualityGraph from "./AirQualityGraph";
// // // // // import WeatherDisplay from "./WeatherInfo";


// // // // // const WeatherDashboard = () => {
// // // // //   const [city, setCity] = useState("");
// // // // //   const [weather, setWeather] = useState(null);
// // // // //   const [forecast, setForecast] = useState(null);
// // // // //   const [notification, setNotification] = useState("");
// // // // //   const [error, setError] = useState("");
// // // // //   const [searchHistory, setSearchHistory] = useState([]);

// // // // //   const API_KEY = "04d0508e5f755e1deb3c5f6cfaff4b55";

// // // // //   useEffect(() => {
// // // // //     const storedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
// // // // //     setSearchHistory(storedHistory);
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     if (searchHistory.length > 0) {
// // // // //       localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
// // // // //     }
// // // // //   }, [searchHistory]);

// // // // //   const handleSearch = async (cityName) => {
// // // // //     setCity(cityName);
// // // // //     setError("");
// // // // //     if (!searchHistory.includes(cityName)) {
// // // // //       const updatedHistory = [cityName, ...searchHistory.slice(0, 19)];
// // // // //       setSearchHistory(updatedHistory);
// // // // //     }
// // // // //   };

// // // // //   const handleDetectLocation = async (lat, lon) => {
// // // // //     try {
// // // // //       const weatherResponse = await fetch(
// // // // //         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
// // // // //       );
// // // // //       const weatherData = await weatherResponse.json();
// // // // //       if (weatherData.cod === 200) {
// // // // //         setWeather(weatherData);
// // // // //         setCity(weatherData.name);
// // // // //       } else {
// // // // //         setError("Weather data not found for your location.");
// // // // //       }

// // // // //       const forecastResponse = await fetch(
// // // // //         `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
// // // // //       );
// // // // //       const forecastData = await forecastResponse.json();
// // // // //       if (forecastData.cod === "200") {
// // // // //         const formattedForecast = forecastData.list
// // // // //           .filter((item, index) => index % 8 === 0)
// // // // //           .map((item) => ({
// // // // //             date: item.dt_txt.split(" ")[0],
// // // // //             temp: item.main.temp,
// // // // //           }));
// // // // //         setForecast(formattedForecast);
// // // // //       } else {
// // // // //         setError("No forecast data available.");
// // // // //       }
// // // // //     } catch (err) {
// // // // //       setError("Failed to fetch location-based weather.");
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     if (!city) return;

// // // // //     const fetchWeatherData = async () => {
// // // // //       try {
// // // // //         const weatherResponse = await fetch(
// // // // //           `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// // // // //         );
// // // // //         const weatherData = await weatherResponse.json();
// // // // //         if (weatherData.cod === 200) {
// // // // //           setWeather(weatherData);
// // // // //         } else {
// // // // //           setError("City not found.");
// // // // //         }

// // // // //         const forecastResponse = await fetch(
// // // // //           `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
// // // // //         );
// // // // //         const forecastData = await forecastResponse.json();
// // // // //         if (forecastData.cod === "200") {
// // // // //           const formattedForecast = forecastData.list
// // // // //             .filter((item, index) => index % 8 === 0)
// // // // //             .map((item) => ({
// // // // //               date: item.dt_txt.split(" ")[0],
// // // // //               temp: item.main.temp,
// // // // //             }));
// // // // //           setForecast(formattedForecast);
// // // // //         } else {
// // // // //           setError("No forecast data available.");
// // // // //         }
// // // // //       } catch (err) {
// // // // //         setError("Failed to fetch data.");
// // // // //       }
// // // // //     };

// // // // //     fetchWeatherData();
// // // // //   }, [city]);

// // // // //   return (
// // // // //     <div className="app-container">
// // // // //       <SearchBar onSearch={handleSearch} error={error} />
// // // // //       <Livelocation onDetectLocation={handleDetectLocation} />
// // // // //       {weather && <WeatherInfo weather={weather} onNotify={setNotification} />}
// // // // //       {weather && forecast && (
// // // // //   <Forecast forecast={forecast} currentTemp={weather.main.temp} />
// // // // // )}
// // // // // {/* <WeatherDisplay/> */}
// // // // //       {weather && <AirQualityGraph lat={weather.coord.lat} lon={weather.coord.lon} />}
// // // // //       {weather && <Share weather={weather} />}
// // // // //       {weather && <WeatherMap weather={weather} />}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default WeatherDashboard;

// // // // // import React, { useState, useEffect } from "react";
// // // // // import SearchBar from "./SearchBar";
// // // // // //import WeatherDisplay from "./WeatherDisplay";
// // // // // import WeatherMap from "./WeatherMap";
// // // // // import HamburgerMenu from "./HamburgerMenu";
// // // // // import Share from "./Share";
// // // // // import Livelocation from "./Livelocation";
// // // // // import AirQualityGraph from "./AirQualityGraph";
// // // // // import WeatherDisplay from "./WeatherInfo";

// // // // // const WeatherDashboard = () => {
// // // // //   const [city, setCity] = useState("");
// // // // //   const [weather, setWeather] = useState(null);
// // // // //   const [forecast, setForecast] = useState(null);
// // // // //   const [error, setError] = useState("");
// // // // //   const [searchHistory, setSearchHistory] = useState([]);
// // // // //    const [notification,setNotification] = useState("");

// // // // //   const API_KEY = "04d0508e5f755e1deb3c5f6cfaff4b55";

// // // // //   useEffect(() => {
// // // // //     const storedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
// // // // //     setSearchHistory(storedHistory);
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     if (searchHistory.length > 0) {
// // // // //       localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
// // // // //     }
// // // // //   }, [searchHistory]);

// // // // //   const handleSearch = async (cityName) => {
// // // // //     setCity(cityName);
// // // // //     setError("");
// // // // //     if (!searchHistory.includes(cityName)) {
// // // // //       const updatedHistory = [cityName, ...searchHistory.slice(0, 19)];
// // // // //       setSearchHistory(updatedHistory);
// // // // //     }
// // // // //   };

// // // // //   const handleDetectLocation = async (lat, lon) => {
// // // // //     try {
// // // // //       const weatherRes = await fetch(
// // // // //         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
// // // // //       );
// // // // //       const weatherData = await weatherRes.json();
// // // // //       if (weatherData.cod === 200) {
// // // // //         setWeather(weatherData);
// // // // //         setCity(weatherData.name);
// // // // //       } else {
// // // // //         setError("Weather data not found for your location.");
// // // // //       }

// // // // //       const forecastRes = await fetch(
// // // // //         `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
// // // // //       );
// // // // //       const forecastData = await forecastRes.json();
// // // // //       if (forecastData.cod === "200") {
// // // // //         const formattedForecast = forecastData.list
// // // // //           .filter((item, idx) => idx % 8 === 0)
// // // // //           .map((item) => ({
// // // // //             date: item.dt_txt.split(" ")[0],
// // // // //             temp: item.main.temp,
// // // // //           }));
// // // // //         setForecast(formattedForecast);
// // // // //       } else {
// // // // //         setError("No forecast data available.");
// // // // //       }
// // // // //     } catch (err) {
// // // // //       setError("Failed to fetch location-based weather.");
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     if (!city) return;

// // // // //     const fetchWeatherData = async () => {
// // // // //       try {
// // // // //         const weatherRes = await fetch(
// // // // //           `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// // // // //         );
// // // // //         const weatherData = await weatherRes.json();
// // // // //         if (weatherData.cod === 200) {
// // // // //           setWeather(weatherData);
// // // // //         } else {
// // // // //           setError("City not found.");
// // // // //         }

// // // // //         const forecastRes = await fetch(
// // // // //           `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
// // // // //         );
// // // // //         const forecastData = await forecastRes.json();
// // // // //         if (forecastData.cod === "200") {
// // // // //           const formattedForecast = forecastData.list
// // // // //             .filter((item, idx) => idx % 8 === 0)
// // // // //             .map((item) => ({
// // // // //               date: item.dt_txt.split(" ")[0],
// // // // //               temp: item.main.temp,
// // // // //             }));
// // // // //           setForecast(formattedForecast);
// // // // //         } else {
// // // // //           setError("No forecast data available.");
// // // // //         }
// // // // //       } catch (err) {
// // // // //         setError("Failed to fetch data.");
// // // // //       }
// // // // //     };

// // // // //     fetchWeatherData();
// // // // //   }, [city]);

// // // // //   return (
// // // // //     <div className="app-container">
// // // // //       <SearchBar onSearch={handleSearch} error={error} />
// // // // //       <Livelocation onDetectLocation={handleDetectLocation} />

// // // // //       {weather && forecast && (
// // // // //         <WeatherDisplay
// // // // //         weather={weather}
// // // // //         forecast={forecast}
// // // // //         onNotify={setNotification}
// // // // //         />
// // // // //       )}

// // // // //       {weather && <AirQualityGraph lat={weather.coord.lat} lon={weather.coord.lon} />}
// // // // //       {weather && <Share weather={weather} />}
// // // // //       {weather && <WeatherMap weather={weather} />}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default WeatherDashboard;

// // // // import React, { useState, useEffect } from "react";
// // // // import SearchBar from "./SearchBar";
// // // // import WeatherMap from "./WeatherMap";
// // // // import Share from "./Share";
// // // // import Livelocation from "./Livelocation";
// // // // import AirQualityGraph from "./AirQualityGraph";
// // // // import WeatherDisplay from "./WeatherInfo";

// // // // const WeatherDashboard = ({ setNotification, setWeather }) => {
// // // //   const [city, setCity] = useState("");
// // // //   const [weather, localSetWeather] = useState(null);
// // // //   const [forecast, setForecast] = useState(null);
// // // //   const [error, setError] = useState("");
// // // //   const [searchHistory, setSearchHistory] = useState([]);

// // // //   const API_KEY = "04d0508e5f755e1deb3c5f6cfaff4b55";

// // // //   useEffect(() => {
// // // //     const storedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
// // // //     setSearchHistory(storedHistory);
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     if (searchHistory.length > 0) {
// // // //       localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
// // // //     }
// // // //   }, [searchHistory]);

// // // //   const sendNotification = (weatherMain) => {
// // // //     switch (weatherMain) {
// // // //       case "Rain":
// // // //         setNotification("Rain Alert: Carry an umbrella!");
// // // //         break;
// // // //       case "Clear":
// // // //         setNotification("Clear skies: Enjoy your day!");
// // // //         break;
// // // //       case "Clouds":
// // // //         setNotification("Cloudy skies: No rain expected.");
// // // //         break;
// // // //       case "Snow":
// // // //         setNotification("Snowfall Alert: Stay warm and safe!");
// // // //         break;
// // // //       case "Thunderstorm":
// // // //         setNotification("Thunderstorm Warning: Stay indoors!");
// // // //         break;
// // // //       default:
// // // //         setNotification("Weather updated.");
// // // //     }
// // // //   };

// // // //   const handleSearch = async (cityName) => {
// // // //     setCity(cityName);
// // // //     setError("");
// // // //     if (!searchHistory.includes(cityName)) {
// // // //       const updatedHistory = [cityName, ...searchHistory.slice(0, 19)];
// // // //       setSearchHistory(updatedHistory);
// // // //     }
// // // //   };

// // // //   const handleDetectLocation = async (lat, lon) => {
// // // //     try {
// // // //       const weatherRes = await fetch(
// // // //         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
// // // //       );
// // // //       const weatherData = await weatherRes.json();
// // // //       if (weatherData.cod === 200) {
// // // //         localSetWeather(weatherData);
// // // //         setWeather(weatherData);
// // // //         setCity(weatherData.name);
// // // //         sendNotification(weatherData.weather[0].main);
// // // //       } else {
// // // //         setError("Weather data not found for your location.");
// // // //       }

// // // //       const forecastRes = await fetch(
// // // //         `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
// // // //       );
// // // //       const forecastData = await forecastRes.json();
// // // //       if (forecastData.cod === "200") {
// // // //         const formattedForecast = forecastData.list
// // // //           .filter((item, idx) => idx % 8 === 0)
// // // //           .map((item) => ({
// // // //             date: item.dt_txt.split(" ")[0],
// // // //             temp: item.main.temp,
// // // //           }));
// // // //         setForecast(formattedForecast);
// // // //       } else {
// // // //         setError("No forecast data available.");
// // // //       }
// // // //     } catch (err) {
// // // //       setError("Failed to fetch location-based weather.");
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     if (!city) return;

// // // //     const fetchWeatherData = async () => {
// // // //       try {
// // // //         const weatherRes = await fetch(
// // // //           `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// // // //         );
// // // //         const weatherData = await weatherRes.json();
// // // //         if (weatherData.cod === 200) {
// // // //           localSetWeather(weatherData);
// // // //           setWeather(weatherData);
// // // //           sendNotification(weatherData.weather[0].main);
// // // //         } else {
// // // //           setError("City not found.");
// // // //         }

// // // //         const forecastRes = await fetch(
// // // //           `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
// // // //         );
// // // //         const forecastData = await forecastRes.json();
// // // //         if (forecastData.cod === "200") {
// // // //           const formattedForecast = forecastData.list
// // // //             .filter((item, idx) => idx % 8 === 0)
// // // //             .map((item) => ({
// // // //               date: item.dt_txt.split(" ")[0],
// // // //               temp: item.main.temp,
// // // //             }));
// // // //           setForecast(formattedForecast);
// // // //         } else {
// // // //           setError("No forecast data available.");
// // // //         }
// // // //       } catch (err) {
// // // //         setError("Failed to fetch data.");
// // // //       }
// // // //     };

// // // //     fetchWeatherData();
// // // //   }, [city]);

// // // //   return (
// // // //     <div className="app-container">
// // // //       <SearchBar onSearch={handleSearch} error={error} />
// // // //       <Livelocation onDetectLocation={handleDetectLocation} />

// // // //       {weather && forecast && (
// // // //         <WeatherDisplay weather={weather} forecast={forecast} />
// // // //       )}
// // // //       {weather && <AirQualityGraph lat={weather.coord.lat} lon={weather.coord.lon} />}
// // // //       {weather && <Share weather={weather} />}
// // // //       {weather && <WeatherMap weather={weather} />}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default WeatherDashboard;

// // // import React, { useState, useEffect } from "react";
// // // import SearchBar from "./SearchBar";
// // // import WeatherMap from "./WeatherMap";
// // // import Share from "./Share";
// // // import Livelocation from "./Livelocation";
// // // import AirQualityGraph from "./AirQualityGraph";
// // // import WeatherDisplay from "./WeatherInfo";

// // // const WeatherDashboard = ({ setNotification, setWeather }) => {
// // //   const [city, setCity] = useState("");
// // //   const [weather, localSetWeather] = useState(null);
// // //   const [forecast, setForecast] = useState(null);
// // //   const [error, setError] = useState("");
// // //   const [searchHistory, setSearchHistory] = useState([]);

// // //   const API_KEY = "04d0508e5f755e1deb3c5f6cfaff4b55";

// // //   // Load search history from localStorage
// // //   useEffect(() => {
// // //     const storedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
// // //     setSearchHistory(storedHistory);
// // //   }, []);

// // //   // Save search history to localStorage
// // //   useEffect(() => {
// // //     if (searchHistory.length > 0) {
// // //       localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
// // //     }
// // //   }, [searchHistory]);

// // //   // Send user notifications based on weather conditions
// // //   const sendNotification = (weatherMain) => {
// // //     switch (weatherMain) {
// // //       case "Rain":
// // //         setNotification("Rain Alert: Carry an umbrella!");
// // //         break;
// // //       case "Clear":
// // //         setNotification("Clear skies: Enjoy your day!");
// // //         break;
// // //       case "Clouds":
// // //         setNotification("Cloudy skies: No rain expected.");
// // //         break;
// // //       case "Snow":
// // //         setNotification("Snowfall Alert: Stay warm and safe!");
// // //         break;
// // //       case "Thunderstorm":
// // //         setNotification("Thunderstorm Warning: Stay indoors!");
// // //         break;
// // //       default:
// // //         setNotification("Weather updated.");
// // //     }
// // //   };

// // //   // React to weather data change and show notification
// // //   useEffect(() => {
// // //     if (weather) {
// // //       const condition = weather.weather[0].main;
// // //       sendNotification(condition);
// // //       setTimeout
// // //     }
// // //   }, [weather]);

// // //   // Handle search bar input
// // //   const handleSearch = async (cityName) => {
// // //     setCity(cityName);
// // //     setError("");
// // //     if (!searchHistory.includes(cityName)) {
// // //       const updatedHistory = [cityName, ...searchHistory.slice(0, 19)];
// // //       setSearchHistory(updatedHistory);
// // //     }
// // //   };

// // //   // Handle geolocation detection
// // //   const handleDetectLocation = async (lat, lon) => {
// // //     try {
// // //       const weatherRes = await fetch(
// // //         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
// // //       );
// // //       const weatherData = await weatherRes.json();
// // //       if (weatherData.cod === 200) {
// // //         localSetWeather(weatherData);
// // //         setWeather(weatherData);
// // //         setCity(weatherData.name);
// // //       } else {
// // //         setError("Weather data not found for your location.");
// // //       }

// // //       const forecastRes = await fetch(
// // //         `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
// // //       );
// // //       const forecastData = await forecastRes.json();
// // //       if (forecastData.cod === "200") {
// // //         const formattedForecast = forecastData.list
// // //           .filter((item, idx) => idx % 8 === 0)
// // //           .map((item) => ({
// // //             date: item.dt_txt.split(" ")[0],
// // //             temp: item.main.temp,
// // //           }));
// // //         setForecast(formattedForecast);
// // //       } else {
// // //         setError("No forecast data available.");
// // //       }
// // //     } catch (err) {
// // //       setError("Failed to fetch location-based weather.");
// // //     }
// // //   };

// // //   // Fetch weather & forecast when city changes
// // //   useEffect(() => {
// // //     if (!city) return;

// // //     const fetchWeatherData = async () => {
// // //       try {
// // //         const weatherRes = await fetch(
// // //           `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// // //         );
// // //         const weatherData = await weatherRes.json();
// // //         if (weatherData.cod === 200) {
// // //           localSetWeather(weatherData);
// // //           setWeather(weatherData);
// // //         } else {
// // //           setError("City not found.");
// // //         }

// // //         const forecastRes = await fetch(
// // //           `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
// // //         );
// // //         const forecastData = await forecastRes.json();
// // //         if (forecastData.cod === "200") {
// // //           const formattedForecast = forecastData.list
// // //             .filter((item, idx) => idx % 8 === 0)
// // //             .map((item) => ({
// // //               date: item.dt_txt.split(" ")[0],
// // //               temp: item.main.temp,
// // //             }));
// // //           setForecast(formattedForecast);
// // //         } else {
// // //           setError("No forecast data available.");
// // //         }
// // //       } catch (err) {
// // //         setError("Failed to fetch data.");
// // //       }
// // //     };

// // //     fetchWeatherData();
// // //   }, [city]);

// // //   return (
// // //     <div className="app-container">
// // //       <SearchBar onSearch={handleSearch} error={error} />
// // //       <Livelocation onDetectLocation={handleDetectLocation} />

// // //       {weather && forecast && (
// // //         <WeatherDisplay weather={weather} forecast={forecast} />
// // //       )}
// // //       {weather && <AirQualityGraph lat={weather.coord.lat} lon={weather.coord.lon} />}
// // //       {weather && <Share weather={weather} />}
// // //       {weather && <WeatherMap weather={weather} />}
// // //     </div>
// // //   );
// // // };

// // // export default WeatherDashboard;

// // // import React, { useState, useEffect } from "react";
// // // import SearchBar from "./SearchBar";
// // // import WeatherMap from "./WeatherMap";
// // // import Share from "./Share";
// // // import Livelocation from "./Livelocation";
// // // import AirQualityGraph from "./AirQualityGraph";
// // // import WeatherDisplay from "./WeatherInfo";

// // // const WeatherDashboard = ({ setNotification, setWeather }) => {
// // //   const [city, setCity] = useState("");
// // //   const [weather, localSetWeather] = useState(null);
// // //   const [forecast, setForecast] = useState(null);
// // //   const [error, setError] = useState("");
// // //   const [searchHistory, setSearchHistory] = useState([]);

// // //   const API_KEY = "04d0508e5f755e1deb3c5f6cfaff4b55";

// // //   // Load search history from localStorage
// // //   useEffect(() => {
// // //     const storedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
// // //     setSearchHistory(storedHistory);
// // //   }, []);

// // //   // Save search history to localStorage
// // //   useEffect(() => {
// // //     if (searchHistory.length > 0) {
// // //       localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
// // //     }
// // //   }, [searchHistory]);

// // //   // Send user notifications based on weather conditions
// // //   const sendNotification = (weatherMain) => {
// // //     switch (weatherMain) {
// // //       case "Rain":
// // //         setNotification("Rain Alert: Carry an umbrella!");
// // //         break;
// // //       case "Clear":
// // //         setNotification("Clear skies: Enjoy your day!");
// // //         break;
// // //       case "Clouds":
// // //         setNotification("Cloudy skies: No rain expected.");
// // //         break;
// // //       case "Snow":
// // //         setNotification("Snowfall Alert: Stay warm and safe!");
// // //         break;
// // //       case "Thunderstorm":
// // //         setNotification("Thunderstorm Warning: Stay indoors!");
// // //         break;
// // //       default:
// // //         setNotification("Weather updated.");
// // //     }
// // //   };

// // //   // React to weather data change and show notification
// // //   useEffect(() => {
// // //     if (weather) {
// // //       const condition = weather.weather[0].main;
// // //       sendNotification(condition);
// // //     }
// // //   }, [weather]);

// // //   // Handle search bar input
// // //   const handleSearch = async (cityName) => {
// // //     setCity(cityName);
// // //     setError("");
// // //     if (!searchHistory.includes(cityName)) {
// // //       const updatedHistory = [cityName, ...searchHistory.slice(0, 19)];
// // //       setSearchHistory(updatedHistory);
// // //     }
// // //   };

// // //   // Handle geolocation detection
// // //   const handleDetectLocation = async (lat, lon) => {
// // //     try {
// // //       const weatherRes = await fetch(
// // //         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
// // //       );
// // //       const weatherData = await weatherRes.json();
// // //       if (weatherData.cod === 200) {
// // //         localSetWeather(weatherData);
// // //         setWeather(weatherData);
// // //         setCity(weatherData.name);
// // //       } else {
// // //         setError("Weather data not found for your location.");
// // //       }

// // //       const forecastRes = await fetch(
// // //         `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
// // //       );
// // //       const forecastData = await forecastRes.json();
// // //       if (forecastData.cod === "200") {
// // //         const formattedForecast = forecastData.list
// // //           .filter((item, idx) => idx % 8 === 0)
// // //           .map((item) => ({
// // //             date: item.dt_txt.split(" ")[0],
// // //             temp: item.main.temp,
// // //           }));
// // //         setForecast(formattedForecast);
// // //       } else {
// // //         setError("No forecast data available.");
// // //       }
// // //     } catch (err) {
// // //       setError("Failed to fetch location-based weather.");
// // //     }
// // //   };

// // //   // Fetch weather & forecast when city changes
// // //   useEffect(() => {
// // //     if (!city) return;

// // //     const fetchWeatherData = async () => {
// // //       try {
// // //         const weatherRes = await fetch(
// // //           `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// // //         );
// // //         const weatherData = await weatherRes.json();
// // //         if (weatherData.cod === 200) {
// // //           localSetWeather(weatherData);
// // //           setWeather(weatherData);
// // //         } else {
// // //           setError("City not found.");
// // //         }

// // //         const forecastRes = await fetch(
// // //           `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
// // //         );
// // //         const forecastData = await forecastRes.json();
// // //         if (forecastData.cod === "200") {
// // //           const formattedForecast = forecastData.list
// // //             .filter((item, idx) => idx % 8 === 0)
// // //             .map((item) => ({
// // //               date: item.dt_txt.split(" ")[0],
// // //               temp: item.main.temp,
// // //             }));
// // //           setForecast(formattedForecast);
// // //         } else {
// // //           setError("No forecast data available.");
// // //         }
// // //       } catch (err) {
// // //         setError("Failed to fetch data.");
// // //       }
// // //     };

// // //     fetchWeatherData();
// // //   }, [city]);

// // //   return (
// // //     <div className="app-container">
// // //       <SearchBar onSearch={handleSearch} error={error} />
// // //       <Livelocation onDetectLocation={handleDetectLocation} />

// // //       {weather && forecast && (
// // //         <WeatherDisplay weather={weather} forecast={forecast} />
// // //       )}
// // //       {weather && <AirQualityGraph lat={weather.coord.lat} lon={weather.coord.lon} />}
// // //       {weather && <Share weather={weather} />}
// // //       {weather && <WeatherMap weather={weather} />}
// // //     </div>
// // //   );
// // // };

// // // export default WeatherDashboard;

// // import React, { useState, useEffect } from "react";
// // import SearchBar from "./SearchBar";
// // import WeatherMap from "./WeatherMap";
// // import Share from "./Share";
// // import Livelocation from "./Livelocation";
// // import AirQualityGraph from "./AirQualityGraph";
// // import WeatherDisplay from "./WeatherInfo";

// // const API_KEY = "04d0508e5f755e1deb3c5f6cfaff4b55";

// // const WeatherDashboard = ({ setNotification }) => {
// //   const [city, setCity] = useState("");
// //   const [weather, setWeather] = useState(null);
// //   const [forecast, setForecast] = useState(null);
// //   const [error, setError] = useState("");
// //   const [searchHistory, setSearchHistory] = useState([]);

// //   useEffect(() => {
// //     const stored = JSON.parse(localStorage.getItem("searchHistory")) || [];
// //     setSearchHistory(stored);
// //   }, []);

// //   useEffect(() => {
// //     if (searchHistory.length) {
// //       localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
// //     }
// //   }, [searchHistory]);

// //   const sendNotification = (main) => {
// //     const messages = {
// //       Rain: "Rain Alert: Carry an umbrella!",
// //       Clear: "Clear skies: Enjoy your day!",
// //       Clouds: "Cloudy skies: No rain expected.",
// //       Snow: "Snowfall Alert: Stay warm and safe!",
// //       Thunderstorm: "Thunderstorm Warning: Stay indoors!",
// //     };
// //     setNotification(messages[main] || "Weather updated.");
// //   };

// //   useEffect(() => {
// //     if (weather) {
// //       sendNotification(weather.weather[0].main);
// //     }
// //   }, [weather]);

// //   const formatForecast = (dataList) =>
// //     dataList
// //       .filter((_, i) => i % 8 === 0)
// //       .map((item) => ({
// //         date: item.dt_txt.split(" ")[0],
// //         temp: item.main.temp,
// //       }));

// //   const handleSearch = async (cityName) => {
// //     setCity(cityName);
// //     setError("");
// //     if (!searchHistory.some((c) => c.toLowerCase() === cityName.toLowerCase())) {
// //       setSearchHistory([cityName, ...searchHistory.slice(0, 19)]);
// //     }
// //   };

// //   const handleDetectLocation = async (lat, lon) => {
// //     try {
// //       const weatherRes = await fetch(
// //         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
// //       );
// //       const weatherData = await weatherRes.json();
// //       if (weatherData.cod === 200) {
// //         setWeather(weatherData);
// //         setCity(weatherData.name);
// //       } else {
// //         setError("Weather data not found.");
// //       }

// //       const forecastRes = await fetch(
// //         `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
// //       );
// //       const forecastData = await forecastRes.json();
// //       if (forecastData.cod === "200") {
// //         setForecast(formatForecast(forecastData.list));
// //       } else {
// //         setError("No forecast data.");
// //       }
// //     } catch (err) {
// //       setError("Failed to fetch weather.");
// //     }
// //   };

// //   useEffect(() => {
// //     if (!city) return;

// //     const fetchWeatherData = async () => {
// //       try {
// //         const weatherRes = await fetch(
// //           `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// //         );
// //         const weatherData = await weatherRes.json();
// //         if (weatherData.cod === 200) {
// //           setWeather(weatherData);
// //         } else {
// //           setError("City not found.");
// //         }

// //         const forecastRes = await fetch(
// //           `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
// //         );
// //         const forecastData = await forecastRes.json();
// //         if (forecastData.cod === "200") {
// //           setForecast(formatForecast(forecastData.list));
// //         } else {
// //           setError("No forecast data available.");
// //         }
// //       } catch {
// //         setError("Failed to fetch data.");
// //       }
// //     };

// //     fetchWeatherData();
// //   }, [city]);

// //   return (
// //     <div className="app-container">
// //       <SearchBar onSearch={handleSearch} error={error} />
// //       <Livelocation onDetectLocation={handleDetectLocation} />

// //       {weather && forecast && (
// //         <WeatherDisplay weather={weather} forecast={forecast} />
// //       )}
// //       {weather && <AirQualityGraph lat={weather.coord.lat} lon={weather.coord.lon} />}
// //       {weather && <Share weather={weather} />}
// //       {weather && <WeatherMap weather={weather} />}
// //     </div>
// //   );
// // };

// // export default WeatherDashboard;

// // import React, { useState, useEffect } from "react";
// // import SearchBar from "./SearchBar";
// // import WeatherMap from "./WeatherMap";
// // import Share from "./Share";
// // import Livelocation from "./Livelocation";
// // import AirQualityGraph from "./AirQualityGraph";
// // import WeatherDisplay from "./WeatherInfo";
// // import HamburgerMenu from "./HamburgerMenu";

// // const WeatherDashboard = ({ setNotification, setWeather }) => {
// //   const [city, setCity] = useState("");
// //   const [weather, localSetWeather] = useState(null);
// //   const [forecast, setForecast] = useState(null);
// //   const [error, setError] = useState("");
// //   const [searchHistory, setSearchHistory] = useState([]);

// //   const API_KEY = "04d0508e5f755e1deb3c5f6cfaff4b55";

// //   // Load search history from localStorage
// //   useEffect(() => {
// //     const storedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
// //     setSearchHistory(storedHistory);
// //   }, []);

// //   // Save search history to localStorage
// //   useEffect(() => {
// //     if (searchHistory.length > 0) {
// //       localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
// //     }
// //   }, [searchHistory]);

// //   // Send user notifications based on weather conditions
// //   const sendNotification = (weatherMain) => {
// //     switch (weatherMain) {
// //       case "Rain":
// //         setNotification("Rain Alert: Carry an umbrella!");
// //         break;
// //       case "Clear":
// //         setNotification("Clear skies: Enjoy your day!");
// //         break;
// //       case "Clouds":
// //         setNotification("Cloudy skies: No rain expected.");
// //         break;
// //       case "Snow":
// //         setNotification("Snowfall Alert: Stay warm and safe!");
// //         break;
// //       case "Thunderstorm":
// //         setNotification("Thunderstorm Warning: Stay indoors!");
// //         break;
// //       default:
// //         setNotification("Weather updated.");
// //     }
// //   };

// //   // React to weather data change and show notification
// //   useEffect(() => {
// //     if (weather) {
// //       const condition = weather.weather[0].main;
// //       sendNotification(condition);
// //       setTimeout(() => {
// //         setNotification(condition);
// //       }, 100);
// //     }
// //   }, [weather]);

// //   // Handle search bar input
// //   const handleSearch = async (cityName) => {
// //     setCity(cityName);
// //     setError("");
// //     if (!searchHistory.includes(cityName)) {
// //       const updatedHistory = [cityName, ...searchHistory.slice(0, 19)];
// //       setSearchHistory(updatedHistory);
// //     }
// //   };

// //   // Handle geolocation detection
// //   const handleDetectLocation = async (lat, lon) => {
// //     try {
// //       const weatherRes = await fetch(
// //         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
// //       );
// //       const weatherData = await weatherRes.json();
// //       if (weatherData.cod === 200) {
// //         localSetWeather(weatherData);
// //         setWeather(weatherData);
// //         setCity(weatherData.name);
// //       } else {
// //         setError("Weather data not found for your location.");
// //       }

// //       const forecastRes = await fetch(
// //         `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
// //       );
// //       const forecastData = await forecastRes.json();
// //       if (forecastData.cod === "200") {
// //         const formattedForecast = forecastData.list
// //           .filter((item, idx) => idx % 8 === 0)
// //           .map((item) => ({
// //             date: item.dt_txt.split(" ")[0],
// //             temp: item.main.temp,
// //           }));
// //         setForecast(formattedForecast);
// //       } else {
// //         setError("No forecast data available.");
// //       }
// //     } catch (err) {
// //       setError("Failed to fetch location-based weather.");
// //     }
// //   };

// //   // Fetch weather & forecast when city changes
// //   useEffect(() => {
// //     if (!city) return;

// //     const fetchWeatherData = async () => {
// //       try {
// //         const weatherRes = await fetch(
// //           `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// //         );
// //         const weatherData = await weatherRes.json();
// //         if (weatherData.cod === 200) {
// //           localSetWeather(weatherData);
// //           setWeather(weatherData);
// //         } else {
// //           setError("City not found.");
// //         }

// //         const forecastRes = await fetch(
// //           `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
// //         );
// //         const forecastData = await forecastRes.json();
// //         if (forecastData.cod === "200") {
// //           const formattedForecast = forecastData.list
// //             .filter((item, idx) => idx % 8 === 0)
// //             .map((item) => ({
// //               date: item.dt_txt.split(" ")[0],
// //               temp: item.main.temp,
// //             }));
// //           setForecast(formattedForecast);
// //         } else {
// //           setError("No forecast data available.");
// //         }
// //       } catch (err) {
// //         setError("Failed to fetch data.");
// //       }
// //     };

// //     fetchWeatherData();
// //   }, [city]);

// //   return (
// //     <div className="app-container">
// //       <SearchBar onSearch={handleSearch} error={error} />
// //       <Livelocation onDetectLocation={handleDetectLocation} />
   
     
// //       {weather && forecast && (
// //         <WeatherDisplay weather={weather} forecast={forecast} />
// //       )}
// //       {weather && <AirQualityGraph lat={weather.coord.lat} lon={weather.coord.lon} />}
// //       {weather && <Share weather={weather} />}
// //       {weather &&  <WeatherMap weather={weather} />}
// //     </div>
// //   );
// // };

// // export default WeatherDashboard;

// import React, { useState, useEffect } from "react";
// import SearchBar from "./SearchBar";
// import WeatherMap from "./WeatherMap";
// import Share from "./Share";
// import Livelocation from "./Livelocation";
// import AirQualityGraph from "./AirQualityGraph";
// import WeatherDisplay from "./WeatherInfo";
// import HamburgerMenu from "./HamburgerMenu";

// const WeatherDashboard = ({ setWeather }) => {
//   const [city, setCity] = useState("");
//   const [weather, localSetWeather] = useState(null);
//   const [forecast, setForecast] = useState(null);
//   const [error, setError] = useState("");
//   const [searchHistory, setSearchHistory] = useState([]);

//   const [notificationMessage, setNotificationMessage] = useState("");
//   const [notificationVisible, setNotificationVisible] = useState(false);

//   const API_KEY = "04d0508e5f755e1deb3c5f6cfaff4b55";

//   useEffect(() => {
//     const storedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
//     setSearchHistory(storedHistory);
//   }, []);

//   useEffect(() => {
//     if (searchHistory.length > 0) {
//       localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
//     }
//   }, [searchHistory]);

//   const sendNotification = (weatherMain) => {
//     let message = "";
//     switch (weatherMain) {
//       case "Rain":
//         message = "Rain Alert: Carry an umbrella!";
//         break;
//       case "Clear":
//         message = "Clear skies: Enjoy your day!";
//         break;
//       case "Clouds":
//         message = "Cloudy skies: No rain expected.";
//         break;
//       case "Snow":
//         message = "Snowfall Alert: Stay warm and safe!";
//         break;
//       case "Thunderstorm":
//         message = "Thunderstorm Warning: Stay indoors!";
//         break;
//       default:
//         message = "Weather updated.";
//     }
//     setNotificationMessage(message);
//     setNotificationVisible(true);
//   };

//   useEffect(() => {
//     if (weather) {
//       const condition = weather.weather[0].main;
//       sendNotification(condition);
//     }
//   }, [weather]);

//   const handleSearch = async (cityName) => {
//     setCity(cityName);
//     setError("");
//     if (!searchHistory.includes(cityName)) {
//       const updatedHistory = [cityName, ...searchHistory.slice(0, 19)];
//       setSearchHistory(updatedHistory);
//     }
//   };

//   const formatForecast = (data) => {
//     return data.list
//       .filter((item, idx) => idx % 8 === 0)
//       .map((item) => ({
//         date: item.dt_txt.split(" ")[0],
//         temp: item.main.temp,
//       }));
//   };

//   const handleDetectLocation = async (lat, lon) => {
//     try {
//       const weatherRes = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
//       );
//       const weatherData = await weatherRes.json();
//       if (weatherData.cod === 200) {
//         localSetWeather(weatherData);
//         setWeather(weatherData);
//         setCity(weatherData.name);
//       } else {
//         setError("Weather data not found for your location.");
//       }

//       const forecastRes = await fetch(
//         `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
//       );
//       const forecastData = await forecastRes.json();
//       if (forecastData.cod === "200") {
//         setForecast(formatForecast(forecastData));
//       } else {
//         setError("No forecast data available.");
//       }
//     } catch (err) {
//       setError("Failed to fetch location-based weather.");
//     }
//   };

//   useEffect(() => {
//     if (!city) return;

//     const fetchWeatherData = async () => {
//       try {
//         const weatherRes = await fetch(
//           `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//         );
//         const weatherData = await weatherRes.json();
//         if (weatherData.cod === 200) {
//           localSetWeather(weatherData);
//           setWeather(weatherData);
//         } else {
//           setError("City not found.");
//         }

//         const forecastRes = await fetch(
//           `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
//         );
//         const forecastData = await forecastRes.json();
//         if (forecastData.cod === "200") {
//           setForecast(formatForecast(forecastData));
//         } else {
//           setError("No forecast data available.");
//         }
//       } catch (err) {
//         setError("Failed to fetch data.");
//       }
//     };

//     fetchWeatherData();
//   }, [city]);

//   return (
//     <div className="app-container">
//       <HamburgerMenu
//         weather={weather}
//         notificationMessage={notificationMessage}
//         notificationVisible={notificationVisible}
//         setNotificationVisible={setNotificationVisible}
//       />

//       <SearchBar onSearch={handleSearch} error={error} />
//       <Livelocation onDetectLocation={handleDetectLocation} />

//       {weather && forecast && (
//         <WeatherDisplay weather={weather} forecast={forecast} />
//       )}
//       {weather && <AirQualityGraph lat={weather.coord.lat} lon={weather.coord.lon} />}
//       {weather && <Share weather={weather} />}
//       {weather && <WeatherMap weather={weather} />}
//     </div>
//   );
// };

// export default WeatherDashboard;

import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import WeatherMap from "./WeatherMap";
import Share from "./Share";
import Livelocation from "./Livelocation";
import AirQualityGraph from "./AirQualityGraph";
import WeatherDisplay from "./WeatherInfo";
import HamburgerMenu from "./HamburgerMenu";

const WeatherDashboard = ({ setWeather }) => {
  const [city, setCity] = useState("");
  const [weather, localSetWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [hasWeatherData, setHasWeatherData] = useState(false); // NEW STATE

  const API_KEY = "04d0508e5f755e1deb3c5f6cfaff4b55";

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setSearchHistory(storedHistory);
  }, []);

  useEffect(() => {
    if (searchHistory.length > 0) {
      localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    }
  }, [searchHistory]);

  const sendNotification = (weatherMain) => {
    let message = "";
    switch (weatherMain) {
      case "Rain":
        message = "Rain Alert: Carry an umbrella!";
        break;
      case "Clear":
        message = "Clear skies: Enjoy your day!";
        break;
      case "Clouds":
        message = "Cloudy skies: No rain expected.";
        break;
      case "Snow":
        message = "Snowfall Alert: Stay warm and safe!";
        break;
      case "Thunderstorm":
        message = "Thunderstorm Warning: Stay indoors!";
        break;
      default:
        message = "Weather updated.";
    }
    setNotificationMessage(message);
    setNotificationVisible(true);
  };

  useEffect(() => {
    if (weather) {
      const condition = weather.weather[0].main;
      sendNotification(condition);
    }
  }, [weather]);

  const handleSearch = async (cityName) => {
    setCity(cityName);
    setError("");
    if (!searchHistory.includes(cityName)) {
      const updatedHistory = [cityName, ...searchHistory.slice(0, 19)];
      setSearchHistory(updatedHistory);
    }
  };

  const formatForecast = (data) => {
    return data.list
      .filter((item, idx) => idx % 8 === 0)
      .map((item) => ({
        date: item.dt_txt.split(" ")[0],
        temp: item.main.temp,
      }));
  };

  const handleDetectLocation = async (lat, lon) => {
    try {
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      const weatherData = await weatherRes.json();
      if (weatherData.cod === 200) {
        localSetWeather(weatherData);
        setWeather(weatherData);
        setCity(weatherData.name);
        setHasWeatherData(true); // SHOW STATIC COMPONENTS
      } else {
        setError("Weather data not found for your location.");
      }

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      const forecastData = await forecastRes.json();
      if (forecastData.cod === "200") {
        setForecast(formatForecast(forecastData));
      } else {
        setError("No forecast data available.");
      }
    } catch (err) {
      setError("Failed to fetch location-based weather.");
    }
  };

  useEffect(() => {
    if (!city) return;

    const fetchWeatherData = async () => {
      try {
        const weatherRes = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const weatherData = await weatherRes.json();
        if (weatherData.cod === 200) {
          localSetWeather(weatherData);
          setWeather(weatherData);
          setHasWeatherData(true); // SHOW STATIC COMPONENTS
        } else {
          setError("City not found.");
        }

        const forecastRes = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );
        const forecastData = await forecastRes.json();
        if (forecastData.cod === "200") {
          setForecast(formatForecast(forecastData));
        } else {
          setError("No forecast data available.");
        }
      } catch (err) {
        setError("Failed to fetch data.");
      }
    };

    fetchWeatherData();
  }, [city]);

  return (
    <div className="app-container">
      <HamburgerMenu
        weather={weather}
        notificationMessage={notificationMessage}
        notificationVisible={notificationVisible}
        setNotificationVisible={setNotificationVisible}
      />

      <SearchBar onSearch={handleSearch} error={error} />
      <Livelocation onDetectLocation={handleDetectLocation} />

      {hasWeatherData && weather && forecast && (
        <WeatherDisplay weather={weather} forecast={forecast} />
      )}
      {hasWeatherData && weather && (
        <>
          <AirQualityGraph lat={weather.coord.lat} lon={weather.coord.lon} />
          <Share weather={weather} />
          <WeatherMap weather={weather} />
        </>
      )}
    </div>
  );
};

export default WeatherDashboard;