import React from "react";
import { FiShare2 } from "react-icons/fi";

const Share = ({ weather }) => {
  const handleShare = async () => {
    if (!weather) {
      alert("No weather data available to share.");
      return;
    }

    const { name, main, weather: details } = weather;
    const description = details[0]?.description;
    const temp = main?.temp;
    const humidity = main?.humidity;

    const shareText = `Weather Update for ${name}:\n${description}, ${temp}°C, Humidity: ${humidity}%.\nCheck it out on Weather Dashboard 2099!`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Weather Dashboard 2099",
          text: shareText,
          url: window.location.href,
        });
        console.log("Weather shared successfully!");
      } catch (error) {
        console.error("Error sharing weather:", error);
      }
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  return (
    <div className="my-4 flex justify-end px-6">
      <button
        className="flex items- bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
        onClick={handleShare}
      >
        <FiShare2 size={20} className="mr-2" />
        Share This Weather Report
      </button>
    </div>
  );
};

export default Share;
