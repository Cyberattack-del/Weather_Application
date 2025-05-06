import React from 'react';
import { useSettings } from '../context/SettingsContext';
import { FaBell, FaCloudSun, FaThermometerHalf, FaMicrophone } from 'react-icons/fa';

function SettingsMenu() {
  const {
    notifications = false,
    weatherSync = false,
    temperatureUnit = 'Celsius',
    voiceCommands = false,
    toggleNotifications,
    toggleWeatherSync,
    toggleVoiceCommands,
    changeTemperatureUnit
  } = useSettings();

  return (
    <div className="bg-black rounded-xl p-6 shadow-md max-w-md">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Settings</h3>

      {/* Notifications */}
      <div className="flex justify-between items-center mb-4">
        <label htmlFor="notifications" className="flex items-center gap-3 text-gray-700 dark:text-gray-200 cursor-pointer">
          <FaBell className="text-lg" />
          <span>Enable Notifications</span>
        </label>
        <input
          id="notifications"
          type="checkbox"
          checked={notifications}
          onChange={toggleNotifications}
          className="w-5 h-5 accent-blue-600"
        />
      </div>

      {/* Weather Sync */}
      <div className="flex justify-between items-center mb-4">
        <label htmlFor="weatherSync" className="flex items-center gap-3 text-gray-700 dark:text-gray-200 cursor-pointer">
          <FaCloudSun className="text-lg" />
          <span>Real-Time Weather Sync</span>
        </label>
        <input
          id="weatherSync"
          type="checkbox"
          checked={weatherSync}
          onChange={toggleWeatherSync}
          className="w-5 h-5 accent-blue-600"
        />
      </div>

      {/* Temperature Unit */}
      <div className="flex justify-between items-center mb-4">
        <label htmlFor="temperatureUnit" className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
          <FaThermometerHalf className="text-lg" />
          <span>Temperature Unit</span>
        </label>
        <select
          id="temperatureUnit"
          value={temperatureUnit}
          onChange={(e) => changeTemperatureUnit(e.target.value)}
          className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md px-2 py-1 focus:outline-none"
        >
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
        </select>
      </div>

      {/* Voice Commands */}
      <div className="flex justify-between items-center">
        <label htmlFor="voiceCommands" className="flex items-center gap-3 text-gray-700 dark:text-gray-200 cursor-pointer">
          <FaMicrophone className="text-lg" />
          <span>Enable Voice Commands</span>
        </label>
        <input
          id="voiceCommands"
          type="checkbox"
          checked={voiceCommands}
          onChange={toggleVoiceCommands}
          className="w-5 h-5 accent-blue-600"
        />
      </div>
    </div>
  );
}

export default SettingsMenu;
// import { useSettings } from "../context/SettingsContext";

// const SettingsMenu = () => {
//   const { settings, setSettings } = useSettings();

//   // use settings and setSettings here
// };