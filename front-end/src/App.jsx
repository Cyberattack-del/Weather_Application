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
        notifications={notifications}          // Added this line
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

// import React, { useState } from "react";
// import { BrowserRouter } from "react-router-dom";
// import AllRoutes from "./routes/AllRoutes";

// const App = () => {
//   const [selectedTheme, setSelectedTheme] = useState("light");
//   const [weather, setWeather] = useState(null);
//   const [userSearched, setUserSearched] = useState(false);
//   const [weatherCondition, setWeatherCondition] = useState("");
//   const [notifications, setNotification] = useState([]);

//   return (
//     <BrowserRouter>
//     <AllRoutes
//      selectedTheme={selectedTheme}
//      setSelectedTheme={setSelectedTheme}
//      setNotification={setNotification}
//      notifications={notifications}
//      setWeather={setWeather}
//      setUserSearched={setUserSearched}
//      weather={weather}
//      userSearched={userSearched}
//      weatherCondition={weatherCondition}
//     />


//     </BrowserRouter>
//   );
// };

// export default App;

//       {/* <AllRoutes
//         selectedTheme={selectedTheme}
//         setSelectedTheme={setSelectedTheme}
//         setNotification={setNotification}
//         setWeather={setWeather}
//         setUserSearched={setUserSearched}
//         weather={weather}
//         userSearched={userSearched}
//         weatherCondition={weatherCondition}
//       /> */}

// // import { Routes, Route } from "react-router-dom";
// // import MainLayout from "./components/MainLayout";

// // // Inside return()
// // <Routes>
// //   <Route path="/" element={<MainLayout selectedTheme={selectedTheme} />}>
// //     <Route index element={
// //       <WeatherDashboard
// //         selectedTheme={selectedTheme}
// //         setNotification={setNotification}
// //         setWeather={(data) => {
// //           setWeather(data);
// //           setUserSearched(true);
// //         }}
// //       />
// //     } />
// //     <Route path="notifications" element={<NotificationMenu notifications={notifications} />} />
// //     <Route path="general" element={
// //       userSearched && weather ? <GeneralUser condition={weatherCondition} /> : <Navigate to="/" />
// //     } />
// //     <Route path="agri" element={
// //       userSearched && weather ? <AgriculturalUsers condition={weatherCondition} /> : <Navigate to="/" />
// //     } />
// //     <Route path="outdoor" element={
// //       userSearched && weather ? <OutdoorEnthusiasts condition={weatherCondition} /> : <Navigate to="/" />
// //     } />
// //     <Route path="travel" element={
// //       userSearched && weather ? <TravelsandCommuters condition={weatherCondition} /> : <Navigate to="/" />
// //     } />
// //     <Route path="history" element={<HistoryPageMenu />} />
// //     <Route path="settings" element={<SettingsMenu />} />
// //     <Route path="themes" element={<ThemeMenu setSelectedTheme={setSelectedTheme} />} />
// //   </Route>
// // </Routes>

// // import React, { useState, useEffect } from "react";
// // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // import WeatherDashboard from "./components/WeatherDashboard";
// // import HamburgerMenu from "./components/HamburgerMenu";
// // import NotificationMenu from "./components/NotificationMenu";
// // import HistoryPageMenu from "./components/HistoryPageMenu";
// // import SettingsMenu from "./components/SettingsMenu";
// // import ThemeMenu from "./components/ThemeMenu";
// // import GeneralUser from "./context/GeneralUser";
// // import AgriculturalUsers from "./context/AgriculturalUsers";
// // import OutdoorEnthusiasts from "./context/OutdoorEnthusiasts";
// // import TravelsandCommuters from "./context/TravelsandCommuters";

// // import { notifications } from "./data/notifications";
// // import "./styles/index.css";

// // const App = () => {
// //   const [selectedTheme, setSelectedTheme] = useState("light");
// //   const [notification, setNotification] = useState("");
// //   const [weather, setWeather] = useState(null);
// //   const [notificationVisible,setNotificationVisible] = useState(true);
// //   const [userSearched, setUserSearched] = useState(false); // Track search trigger

// //   useEffect(() => {
// //     document.body.className = selectedTheme;
// //   }, [selectedTheme]);
// //   const weatherCondition = weather?.weather?.[0]?.main?.toLowerCase();

// //   return (
// //     <Router>


// //       <Routes>
// //         <Route
// //           path="/"
// //           element={
// //             <WeatherDashboard
// //               selectedTheme={selectedTheme}
// //               setNotification={setNotification}
// //               setWeather={(data) => {
// //                 setWeather(data);
// //                 setUserSearched(true); // Set search flag true only when user searches
// //               }}
// //             />
// //           }
// //         />

// //         <Route
// //           path="/notifications"
// //           element={<NotificationMenu notifications={notifications} />}
// //         />

// //         <Route
// //           path="/general"
// //           element={
// //             userSearched && weather ? (
// //               <GeneralUser condition={weatherCondition} />
// //             ) : (
// //               <Navigate to="/" />
// //             )
// //           }
// //         />
// //         {/* <Route path="/general" </GeneralUser/></Router> */}

