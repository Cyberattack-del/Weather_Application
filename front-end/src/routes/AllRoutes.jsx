import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import WeatherDashboard from "../components/WeatherDashboard";
import NotificationMenu from "../components/NotificationMenu";
import GeneralUser from "../context/GeneralUser";
import AgriculturalUsers from "../context/AgriculturalUsers";
import OutdoorEnthusiasts from "../context/OutdoorEnthusiasts";
import TravelsandCommuters from "../context/TravelsandCommuters";
import HistoryPageMenu from "../components/HistoryPageMenu";
import SettingsMenu from "../components/SettingsMenu";
import ThemeMenu from "../components/ThemeMenu";
//import SettingsContext from "../context/SettingsContext";

const AllRoutes = ({
  selectedTheme,
  setSelectedTheme,
  notifications,              
  setNotification,
  setWeather,
  setUserSearched,
  weather,
  userSearched,
  weatherCondition,
}) => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout selectedTheme={selectedTheme} />}>
        <Route
          index
          element={
            <WeatherDashboard
              selectedTheme={selectedTheme}
              setNotification={setNotification}
              setWeather={(data) => {
                setWeather(data);
                setUserSearched(true);
              }}
            />
          }
        />
             
        <Route
          path="notifications"
          element={<NotificationMenu notifications={notifications} />}
        />
        <Route
          path="general"
          element={
            userSearched && weather ? (
              <GeneralUser condition={weatherCondition} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="agri"
          element={
            userSearched && weather ? (
              <AgriculturalUsers condition={weatherCondition} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="outdoor"
          element={
            userSearched && weather ? (
              <OutdoorEnthusiasts condition={weatherCondition} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="travel"
          element={
            userSearched && weather ? (
              <TravelsandCommuters condition={weatherCondition} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route path="history" element={<HistoryPageMenu />} />
        {/* historyData={[{date:'2025-05-06',summary:'sunny'}]} */}
        <Route path="settings" element={<SettingsMenu />} />
        <Route
          path="themes"
          element={<ThemeMenu setSelectedTheme={setSelectedTheme} />}
        />
      </Route>
    </Routes>
  );
};

export default AllRoutes;