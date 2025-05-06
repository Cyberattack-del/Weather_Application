import React, { useState, useEffect } from "react";
import ForecastChart from "./Forecast";


export default function WeatherDisplay({ weather, forecast, onNotify }) {
  const [recommendation, setRecommendation] = useState("");
  const [currentTemp, setCurrentTemp] = useState(null);

  useEffect(() => {
    if (weather && weather.main && weather.weather) {
      const temp = weather.main.temp;
      setCurrentTemp(temp);
      generateRecommendation(weather, temp);
    }
  }, [weather]);

  const generateRecommendation = (data, temp) => {
    const condition = data.weather[0].main.toLowerCase();

    if (typeof onNotify === "function") {
      if (condition.includes("rain")) {
        setRecommendation("Carry an umbrella!");
        onNotify("Rain expected - umbrella recommended.");
      } else if (condition.includes("clear") && temp < 30) {
        setRecommendation("Great day for a run!");
        onNotify("Clear skies and cool temps - great for outdoor activities.");
      } else if (temp > 35) {
        setRecommendation("Stay hydrated and avoid peak sun!");
        onNotify("High temperatures - stay cool!");
      } else {
        setRecommendation("Have a nice day!");
        onNotify("Weather is normal today.");
      }
    }
  };

  if (!weather || !weather.weather || weather.weather.length === 0 || !forecast) {
    return <p className="text-center text-gray-500">No weather data available.</p>;
  }

  const { name, main, weather: weatherDetails } = weather;
  const { description, icon } = weatherDetails[0];

  const now = new Date();
  const formattedNow = now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short"
  });

  const cleanedForecast = [
    {
      date: `Now (${formattedNow})`,
      temp: currentTemp ? parseFloat(currentTemp.toFixed(1)) : 0
    },
    ...forecast.map((day) => ({
      date: day.date,
      temp: parseFloat(day.temp.toFixed(1))
    }))
  ];

  return (
    <div>
      {/* Weather Info */}
      <div className="bg-white/10 rounded-xl p-6 mx-auto my-6 w-1/2 backdrop-blur-md shadow-lg text-center text-white">
        <h2 className="text-3xl font-bold mb-2">{name}</h2>
        <p className="text-lg capitalize">{description}</p>
        <p className="text-lg">Temperature: {main.temp}°C</p>
        <p className="text-lg">Humidity: {main.humidity}%</p>
        <h4 className="text-xl mt-4 font-semibold">{recommendation}</h4>
        {icon && (
          <img
    src={`https://openweathermap.org/img/wn/${icon}@2x.png`} 
    alt="Weather Icon"
    className="mx-auto mt-2"
    onError={(e) => (e.target.style.display = "none")}
  />
        )}
      </div>
      <ForecastChart forecastData={cleanedForecast}/>
    </div>
  );
}