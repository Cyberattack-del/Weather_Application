import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const getAQIColor = (aqi) => {
  switch (aqi) {
    case 1:
      return "green";
    case 2:
      return "#9ACD32"; // Yellow-Green
    case 3:
      return "yellow";
    case 4:
      return "orange";
    case 5:
      return "red";
    default:
      return "gray";
  }
};

export default function AirQualityForecastBar({ lat, lon }) {
  const [dailyAQI, setDailyAQI] = useState([]);
  const [error, setError] = useState("");

  const API_KEY = "04d0508e5f755e1deb3c5f6cfaff4b55";

  useEffect(() => {
    if (!lat || !lon) return;

    const fetchForecast = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        );
        const data = await res.json();

        if (data.list && data.list.length > 0) {
          const grouped = {};
          data.list.forEach((item) => {
            const date = new Date(item.dt * 1000).toISOString().split("T")[0];
            if (!grouped[date]) grouped[date] = [];
            grouped[date].push(item.main.aqi);
          });

          const daily = Object.entries(grouped)
            .slice(0, 7)
            .map(([date, aqiList]) => ({
              date,
              aqi: Math.round(
                aqiList.reduce((sum, val) => sum + val, 0) / aqiList.length
              ),
            }));

          setDailyAQI(daily);
        } else {
          setError("Air quality forecast data unavailable.");
        }
      } catch (err) {
        setError("Failed to fetch air quality forecast.");
      }
    };

    fetchForecast();
  }, [lat, lon]);

  if (error) return <p>{error}</p>;
  if (dailyAQI.length === 0) return <p>Loading AQI forecast...</p>;

  const data = {
    labels: dailyAQI.map((d) => d.date),
    datasets: [
      {
        label: "AQI Level",
        data: dailyAQI.map((d) => d.aqi),
        backgroundColor: dailyAQI.map((d) => getAQIColor(d.aqi)),
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
        ticks: {
          stepSize: 1,
          callback: (value) => {
            const labels = ["", "Good", "Fair", "Moderate", "Poor", "Very Poor"];
            return labels[value];
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const aqi = context.raw;
            const descriptions = {
              1: "Good",
              2: "Fair",
              3: "Moderate",
              4: "Poor",
              5: "Very Poor",
            };
            return AQI `${aqi} - ${descriptions[aqi] || "Unknown"}`;
          },
        },
      },
    },
  };

  return (
    <div style={{ height: "350px", margin: "20px 0" }}>
      <h3>7-Day AQI Forecast</h3>
      <Bar data={data} options={options} />
    </div>
  );
}