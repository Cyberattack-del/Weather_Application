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
  if (hour < 12) return "Good morning, Sportsman!";
  if (hour < 18) return "Good afternoon, Explorer!";
  return "Good evening, Outdoor Enthusiast!";
};

// Motivational line based on weather
const getMotivationalLine = (condition) => {
  switch (condition) {
    case 'clear': return "Perfect day to get outside and move!";
    case 'rain': return "Rain or shine, you’ve got this!";
    case 'thunderstorm': return "Stay safe now, and plan your next adventure!";
    case 'clouds': return "Clouds can’t slow your stride!";
    case 'mist': return "Caution is key — adventure wisely!";
    default: return 'Overcast but dry — great for running, brisk walking, or casual biking.  info 6:45';
  }
};

const OutdoorEnthusiasts = ({ condition }) => {
  const outdoor = {
    clear: [
      {
        text: 'Ideal conditions for an early morning hike — clear skies and mild temperatures!',
        severity: 'info',
        time: '7:00 AM',
      },
      {
        text: 'Sun’s intensity is rising. Stay hydrated, wear sunscreen, and avoid direct sun between 11 AM and 3 PM.',
        severity: 'warning',
        time: '11:00 AM',
      },
    ],
    rain: [
      {
        text: 'Steady rain expected. Trail surfaces will be slippery — best to delay outdoor activities.',
        severity: 'warning',
        time: '8:00 AM',
      },
    ],
    thunderstorm: [
      {
        text: 'Severe weather alert: Lightning activity detected. Seek shelter immediately if outdoors.',
        severity: 'critical',
        time: '9:30 AM',
      },
    ],
    clouds: [
      {
        text: 'Overcast but dry — great for running, brisk walking, or casual biking.',
        severity: 'info',
        time: '6:45 AM',
      },
    ],
    mist: [
      {
        text: 'Thick morning mist is reducing visibility. Postpone cycling or trail running until it clears.',
        severity: 'warning',
        time: '7:30 AM',
      },
    ],
  };

  const notes = outdoor[condition] || [];

  return (
    <div className="p-6 max-w-xl w-full mx-auto bg-white rounded-xl shadow-lg">
  {/* Greeting Section */}
  <div className="mb-5 space-y-1">
    <h1 className="text-2xl font-bold text-gray-800 w-full">{getGreeting()}</h1>
    <p className="text-md text-gray-600">{getMotivationalLine(condition)}</p>
  </div>

  {/* Weather Icon and Condition */}
  <div className="flex items-center gap-3 mb-4">
    <div className="text-2xl">{iconMap[condition]}</div>
    <h2 className="text-xl font-semibold capitalize">{condition} Conditions</h2>
  </div>

  {/* Weather Notes */}
  {notes.length === 0 ? (
    <div className="text-gray-500 italic">No recommendations for this condition.</div>
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
        <div className="mt-1 text-lg">{severityIcon[note.severity]}</div>
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

export default OutdoorEnthusiasts;
