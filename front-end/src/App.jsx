import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes/AllRoutes";

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState("light");
  const [weather, setWeather] = useState(null);
  const [userSearched, setUserSearched] = useState(false);
  const [weatherCondition, setWeatherCondition] = useState("");
  const [notifications, setNotification] = useState([]);

  return (
    <BrowserRouter>
      <AllRoutes
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
        notifications={notifications}          
        setNotification={setNotification}
        setWeather={setWeather}
        setUserSearched={setUserSearched}
        weather={weather}
        userSearched={userSearched}
        weatherCondition={weatherCondition}
      />
    </BrowserRouter>
  );
};

export default App;
