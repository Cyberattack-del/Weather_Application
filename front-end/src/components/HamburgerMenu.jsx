import React, { useState, useEffect } from "react";
import {
  FaBell,
  FaPalette,
  FaCog,
  FaHistory,
  FaArrowLeft,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const HamburgerMenu = ({
  weather,
  notificationMessage,
  notificationVisible,
  setNotificationVisible,
}) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [currentTheme, setCurrentTheme] = useState("light");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    setCurrentTheme(theme);
  }, []);

  const effectiveWeatherCondition = (weather?.weather?.[0]?.main || "").toLowerCase();
  const weatherNotifications = {
    clouds: ["Cloudy sky: No rain expected today"],
    rain: ["Rain Alert: Carry umbrella"],
    clear: ["Clear skies: Enjoy the sun"],
  };
  const showNotificationBadge =
    notificationVisible &&
    weatherNotifications[effectiveWeatherCondition]?.length > 0;

  const toggleMenu = (menu) => {
    if (menu === "main") {
      setActiveMenu((prev) => (prev === "main" ? null : "main"));
    } else {
      setActiveMenu(menu);
      if (menu === "notifications") setNotificationVisible(false);
      navigate(`/${menu}`);
    }
  };

  const isSubmenuOpen = ["notifications", "themes", "settings", "history"].includes(activeMenu);

  const getMenuBgClass = () => {
    switch (currentTheme) {
      case "dark":
        return "bg-gray-900 text-white";
      case "neon":
        return "bg-[#0f0f1b] text-[#39ff14] border border-[#39ff14]";
      default:
        return "bg-white text-black";
    }
  };

  const getBarColorClass = () => {
    return currentTheme === "neon" ? "bg-[#39ff14]" : "bg-white";
  };

  const handleHamburgerClick = () => {
    if (isSubmenuOpen || location.pathname !== "/") {
      setActiveMenu(null);
      navigate("/");
    } else {
      toggleMenu("main");
    }
  };

  const menuItems = [
    { key: "notifications", icon: <FaBell />, label: "Notification" },
    { key: "themes", icon: <FaPalette />, label: "Theme" },
    { key: "settings", icon: <FaCog />, label: "Settings" },
    { key: "history", icon: <FaHistory />, label: "History" },
  ];

  return (
    <div className="absolute top-5 left-5 z-[999] font-['Segoe_UI']">
      {/* Hamburger / Back Icon */}
      <div
        className="relative w-10 h-[30px] cursor-pointer"
        onClick={handleHamburgerClick}
        role="button"
        tabIndex={0}
        aria-label={isSubmenuOpen ? "Go Back" : "Open Menu"}
        onKeyDown={(e) => e.key === "Enter" && handleHamburgerClick()}
      >
        {isSubmenuOpen || location.pathname !== "/" ? (
          <FaArrowLeft className="text-xl text-white" />
        ) : (
          <>
            <div
              className={`absolute w-full h-[5px] rounded transition-all duration-300 ${
                activeMenu === "main" ? "rotate-45 top-3" : "top-0"
              } ${getBarColorClass()}`}
            />
            <div
              className={`absolute w-full h-[5px] rounded transition-all duration-300 ${
                activeMenu === "main" ? "opacity-0" : "top-3"
              } ${getBarColorClass()}`}
            />
            <div
              className={`absolute w-full h-[5px] rounded transition-all duration-300 ${
                activeMenu === "main" ? "-rotate-45 top-3" : "top-6"
              } ${getBarColorClass()}`}
            />
          </>
        )}
        {showNotificationBadge && !isSubmenuOpen && (
          <div className="absolute top-[-5px] right-[-5px] bg-red-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
            !
          </div>
        )}
      </div>

      {/* Main Menu */}
      {activeMenu === "main" && (
        <div
          className={`absolute top-[45px] left-0 w-[300px] rounded-xl shadow-lg py-2 transition-all duration-300 ${getMenuBgClass()}`}
        >
          {menuItems.map(({ key, icon, label }) => (
            <div
              key={key}
              className="flex items-center gap-4 px-5 py-4 text-lg font-semibold cursor-pointer relative"
              onClick={() => toggleMenu(key)}
            >
              {icon} {label}
              {key === "notifications" && showNotificationBadge && (
                <div className="absolute top-2 right-4 bg-red-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                  !
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Weather Info */}
      {weather?.main && weather?.weather?.[0] && (
        <div className="weather-info mt-4 p-2 text-sm">
          {/* <h4>{weather.name}</h4>
          <p>
            {weather.main.temp}°C - {weather.weather[0].main}
          </p> */}
        </div>
      )}

     
    </div>
  );
};

export default HamburgerMenu;