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

      {/* top-6 p-10 gap-20 mt-4 ml-4 */}
      {/* Back Button */}
      {/* <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 px-4 py-2 text-sm rounded-md font-medium bg-gray-700 text-white hover:bg-gray-600 transition"
        aria-label="Go back to home"
      >
        <FaArrowLeft />
        Back to Home
      </button> */}

      {/* Theme Buttons */}
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
// import React, { useState, useEffect } from "react";
// import { FaSun, FaMoon, FaBolt } from "react-icons/fa";

// const ThemeMenu = () => {
//   const [selectedTheme, setSelectedTheme] = useState("light");

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "light";
//     setSelectedTheme(savedTheme);
//   }, []);

//   useEffect(() => {
//     document.body.classList.remove("light", "dark", "neon");
//     document.body.classList.add(selectedTheme);
//     localStorage.setItem("theme", selectedTheme);
//   }, [selectedTheme]);

//   const handleThemeChange = (theme) => {
//     setSelectedTheme(theme);
//   };

//   const getButtonClasses = (theme) => {
//     const base =
//       "flex items-center gap-3 justify-center py-3 px-5 rounded-xl transition duration-300 font-semibold text-sm shadow-md hover:scale-105 focus:outline-none";
//     const isActive = selectedTheme === theme;

//     switch (theme) {
//       case "light":
//         return isActive
//           ? `${base} bg-white text-black border border-gray-400`
//           : `${base} bg-gray-100 text-black hover:bg-white`;
//       case "dark":
//         return isActive
//           ? `${base} bg-gray-900 text-white border border-white`
//           : `${base} bg-gray-800 text-white hover:bg-gray-900`;
//       case "neon":
//         return isActive
//           ? `${base} bg-[#0f0f1b] text-[#39ff14] border border-[#39ff14] shadow-[0_0_10px_#39ff14]`
//           : `${base} bg-black text-[#39ff14] hover:bg-[#0f0f1b]`;
//       default:
//         return base;
//     }
//   };

//   return (

//     <div className="flex flex-col items-start  gap-10 px-4 py-6">
//   <h2 className="text-xl font-semibold  text-white mb-4"></h2>
//   <button>
//     back 
//   </button>
//   <button
//     className="w-70 h-13 flex items-center gap-2 px-4 py-2 text-sm rounded-md font-medium transition duration-300 bg-gray-100 text-black hover:bg-white"
//     onClick={() => handleThemeChange("light")}
//     aria-label="Switch to light theme"
//   >
//     <FaSun className="text-yellow-400" />
//     Light
//   </button>

//   <button
//     className="w-70 h-13 flex items-center gap-2 px-4 py-2 text-sm rounded-md font-medium transition duration-300 bg-gray-800 text-white hover:bg-gray-900"
//     onClick={() => handleThemeChange("dark")}
//     aria-label="Switch to dark theme"
//   >
//     <FaMoon className="text-blue-300" />
//     Dark
//   </button>

//   <button
//     className="w-70 h-13 flex items-center gap-2 px-4 py-2 text-sm rounded-md font-medium transition duration-300 bg-black text-[#39ff14] hover:bg-[#0f0f1b] shadow-[0_0_6px_#39ff14]"
//     onClick={() => handleThemeChange("neon")}
//     aria-label="Switch to neon theme"
//   >
//     <FaBolt className="text-[#39ff14]" />
//     Neon
//   </button>
// </div>

//   );
// };

// export default ThemeMenu;


// import React, { useState, useEffect } from "react";
// import { FaSun, FaMoon, FaBolt } from "react-icons/fa";

// const ThemeMenu = () => {
//   const [selectedTheme, setSelectedTheme] = useState("light");

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "light";
//     setSelectedTheme(savedTheme);
//   }, []);

//   useEffect(() => {
//     document.body.classList.remove("light", "dark", "neon");
//     document.body.classList.add(selectedTheme);
//     localStorage.setItem("theme", selectedTheme);
//   }, [selectedTheme]);

//   const handleThemeChange = (theme) => {
//     setSelectedTheme(theme);
//   };

//   const getButtonClasses = (theme) => {
//     const base =
//       "flex items-center gap-3 justify-center py-3 px-5 rounded-xl transition duration-300 font-semibold text-sm shadow-md hover:scale-105 focus:outline-none";
//     const isActive = selectedTheme === theme;

//     switch (theme) {
//       case "light":
//         return isActive
//           ? `${base} bg-white text-black border border-gray-400`
//           : `${base} bg-gray-100 text-black hover:bg-white`;
//       case "dark":
//         return isActive
//           ? `${base} bg-gray-900 text-white border border-white`
//           : `${base} bg-gray-800 text-white hover:bg-gray-900`;
//       case "neon":
//         return isActive
//           ? `${base} bg-[#0f0f1b] text-[#39ff14] border border-[#39ff14] shadow-[0_0_10px_#39ff14]`
//           : `${base} bg-black text-[#39ff14] hover:bg-[#0f0f1b]`;
//       default:
//         return base;
//     }
//   };

//   return (

//     <div className="flex flex-col items-start gap-10 px-4 py-6">
//   <h2 className="text-xl font-semibold text-white mb-4"></h2>

//   <button
//     className="w-70 h-13 flex items-center gap-2 px-4 py-2 text-sm rounded-md font-medium transition duration-300 bg-gray-100 text-black hover:bg-white"
//     onClick={() => handleThemeChange("light")}
//     aria-label="Switch to light theme"
//   >
//     <FaSun className="text-yellow-400" />
//     Light
//   </button>

//   <button
//     className="w-70 h-13 flex items-center gap-2 px-4 py-2 text-sm rounded-md font-medium transition duration-300 bg-gray-800 text-white hover:bg-gray-900"
//     onClick={() => handleThemeChange("dark")}
//     aria-label="Switch to dark theme"
//   >
//     <FaMoon className="text-blue-300" />
//     Dark
//   </button>

//   <button
//     className="w-70 h-13 flex items-center gap-2 px-4 py-2 text-sm rounded-md font-medium transition duration-300 bg-black text-[#39ff14] hover:bg-[#0f0f1b] shadow-[0_0_6px_#39ff14]"
//     onClick={() => handleThemeChange("neon")}
//     aria-label="Switch to neon theme"
//   >
//     <FaBolt className="text-[#39ff14]" />
//     Neon
//   </button>
// </div>

//   );
// };

// export default ThemeMenu;