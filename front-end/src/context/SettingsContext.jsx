
import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState(false);
  const [weatherSync, setWeatherSync] = useState(false);
  const [temperatureUnit, setTemperatureUnit] = useState('Celsius');
  const [voiceCommands, setVoiceCommands] = useState(false);

  const value = {
    notifications,
    weatherSync,
    temperatureUnit,
    voiceCommands,
    toggleNotifications: () => setNotifications((prev) => !prev),
    toggleWeatherSync: () => setWeatherSync((prev) => !prev),
    toggleVoiceCommands: () => setVoiceCommands((prev) => !prev),
    changeTemperatureUnit: (unit) => setTemperatureUnit(unit)
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);