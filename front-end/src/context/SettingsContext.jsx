import React, { createContext, useContext, useState } from "react";

export const SettingsContext = createContext(); 

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    theme: "dark",
    notificationsEnabled: true,
    language: "en",
  });

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};