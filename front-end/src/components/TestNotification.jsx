import React from "react";
import NotificationMenu from "./NotificationMenu"; // Adjust path as needed

const TestNotification = () => {
  const sampleWeather = {
    weather: [{ main: "Rain" }], // Try "Clear", "Clouds" too
    main: { temp: 27 },
    name: "Bangalore",
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Testing Notification Menu</h2>
      <NotificationMenu weather={sampleWeather} />
    </div>
  );
};

export default TestNotification;