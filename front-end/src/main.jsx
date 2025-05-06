// // // import { StrictMode } from 'react'
// // // import { createRoot } from 'react-dom/client'

// // // import App from './App.jsx'

// // // createRoot(document.getElementById('root')).render(
// // //   <StrictMode>
// // //     <App />
// // //   </StrictMode>,
// // // )
// // import { StrictMode } from 'react';
// // import { createRoot } from 'react-dom/client';
// // import App from './App.jsx';
// // import './index.css'
// // import { SettingsProvider } from './context/SettingsContext'; // make sure this path is correct

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     {/* <SettingsProvider>
      
// //     </SettingsProvider> */}
// //     <SettingsProvider>
// //     <App />
// //     </SettingsProvider>
// //   </StrictMode>
// // );

// // src/main.jsx
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
// import './styles/index.css';
// import { SettingsProvider } from './context/SettingsContext';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <SettingsProvider>
//       <App />
//     </SettingsProvider>
//   </StrictMode>
// );

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { SettingsProvider } from "./context/SettingsContext";
// import './index.css'
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <SettingsProvider>
//       <App />
//     </SettingsProvider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SettingsProvider } from "./context/SettingsContext";
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SettingsProvider>
            <App />
    </SettingsProvider>
  </React.StrictMode>
);