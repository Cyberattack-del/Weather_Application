import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaUserFriends,
  FaCarSide,
  FaHiking,
  FaSeedling,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function NotificationMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleItem = () => setOpen(!open);

  const categories = [
    { name: 'General Public', icon: <FaUserFriends className="text-blue-500" />, route: '/general' },
    { name: 'Travels and Commuters', icon: <FaCarSide className="text-green-500" />, route: '/travel' },
    { name: 'Outdoor Enthusiasts', icon: <FaHiking className="text-yellow-500" />, route: '/outdoor' },
    { name: 'Agricultural Users', icon: <FaSeedling className="text-teal-500" />, route: '/agri' }
  ];

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <div className="notification-menu max-w-md top-6 p-10 gap-20 mt-4 ml-4">
      <div
        className="cursor-pointer bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-3 rounded-lg shadow-md flex justify-between items-center"
        onClick={toggleItem}
      >
        <span className="font-semibold">Notifications</span>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      <AnimatePresence>
  {open && (
    <motion.div
      className="mt-2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
        {categories.map(({ name, icon, route }, i) => (
          <div
            key={i}
            className="cursor-pointer bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md shadow flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600"
            onClick={() => handleNavigate(route)}
          >
            {icon} <span className="font-medium">{name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )}
</AnimatePresence>
    
    </div>
  );
}

export default NotificationMenu;
