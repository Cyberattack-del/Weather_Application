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
  clear: <WiDaySunny className="text-yellow-400 text-4xl" />,
  rain: <WiRain className="text-blue-500 text-4xl" />,
  thunderstorm: <WiThunderstorm className="text-purple-600 text-4xl" />,
  clouds: <WiCloudy className="text-gray-500 text-4xl" />,
  mist: <WiFog className="text-gray-400 text-4xl" />,
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
  if (hour < 12) return "Good morning, Traveler!";
  if (hour < 18) return "Good afternoon, Explorer!";
  return "Good evening, Adventurer!";
};

// Travel notes using switch-case
const getTravelNotes = (condition) => {
  switch (condition) {
    case 'clear':
      return [
        { text: 'Clear roads and good visibility for travel.', severity: 'info', time: '6:00 AM' },
      ];
    case 'rain':
      return [
        { text: 'Expect delays: Roads may be slick.', severity: 'warning', time: '7:30 AM' },
        { text: 'Public transport might experience slowdowns.', severity: 'info', time: '8:00 AM' },
      ];
    case 'thunderstorm':
      return [
        { text: 'Severe weather: Delay non-essential travel.', severity: 'critical', time: '9:00 AM' },
      ];
    case 'clouds':
      return [
        { text: 'Mild weather: No major travel disruptions.', severity: 'info', time: '6:15 AM' },
      ];
    case 'mist':
      return [
        { text: 'Fog alert: Drive with headlights and caution.', severity: 'warning', time: '6:45 AM' },
      ];
    default:
      return [
        {
          text : 'Mild weather: No major travel disruptions. info 6:15 AM'
        }
      ];
  }
};

const TravelsandCommuters = ({ condition }) => {
  const notes = getTravelNotes(condition);

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-lg">
      {/* Greeting Section */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">{getGreeting()}</h1>
      </div>

      {/* Weather Icon and Condition */}
      <div className="flex items-center gap-2 mb-4">
        {iconMap[condition] || iconMap.clear}
        <h2 className="text-xl font-semibold capitalize">{condition || 'clear'} Conditions</h2>
      </div>

      {/* Travel Notifications */}
      {notes.length === 0 ? (
        <div className="text-gray-500 italic">No travel recommendations for this condition.</div>
      ) : (
        notes.map((note, index) => (
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

export default TravelsandCommuters;