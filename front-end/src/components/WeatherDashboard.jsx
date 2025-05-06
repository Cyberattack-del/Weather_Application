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
  const [hasWeatherData, setHasWeatherData] = useState(false);
  const API_KEY = "04d0508e5f755e1deb3c5f6cfaff4b55";

  // Restore last session data on mount
  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    const savedWeather = JSON.parse(localStorage.getItem("weatherData"));
    const savedForecast = JSON.parse(localStorage.getItem("forecastData"));
    const savedCity = localStorage.getItem("city");

    setSearchHistory(storedHistory);
    if (savedWeather && savedForecast && savedCity) {
      localSetWeather(savedWeather);
      setForecast(savedForecast);
      setCity(savedCity);
      setHasWeatherData(true);
      setWeather(savedWeather);
    }
  }, []);

  // Save search history
  useEffect(() => {
    if (searchHistory.length > 0) {
      localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    }
  }, [searchHistory]);

  // Show and auto-hide notification
  useEffect(() => {
    if (notificationVisible) {
      const timer = setTimeout(() => setNotificationVisible(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [notificationVisible]);

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

  const formatForecast = (data) =>
    data.list
      .filter((item, idx) => idx % 8 === 0)
      .map((item) => ({
        date: item.dt_txt.split(" ")[0],
        temp: item.main.temp,
      }));

  const handleSearch = async (cityName) => {
    setCity(cityName);
    setError("");

    try {
      await fetch("http://localhost:5000/api/history", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ city: cityName }),
      });
    } catch (error) {
      console.error("Error saving search:", error);
    }

    if (!searchHistory.includes(cityName)) {
      const updatedHistory = [cityName, ...searchHistory.slice(0, 19)];
      setSearchHistory(updatedHistory);
      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    }
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
        setHasWeatherData(true);
        localStorage.setItem("weatherData", JSON.stringify(weatherData));
        localStorage.setItem("city", weatherData.name);
      } else {
        setError("Weather data not found for your location.");
      }

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      const forecastData = await forecastRes.json();

      if (forecastData.cod === "200") {
        const formatted = formatForecast(forecastData);
        setForecast(formatted);
        localStorage.setItem("forecastData", JSON.stringify(formatted));
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
          setHasWeatherData(true);
          localStorage.setItem("weatherData", JSON.stringify(weatherData));
          localStorage.setItem("city", city);
        } else {
          setError("City not found.");
        }

        const forecastRes = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );
        const forecastData = await forecastRes.json();

        if (forecastData.cod === "200") {
          const formatted = formatForecast(forecastData);
          setForecast(formatted);
          localStorage.setItem("forecastData", JSON.stringify(formatted));
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
     
      {/* <WeatherDisplay/> */}
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