import {
    FaUserFriends,
    FaCarSide,
    FaHiking,
    FaSeedling
  } from 'react-icons/fa';
  
  export const notifications = [
    { name: 'General Public', icon: <FaUserFriends className="text-blue-500" />, route: '/general' },
    { name: 'Travels and Commuters', icon: <FaCarSide className="text-green-500" />, route: '/travel' },
    { name: 'Outdoor Enthusiasts', icon: <FaHiking className="text-yellow-500" />, route: '/outdoor' },
    { name: 'Agricultural Users', icon: <FaSeedling className="text-teal-500" />, route: '/agri' }
  ];