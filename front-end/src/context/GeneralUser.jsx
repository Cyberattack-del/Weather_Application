// import React from 'react';

// const GeneralUser = ({ condition }) => {
//   const notifications = {
//     clouds: [
//       { text: 'Cloudy sky: No rain expected today', severity: 'info', time: '9:00 AM' }
//     ],
//     rain: [
//       { text: 'Rain Alert: Carry umbrella', severity: 'warning', time: '8:45 AM' }
//     ],
//     clear: [
//       { text: 'Clear skies: Enjoy the sun', severity: 'info', time: '9:00 AM' }
//     ]
//   };

//   return (
//     <div>
//       {notifications[condition]?.map((note, index) => (
//         <div key={index} className={`notification ${note.severity}`}>
//           <strong>{note.time}:</strong> {note.text}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default GeneralUser;

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

// Map weather conditions to icons
const iconMap = {
  clear: <WiDaySunny className="text-yellow-400 text-3xl" />,
  rain: <WiRain className="text-blue-500 text-3xl" />,
  thunderstorm: <WiThunderstorm className="text-purple-600 text-3xl" />,
  clouds: <WiCloudy className="text-gray-500 text-3xl" />,
  mist: <WiFog className="text-gray-400 text-3xl" />,
};

// Map severity levels to icons
const severityIcon = {
  info: <FaInfoCircle className="text-blue-400" />,
  warning: <FaExclamationTriangle className="text-yellow-500" />,
  critical: <FaTimesCircle className="text-red-600" />,
};

// Time-based greeting
const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning, Explorer!";
  if (hour < 18) return "Good afternoon, Explorer!";
  return "Good evening, Explorer!";
};

// Motivational line based on weather
const getMotivationalLine = (condition) => {
  switch (condition) {
    case 'clear': return "Perfect day to get outside and move!";
    case 'rain': return "Rain or shine, you’ve got this!";
    case 'thunderstorm': return "Stay safe now, and plan your next adventure!";
    case 'clouds': return "Clouds can’t slow your stride!";
    case 'mist': return "Caution is key — adventure wisely!";
    default: return "Stay active, stay safe!";
  }
};

const GeneralUser = ({ condition }) => {
  const notifications = {
    clear: [
      { text: "Clear skies: Enjoy the sun!", severity: "info", time: "9:00 AM" },
    ],
    rain: [
      { text: "Rain Alert: Carry an umbrella.", severity: "warning", time: "8:45 AM" },
    ],
    thunderstorm: [
      { text: "Thunderstorm warning: Seek shelter immediately.", severity: "critical", time: "9:30 AM" },
    ],
    clouds: [
      { text: "Cloudy sky: No rain expected today.", severity: "info", time: "9:00 AM" },
    ],
    mist: [
      { text: "Mist expected: Be cautious while driving or walking.", severity: "warning", time: "7:30 AM" },
    ],
  };

  // Weather notes based on condition
  const weatherNotes = notifications[condition] || [];

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-lg">
      {/* Greeting Section */}
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-gray-800">{getGreeting()}</h1>
        <p className="text-md text-gray-600">{getMotivationalLine(condition)}</p>
      </div>

      {/* Weather Icon and Condition */}
      <div className="flex items-center gap-2 mb-4">
        {iconMap[condition]}
        <h2 className="text-xl font-semibold capitalize">{condition} Conditions</h2>
      </div>

      {/* Weather Notes */}
      {weatherNotes.length === 0 ? (
        <div className="text-gray-500 italic">No recommendations for this condition.</div>
      ) : (
        weatherNotes.map((note, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 p-3 mb-3 rounded-lg shadow-sm border-l-4 ${
              note.severity === 'info'
                ? 'border-blue-300 bg-blue-50'
                : note.severity === 'warning'
                ? 'border-yellow-400 bg-yellow-50'
                : 'border-red-500 bg-red-50'
            }`}
          >
            <div className="mt-1">{severityIcon[note.severity]}</div>
            <div>
              <p className="text-sm font-medium text-gray-700">
                <strong>{note.time}:</strong> {note.text}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default GeneralUser;
