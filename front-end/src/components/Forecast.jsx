import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ForecastChart({ forecastData }) {
  if (!forecastData || forecastData.length === 0) {
    return (
      <p className="text-center text-white text-lg mt-6">
        No forecast data available.
      </p>
    );
  }

  const data = {
    labels: forecastData.map((day) => day.date),
    datasets: [
      {
        label: "Temperature (°C)",
        data: forecastData.map((day) => day.temp),
        borderColor: "#00FFFF",
        backgroundColor: "rgba(0, 255, 255, 0.15)",
        tension: 0.4,
        pointBorderColor: "#00FFFF",
        pointBackgroundColor: "#00FFFF",
        pointRadius: 4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#fff",
          font: { size: 14 }
        }
      },
      tooltip: {
        backgroundColor: "#111",
        titleColor: "#00FFFF",
        bodyColor: "#fff"
      }
    },
    scales: {
      x: {
        ticks: { color: "#ccc" },
        grid: { color: "rgba(255,255,255,0.05)" }
      },
      y: {
        ticks: { color: "#ccc" },
        grid: { color: "rgba(255,255,255,0.05)" }
      }
    }
  };

  return (
    <div className="w-screen h-[60vh]">
      <div className="w-full h-full p-6">
        <div className="w-full h-full bg-white/5 border border-cyan-500 rounded-2xl shadow-xl backdrop-blur-lg p-8">
          <h3 className="text-white text-3xl font-bold mb-6 text-center">
            7-Day Forecast
          </h3>
          <div className="h-[85%]">
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}