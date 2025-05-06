// import React from 'react';
// import { FiMapPin } from 'react-icons/fi';

// const Livelocation = ({ onDetectLocation }) => {
//   const handleLocationClick = () => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const lat = position.coords.latitude;
//           const lon = position.coords.longitude;
//           onDetectLocation(lat, lon);
//         },
//         (error) => {
//           console.error("Error getting location:", error);
//           alert("Location access denied or unavailable.");
//         }
//       );
//     } else {
//       alert("Geolocation is not supported by your browser.");
//     }
//   };

//   return (
//     <div className="flex justify-end ">
//       <button
//         onClick={handleLocationClick}
//         className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r text-white font-medium rounded-full shadow-lg transition duration-300"
//       >
//         <FiMapPin className="text-xl" />
//         Use My Location
//       </button>
//     </div>
//   );
// };

// export default Livelocation;
import React from 'react';
import { FiMapPin } from 'react-icons/fi';

const Livelocation = ({ onDetectLocation }) => {
  const handleLocationClick = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          onDetectLocation(lat, lon);
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Location access denied or unavailable.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mt-4 flex justify-center sm:justify-end">
      <button
        onClick={handleLocationClick}
        className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-r text-white text-sm sm:text-base font-semibold rounded-full shadow-md hover:shadow-lg transition duration-300"
      >
        <FiMapPin className="text-lg sm:text-xl" />
        Use My Location
      </button>
    </div>
  );
};

export default Livelocation;