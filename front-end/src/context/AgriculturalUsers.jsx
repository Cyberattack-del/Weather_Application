import React from 'react';
import {
  WiDaySunny,
  WiRain,
  WiThunderstorm,
  WiCloudy,
  WiFog,
} from 'react-icons/wi';
import {
  FaInfoCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from 'react-icons/fa';

// Icon map for weather types
const weatherIcons = {
  clear: <WiDaySunny className="text-yellow-400 text-3xl" />,
  rain: <WiRain className="text-blue-500 text-3xl" />,
  thunderstorm: <WiThunderstorm className="text-purple-600 text-3xl" />,
  clouds: <WiCloudy className="text-gray-500 text-3xl" />,
  mist: <WiFog className="text-gray-400 text-3xl" />,
};

// Icon map for severity levels
const severityIcons = {
  info: <FaInfoCircle className="text-blue-500 text-lg mt-1" />,
  warning: <FaExclamationTriangle className="text-yellow-500 text-lg mt-1" />,
  critical: <FaTimesCircle className="text-red-600 text-lg mt-1" />,
};

// Get greeting based on current hour
const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning, Farmer!';
  if (hour < 18) return 'Good afternoon, Grower!';
  return 'Good evening, Agricultural Expert!';
};

// Motivational message based on weather
const getMotivation = (condition) => {
  switch (condition) {
    case 'clear':
      return 'Time to tend the land and watch your crops thrive!';
    case 'rain':
      return 'Rain nourishes, but preparation prevents loss!';
    case 'thunderstorm':
      return 'Safety is key — secure your fields and tools!';
    case 'clouds':
      return 'Perfect day for planning and light fieldwork.';
    case 'mist':
      return 'Slow down and stay sharp — conditions may be tricky.';
    default:
      return 'Make the most of your day on the farm!';
  }
};

