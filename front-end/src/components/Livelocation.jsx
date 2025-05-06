import React, { useState } from 'react';
import { FiMapPin } from 'react-icons/fi';

const Livelocation = ({ onDetectLocation }) => {
  const [loading, setLoading] = useState(false);

  const handleLocationClick = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLoading(false);
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        onDetectLocation(lat, lon);
      },
      (error) => {
        setLoading(false);
        console.error('Error getting location:', error);
        alert(
          'Unable to retrieve your location. Please enable location access in your browser settings.'
        );
      }
    );
  };

  const confirmAndRequestLocation = () => {
    const userConfirmed = window.confirm(
      'Allow this app to access your location?'
    );
    if (userConfirmed) {
      handleLocationClick();
    }
  };

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mt-4 flex justify-center sm:justify-end">
      <button
        onClick={confirmAndRequestLocation}
        disabled={loading}
        aria-label="Use my current location"
        className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3  text-white text-sm sm:text-base font-semibold rounded-full shadow-md hover:shadow-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FiMapPin className="text-lg sm:text-xl" />
        {loading ? 'Detecting...' : 'Use My Location'}
      </button>
    </div>
  );
};

export default Livelocation;
