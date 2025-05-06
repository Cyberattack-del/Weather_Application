import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBolt, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ThemeMenu = () => {
  const [selectedTheme, setSelectedTheme] = useState("light");
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setSelectedTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.body.classList.remove("light", "dark", "neon");
    document.body.classList.add(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  }, [selectedTheme]);

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };

  return (
    <div className="flex flex-col items-start p-15  gap-6 px-10 py-18">
      <button
        className={`w-72 h-13 flex items-center gap-2 px-4 py-2 text-sm rounded-md font-medium transition duration-300 ${
          selectedTheme === "light"
            ? "bg-white text-black border border-gray-400"
            : "bg-gray-100 text-black hover:bg-white"
        }`}
        onClick={() => handleThemeChange("light")}
        aria-label="Switch to light theme"
      >
        <FaSun className="text-yellow-400" />
        Light
      </button>

      <button
        className={`w-72 h-13 flex items-center gap-2 px-4 py-2 text-sm rounded-md font-medium transition duration-300 ${
          selectedTheme === "dark"
            ? "bg-gray-900 text-white border border-white"
            : "bg-gray-800 text-white hover:bg-gray-900"
        }`}
        onClick={() => handleThemeChange("dark")}
        aria-label="Switch to dark theme"
      >
        <FaMoon className="text-blue-300" />
        Dark
      </button>

      <button
        className={`w-72 h-13 flex items-center gap-2 px-4 py-2 text-sm rounded-md font-medium transition duration-300 ${
          selectedTheme === "neon"
            ? "bg-[#0f0f1b] text-[#39ff14] border border-[#39ff14] shadow-[0_0_10px_#39ff14]"
            : "bg-black text-[#39ff14] hover:bg-[#0f0f1b]"
        }`}
        onClick={() => handleThemeChange("neon")}
        aria-label="Switch to neon theme"
      >
        <FaBolt className="text-[#39ff14]" />
        Neon
      </button>
    </div>
  );
};

export default ThemeMenu;