// Main component
const AgriculturalUsers = ({ condition }) => {
  const agriculture = {
    clear: [
      { text: 'Clear skies: Ideal for fieldwork and irrigation.', severity: 'info', time: '6:00 AM' },
      { text: 'Good day to apply fertilizers and pesticides.', severity: 'info', time: '8:00 AM' },
    ],
    rain: [
      { text: 'Heavy rain forecast: Secure your crops and equipment.', severity: 'critical', time: '7:00 AM' },
      { text: 'Avoid pesticide spraying today.', severity: 'warning', time: '9:00 AM' },
    ],
    thunderstorm: [
      { text: 'Severe storm alert: Shelter animals and secure equipment.', severity: 'critical', time: '10:00 AM' },
    ],
    clouds: [
      { text: 'Cloudy skies: No irrigation needed today.', severity: 'info', time: '6:30 AM' },
    ],
    mist: [
      { text: 'Mist expected: Delays in harvesting possible.', severity: 'warning', time: '7:15 AM' },
    ],
  };

  const suggestions = agriculture[condition] || [];

  // Map severity to Tailwind classes
  const getSeverityClass = (severity) => {
    switch (severity) {
      case 'info':
        return 'bg-blue-50 border-blue-400 text-blue-700';
      case 'warning':
        return 'bg-yellow-50 border-yellow-500 text-yellow-800';
      case 'critical':
        return 'bg-red-50 border-red-500 text-red-800';
      default:
        return 'bg-gray-100 border-gray-400 text-gray-700';
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg">
      {/* Greeting */}
      <div className="mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{getGreeting()}</h1>
        <p className="text-sm sm:text-base text-gray-600">{getMotivation(condition)}</p>
      </div>

      {/* Weather Header */}
      <div className="flex items-center gap-3 mb-5">
        {weatherIcons[condition]}
        <h2 className="text-xl sm:text-2xl font-semibold capitalize text-gray-700">
          {condition || 'Unknown'} Weather Conditions
        </h2>
      </div>

      {/* Suggestions */}
      {suggestions.length > 0 ? (
        suggestions.map((note, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 p-4 mb-3 border-l-4 rounded-md shadow-sm ${getSeverityClass(
              note.severity
            )}`}
          >
            {severityIcons[note.severity]}
            <div>
              <p className="text-sm sm:text-base">
                <strong>{note.time}:</strong> {note.text}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="p-4 border-l-4 border-gray-300 bg-gray-50 text-gray-600 rounded">
          No agricultural suggestions available for this weather condition.
        </div>
      )}
    </div>
  );
};

export default AgriculturalUsers;

// import React from 'react';
// import {
//   WiDaySunny,
//   WiRain,
//   WiThunderstorm,
//   WiCloudy,
//   WiFog,
// } from 'react-icons/wi';
// import {
//   FaInfoCircle,
//   FaExclamationTriangle,
//   FaTimesCircle,
// } from 'react-icons/fa';

// // Icon map for weather types
// const weatherIcons = {
//   clear: <WiDaySunny className="text-yellow-400 text-3xl" />,
//   rain: <WiRain className="text-blue-500 text-3xl" />,
//   thunderstorm: <WiThunderstorm className="text-purple-600 text-3xl" />,
//   clouds: <WiCloudy className="text-gray-500 text-3xl" />,
//   mist: <WiFog className="text-gray-400 text-3xl" />,
// };

// // Icon map for severity levels
// const severityIcons = {
//   info: <FaInfoCircle className="text-blue-500 text-lg mt-1" />,
//   warning: <FaExclamationTriangle className="text-yellow-500 text-lg mt-1" />,
//   critical: <FaTimesCircle className="text-red-600 text-lg mt-1" />,
// };

// // Get greeting based on current hour
// const getGreeting = () => {
//   const hour = new Date().getHours();
//   if (hour < 12) return 'Good morning, Farmer!';
//   if (hour < 18) return 'Good afternoon, Grower!';
//   return 'Good evening, Agricultural Expert!';
// };

// // Motivational message based on weather
// const getMotivation = (condition) => {
//   switch (condition) {
//     case 'clear':
//       return 'Time to tend the land and watch your crops thrive!';
//     case 'rain':
//       return 'Rain nourishes, but preparation prevents loss!';
//     case 'thunderstorm':
//       return 'Safety is key — secure your fields and tools!';
//     case 'clouds':
//       return 'Perfect day for planning and light fieldwork.';
//     case 'mist':
//       return 'Slow down and stay sharp — conditions may be tricky.';
//     default:
//       return 'Make the most of your day on the farm!';
//   }
// };

// // Main component
// const AgriculturalUsers = ({ condition }) => {
//   const agriculture = {
//     clear: [
//       { text: 'Clear skies: Ideal for fieldwork and irrigation.', severity: 'info', time: '6:00 AM' },
//       { text: 'Good day to apply fertilizers and pesticides.', severity: 'info', time: '8:00 AM' },
//     ],
//     rain: [
//       { text: 'Heavy rain forecast: Secure your crops and equipment.', severity: 'critical', time: '7:00 AM' },
//       { text: 'Avoid pesticide spraying today.', severity: 'warning', time: '9:00 AM' },
//     ],
//     thunderstorm: [
//       { text: 'Severe storm alert: Shelter animals and secure equipment.', severity: 'critical', time: '10:00 AM' },
//     ],
//     clouds: [
//       { text: 'Cloudy skies: No irrigation needed today.', severity: 'info', time: '6:30 AM' },
//     ],
//     mist: [
//       { text: 'Mist expected: Delays in harvesting possible.', severity: 'warning', time: '7:15 AM' },
//     ],
//   };

//   const suggestions = agriculture[condition] || [];

//   // Map severity to Tailwind classes
//   const getSeverityClass = (severity) => {
//     switch (severity) {
//       case 'info':
//         return 'bg-blue-50 border-blue-400 text-blue-700';
//       case 'warning':
//         return 'bg-yellow-50 border-yellow-500 text-yellow-800';
//       case 'critical':
//         return 'bg-red-50 border-red-500 text-red-800';
//       default:
//         return 'bg-gray-100 border-gray-400 text-gray-700';
//     }
//   };

//   return (
//     <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg">
//       {/* Greeting */}
//       <div className="mb-4">
//         <h1 className="text-2xl font-bold text-gray-800">{getGreeting()}</h1>
//         <p className="text-sm text-gray-600">{getMotivation(condition)}</p>
//       </div>

//       {/* Weather Header */}
//       <div className="flex items-center gap-3 mb-5">
//         {weatherIcons[condition]}
//         <h2 className="text-xl font-semibold capitalize text-gray-700">
//           {condition || 'Unknown'} Weather Conditions
//         </h2>
//       </div>

//       {/* Suggestions */}
//       {suggestions.length > 0 ? (
//         suggestions.map((note, index) => (
//           <div
//             key={index}
//             className={`flex items-start gap-3 p-4 mb-3 border-l-4 rounded-md shadow-sm ${getSeverityClass(
//               note.severity
//             )}`}
//           >
//             {severityIcons[note.severity]}
//             <div>
//               <p className="text-sm">
//                 <strong>{note.time}:</strong> {note.text}
//               </p>
//             </div>
//           </div>
//         ))
//       ) : (
//         <div className="p-4 border-l-4 border-gray-300 bg-gray-50 text-gray-600 rounded">
//           No agricultural suggestions available for this weather condition.
//         </div>
//       )}
//     </div>
//   );
// };

// export default AgriculturalUsers;

// import React from 'react'

// const AgriculturalUsers = ({ condition }) => {
//   console.log("received", condition);
//   const agriculture = {
//     clear: [
//       { text: "Clear skies: Ideal for fieldwork and irrigation.", severity: "info", time: "6:00 AM" },
//       { text: "Good day to apply fertilizers and pesticides.", severity: "info", time: "8:00 AM" },
//     ],
//     rain: [
//       { text: "Heavy rain forecast: Secure your crops and equipment.", severity: "critical", time: "7:00 AM" },
//       { text: "Avoid pesticide spraying today.", severity: "warning", time: "9:00 AM" },
//     ],
//     thunderstorm: [
//       { text: "Severe storm alert: Shelter animals and secure equipment.", severity: "critical", time: "10:00 AM" },
//     ],
//     clouds: [
//       { text: "Cloudy skies: No irrigation needed today.", severity: "info", time: "6:30 AM" },
//     ],
//     mist: [
//       { text: "Mist expected: Delays in harvesting possible.", severity: "warning", time: "7:15 AM" },
//     ]
//   };

//   const suggestions = agriculture[condition];

//   return (
//     <div>
//       {suggestions && suggestions.length > 0 ? (
//         suggestions.map((note, index) => (
//           <div key={`index} className={notification ${note.severity}`}>
//             <strong>{note.time}:</strong> {note.text}
//           </div>
//         ))
//       ) : (
//         <div className="notification info">No agricultural suggestions available for this weather condition.</div>
//       )}
//     </div>
//   );
// }

// export default AgriculturalUsers;

// import React from 'react';
// import {
//   WiDaySunny,
//   WiRain,
//   WiThunderstorm,
//   WiCloudy,
//   WiFog,
// } from 'react-icons/wi';
// import {
//   FaInfoCircle,
//   FaExclamationTriangle,
//   FaTimesCircle,
// } from 'react-icons/fa';

// // Icon map for weather types
// const weatherIcons = {
//   clear: <WiDaySunny className="text-yellow-400 text-3xl" />,
//   rain: <WiRain className="text-blue-500 text-3xl" />,
//   thunderstorm: <WiThunderstorm className="text-purple-600 text-3xl" />,
//   clouds: <WiCloudy className="text-gray-500 text-3xl" />,
//   mist: <WiFog className="text-gray-400 text-3xl" />,
// };

// // Icon map for severity levels
// const severityIcons = {
//   info: <FaInfoCircle className="text-blue-500 text-lg mt-1" />,
//   warning: <FaExclamationTriangle className="text-yellow-500 text-lg mt-1" />,
//   critical: <FaTimesCircle className="text-red-600 text-lg mt-1" />,
// };

// // Get greeting based on current hour
// const getGreeting = () => {
//   const hour = new Date().getHours();
//   if (hour < 12) return 'Good morning, Farmer!';
//   if (hour < 18) return 'Good afternoon, Grower!';
//   return 'Good evening, Agricultural Expert!';
// };

// // Motivational message based on weather
// const getMotivation = (condition) => {
//   switch (condition) {
//     case 'clear':
//       return 'Time to tend the land and watch your crops thrive!';
//     case 'rain':
//       return 'Rain nourishes, but preparation prevents loss!';
//     case 'thunderstorm':
//       return 'Safety is key — secure your fields and tools!';
//     case 'clouds':
//       return 'Perfect day for planning and light fieldwork.';
//     case 'mist':
//       return 'Slow down and stay sharp — conditions may be tricky.';
//     default:
//       return 'Make the most of your day on the farm!';
//   }
// };

// // Main component
// const AgriculturalUsers = ({ condition }) => {
//   const agriculture = {
//     clear: [
//       { text: 'Clear skies: Ideal for fieldwork and irrigation.', severity: 'info', time: '6:00 AM' },
//       { text: 'Good day to apply fertilizers and pesticides.', severity: 'info', time: '8:00 AM' },
//     ],
//     rain: [
//       { text: 'Heavy rain forecast: Secure your crops and equipment.', severity: 'critical', time: '7:00 AM' },
//       { text: 'Avoid pesticide spraying today.', severity: 'warning', time: '9:00 AM' },
//     ],
//     thunderstorm: [
//       { text: 'Severe storm alert: Shelter animals and secure equipment.', severity: 'critical', time: '10:00 AM' },
//     ],
//     clouds: [
//       { text: 'Cloudy skies: No irrigation needed today.', severity: 'info', time: '6:30 AM' },
//     ],
//     mist: [
//       { text: 'Mist expected: Delays in harvesting possible.', severity: 'warning', time: '7:15 AM' },
//     ],
//   };

//   const suggestions = agriculture[condition] || [];

//   // Map severity to Tailwind classes
//   const getSeverityClass = (severity) => {
//     switch (severity) {
//       case 'info':
//         return 'bg-blue-50 border-blue-400 text-blue-700';
//       case 'warning':
//         return 'bg-yellow-50 border-yellow-500 text-yellow-800';
//       case 'critical':
//         return 'bg-red-50 border-red-500 text-red-800';
//       default:
//         return 'bg-gray-100 border-gray-400 text-gray-700';
//     }
//   };

//   return (
//     <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg">
//       {/* Greeting */}
//       <div className="mb-4">
//         <h1 className="text-2xl font-bold text-gray-800">{getGreeting()}</h1>
//         <p className="text-sm text-gray-600">{getMotivation(condition)}</p>
//       </div>

//       {/* Weather Header */}
//       <div className="flex items-center gap-3 mb-5">
//         {weatherIcons[condition]}
//         <h2 className="text-xl font-semibold capitalize text-gray-700">
//           {condition || 'Unknown'} Weather Conditions
//         </h2>
//       </div>

//       {/* Suggestions */}
//       {suggestions.length > 0 ? (
//         suggestions.map((note, index) => (
//           <div
//             key={index}
//             className={`flex items-start gap-3 p-4 mb-3 border-l-4 rounded-md shadow-sm ${getSeverityClass(
//               note.severity
//             )}`}
//           >
//             {severityIcons[note.severity]}
//             <div>
//               <p className="text-sm">
//                 <strong>{note.time}:</strong> {note.text}
//               </p>
//             </div>
//           </div>
//         ))
//       ) : (
//         <div className="p-4 border-l-4 border-gray-300 bg-gray-50 text-gray-600 rounded">
//           No agricultural suggestions available for this weather condition.
//         </div>
//       )}
//     </div>
//   );
// };

// export default AgriculturalUsers;
