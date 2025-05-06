
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ClimateGraph({ lat, lon }) {
  const [labels, setLabels] = useState([]);
  const [rainfall, setRainfall] = useState([]);
  const [temperature, setTemperature] = useState([]);
  const [error, setError] = useState("");

  const API_KEY = "04d0508e5f755e1deb3c5f6cfaff4b55"; // Replace with your actual API key

  useEffect(() => {
    const fetchClimateData = async () => {
      try {
        // const res = await fetch(
        //   `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${API_KEY}`
        // );
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${API_KEY}`
        );
        const data = await res.json();
        console.log("Fetched data:", data);
  
        if (!data.daily || data.daily.length === 0) {
          console.error("No forecast data available.");
          setError("No forecast data available.");
          return;
        }
  
        const days = data.daily.slice(0, 7);
        const newLabels = days.map((day) =>
          new Date(day.dt * 1000).toLocaleDateString("en-US", {
            weekday: "short",
          })
        );
        const temps = days.map((day) => day.temp.day);
        const rains = days.map((day) => day.rain || 0);
  
        setLabels(newLabels);
        setTemperature(temps);
        setRainfall(rains);
      } catch (err) {
        console.error("Error fetching climate data:", err);
        setError("Failed to fetch climate data.");
      }
    };
  
    fetchClimateData();
  }, [lat, lon]);

  const data = {
    labels,
    datasets: [
      {
        label: "Rainfall (mm)",
        data: rainfall,
        backgroundColor: "rgba(0, 123, 255, 0.6)",
      },
      {
        label: "Avg Temp (°C)",
        data: temperature,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  if (error) return <p>{error}</p>;

  return (
    <div className="climate-graph" style={{ height: "400px" }}>
      <h3>7-Day Real-Time Rainfall & Temperature</h3>
      <Bar data={data} options={options} />
    </div>
  );
}