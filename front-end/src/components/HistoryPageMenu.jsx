import React, { useEffect, useState } from 'react';
import { ClockIcon, TrashIcon } from '@heroicons/react/24/outline';

const HistoryPageMenu = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/history")
      .then((res) => res.json())
      .then((data) => setHistory(data))
      .catch((err) => console.error("Error fetching history:", err));
  }, []);

  const clearHistory = async () => {
    try {
      await fetch("http://localhost:5000/api/history", {
        method: "DELETE",
      });
      setHistory([]);
    } catch (err) {
      console.error("Failed to clear history", err);
    }
  };
return (
  <div className="flex justify-start mt-10 px-6 p-10">
    <div className="w-full max-w-xl p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Search History</h2>

      {history.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-300">No search history found.</p>
      ) : (
        <ul className="space-y-3">
          {history.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <ClockIcon className="h-6 w-6 text-blue-500" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{item.city}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(item.date).toLocaleString()}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {history.length > 0 && (
        <button
          onClick={clearHistory}
          className="mt-6 inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md transition"
        >
          <TrashIcon className="h-5 w-5 mr-2" />
          Clear History
        </button>
      )}
    </div>
  </div>
);
}

export default HistoryPageMenu;