// //         <Route
// //           path="/agri"
// //           element={
// //             userSearched && weather ? (
// //               <AgriculturalUsers condition={weatherCondition} />
// //             ) : (
// //               <Navigate to="/" />
// //             )
// //           }
// //         />

// //         <Route
// //           path="/outdoor"
// //           element={
// //             userSearched && weather ? (
// //               <OutdoorEnthusiasts condition={weatherCondition} />
// //             ) : (
// //               <Navigate to="/" />
// //             )
// //           }
// //         />

// //         <Route
// //           path="/travel"
// //           element={
// //             userSearched && weather ? (
// //               <TravelsandCommuters condition={weatherCondition} />
// //             ) : (
// //               <Navigate to="/" />
// //             )
// //           }
// //         />

// //         <Route path="/history" element={<HistoryPageMenu />} />
// //         <Route path="/settings" element={<SettingsMenu />} />
// //         <Route path="/themes" element={<ThemeMenu setSelectedTheme={setSelectedTheme} />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;

// {/* <HamburgerMenu weather={weather} notificationMessage={notification}
// notificationVisible={notificationVisible}
// setNotificationVisible={setNotificationVisible} /> */}


// // import React, { useState, useEffect } from "react";
// // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // import WeatherDashboard from "./components/WeatherDashboard";
// // import HamburgerMenu from "./components/HamburgerMenu";
// // import NotificationMenu from "./components/NotificationMenu";
// // import HistoryPageMenu from "./components/HistoryPageMenu";
// // import SettingsMenu from "./components/SettingsMenu";
// // import ThemeMenu from "./components/ThemeMenu";
// // import GeneralUser from "./context/GeneralUser";
// // import AgriculturalUsers from "./context/AgriculturalUsers";
// // import OutdoorEnthusiasts from "./context/OutdoorEnthusiasts";
// // import TravelsandCommuters from "./context/TravelsandCommuters";

// // import { notifications } from "./data/notifications";
// // import "./styles/index.css";

// // const App = () => {
// //   const [selectedTheme, setSelectedTheme] = useState("light");
// //   const [notification, setNotification] = useState("");
// //   const [weather, setWeather] = useState(() => {
// //     const saved = localStorage.getItem("weather");
// //     return saved ? JSON.parse(saved) : null;
// //   });
// //   const [notificationVisible, setNotificationVisible] = useState(true);
// //   const [userSearched, setUserSearched] = useState(() => {
// //     return localStorage.getItem("userSearched") === "true";
// //   });

// //   useEffect(() => {
// //     document.body.className = selectedTheme;
// //   }, [selectedTheme]);

// //   // Save weather & search state to localStorage
// //   useEffect(() => {
// //     if (weather) {
// //       localStorage.setItem("weather", JSON.stringify(weather));
// //       localStorage.setItem("userSearched", "true");
// //     }
// //   }, [weather]);

// //   const weatherCondition = weather?.weather?.[0]?.main?.toLowerCase();

// //   return (
// //     <Router>
// //       <HamburgerMenu
// //         weather={weather}
// //         notificationMessage={notification}
// //         notificationVisible={notificationVisible}
// //         setNotificationVisible={setNotificationVisible}
// //       />

// //       <Routes>
// //         <Route
// //           path="/"
// //           element={
// //             <WeatherDashboard
// //               selectedTheme={selectedTheme}
// //               setNotification={setNotification}
// //               setWeather={(data) => {
// //                 setWeather(data);
// //                 setUserSearched(true);
// //               }}
// //             />
// //           }
// //         />

// //         <Route
// //           path="/notifications"
// //           element={<NotificationMenu notifications={notifications} />}
// //         />

// //         <Route
// //           path="/general"
// //           element={
// //             userSearched && weather ? (
// //               <GeneralUser condition={weatherCondition} />
// //             ) : (
// //               <Navigate to="/" />
// //             )
// //           }
// //         />

// //         <Route
// //           path="/agri"
// //           element={
// //             userSearched && weather ? (
// //               <AgriculturalUsers condition={weatherCondition} />
// //             ) : (
// //               <Navigate to="/" />
// //             )
// //           }
// //         />

// //         <Route
// //           path="/outdoor"
// //           element={
// //             userSearched && weather ? (
// //               <OutdoorEnthusiasts condition={weatherCondition} />
// //             ) : (
// //               <Navigate to="/" />
// //             )
// //           }
// //         />

// //         <Route
// //           path="/travel"
// //           element={
// //             userSearched && weather ? (
// //               <TravelsandCommuters condition={weatherCondition} />
// //             ) : (
// //               <Navigate to="/" />
// //             )
// //           }
// //         />

// //         <Route path="/history" element={<HistoryPageMenu />} />
// //         <Route path="/settings" element={<SettingsMenu />} />
// //         <Route path="/themes" element={<ThemeMenu setSelectedTheme={setSelectedTheme} />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;