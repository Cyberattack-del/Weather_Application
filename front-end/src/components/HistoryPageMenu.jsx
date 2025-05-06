// // import React from "react";
// // import {
// //   BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
// // } from "recharts";

// // const HistoryPageMenu = ({ history = [] }) => {
// //   // Convert history array to frequency data
// //   const frequencyMap = history.reduce((acc, item) => {
// //     acc[item] = (acc[item] || 0) + 1;
// //     return acc;
// //   }, {});

// //   const chartData = Object.entries(frequencyMap).map(([name, count]) => ({
// //     name,
// //     count
// //   }));

// //   return (
// //     <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 max-w-2xl mx-auto mt-8">
// //       <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Recent Searches</h3>

// //       {history.length === 0 ? (
// //         <p className="text-gray-600 dark:text-gray-300">No recent searches.</p>
// //       ) : (
// //         <>
// //           <ul className="space-y-2 mb-6">
// //             {history.map((item, index) => (
// //               <li
// //                 key={index}
// //                 className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-800 dark:text-gray-100"
// //               >
// //                 {item}
// //               </li>
// //             ))}
// //           </ul>

// //           <div className="mt-4">
// //             <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Search Frequency</h4>
// //             <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
// //               <ResponsiveContainer width="100%" height={250}>
// //                 <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
// //                   <CartesianGrid strokeDasharray="3 3" />
// //                   <XAxis dataKey="name" tick={{ fill: '#4B5563' }} />
// //                   <YAxis allowDecimals={false} tick={{ fill: '#4B5563' }} />
// //                   <Tooltip
// //                     contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
// //                     labelStyle={{ color: '#333' }}
// //                   />
// //                   <Bar dataKey="count" fill="#6366f1" radius={[10, 10, 0, 0]} />
// //                 </BarChart>
// //               </ResponsiveContainer>
// //             </div>
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default HistoryPageMenu;

// // import React, { useEffect, useState } from "react";
// // import {
// //   BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
// // } from "recharts";

// // const HistoryPageMenu = () => {
// //   const [history, setHistory] = useState([]);

// //   // Fetch search history from the backend
// //   useEffect(() => {
// //     fetch('http://localhost:5000/api/history')
// //       .then((response) => response.json())
// //       .then((data) => setHistory(data))
// //       .catch((error) => console.error("Error fetching history:", error));
// //   }, []);

// //   // Convert history array to frequency data
// //   const frequencyMap = history.reduce((acc, item) => {
// //     acc[item] = (acc[item] || 0) + 1;
// //     return acc;
// //   }, {});

// //   const chartData = Object.entries(frequencyMap).map(([name, count]) => ({
// //     name,
// //     count
// //   }));

// //   return (
// //     <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 max-w-2xl mx-auto mt-8">
// //       <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Recent Searches</h3>

// //       {history.length === 0 ? (
// //         <p className="text-gray-600 dark:text-gray-300">No recent searches.</p>
// //       ) : (
// //         <>
// //           <ul className="space-y-2 mb-6">
// //             {history.map((item, index) => (
// //               <li
// //                 key={index}
// //                 className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-800 dark:text-gray-100"
// //               >
// //                 {item}
// //               </li>
// //             ))}
// //           </ul>

// //           <div className="mt-4">
// //             <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Search Frequency</h4>
// //             <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
// //               <ResponsiveContainer width="100%" height={250}>
// //                 <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
// //                   <CartesianGrid strokeDasharray="3 3" />
// //                   <XAxis dataKey="name" angle={-30} textAnchor="end" tick={{ fill: '#4B5563' }} />
// //                   <YAxis allowDecimals={false} tick={{ fill: '#4B5563' }} />
// //                   <Tooltip
// //                     contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
// //                     labelStyle={{ color: '#333' }}
// //                   />
// //                   <Bar dataKey="count" fill="#6366f1" radius={[10, 10, 0, 0]} />
// //                 </BarChart>
// //               </ResponsiveContainer>
// //             </div>
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // // export default HistoryPageMenu;
// // import React from 'react';

// // const HistoryPageMenu = ({ searchHistory, onSearch }) => {
// //   return (
// //     <div className="history-container p-4 bg-white/10 rounded-xl shadow-lg mt-4">
// //       <h3 className="text-xl font-semibold mb-4 text-white">Search History</h3>

// //       {searchHistory.length === 0 ? (
// //         <p className="text-gray-300">No search history available.</p>
// //       ) : (
// //         <ul className="history-list space-y-2">
// //           {searchHistory.map((city, index) => (
// //             <li
// //               key={index}
// //               className="history-item cursor-pointer text-blue-300 hover:underline"
// //               onClick={() => onSearch(city)}
// //             >
// //               {city}
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // };

// // export default HistoryPageMenu;
// // import React from 'react';

// // const HistoryPageMenu = ({ searchHistory }) => {
// //   return (
// //     <div className="history-container">
// //       <h3 className="text-xl font-semibold mb-4">Search History</h3>

// //       {searchHistory.length === 0 ? (
// //         <p>No search history available.</p>
// //       ) : (
// //         <ul className="history-list">
// //           {searchHistory.map((city, index) => (
// //             <li key={index} className="history-item">
// //               <span>{city}</span>
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // };

// // export default HistoryPageMenu;

// import React from 'react';

// const HistoryPageMenu = ({ searchHistory, onSearch }) => {
//   return (
//     <div className="history-container p-4 bg-white/10 rounded-xl shadow-lg mt-4">
//       <h3 className="text-xl font-semibold mb-4 text-white">Search History</h3>

//       {searchHistory.length === 0 ? (
//         <p className="text-gray-300">No search history available.</p>
//       ) : (
//         <ul className="history-list space-y-2">
//           {searchHistory.map((city, index) => (
//             <li
//               key={index}
//               className="history-item cursor-pointer text-blue-300 hover:underline"
//               onClick={() => onSearch(city)}
//             >
//               {city}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default HistoryPageMenu;

import React, { useState, useEffect } from 'react';

const HistoryPageMenu = ({ historyData }) => {
  // Check if historyData is undefined or null before rendering
  if (!historyData) {
    return <div>Loading...</div>; // Or render a fallback UI while data is loading
  }

  // Ensure historyData is an array before accessing its length
  if (!Array.isArray(historyData)) {
    return <div>Error: Invalid data format.</div>; // Handle unexpected data formats
  }

  return (
    <div>
      <h2>History</h2>
      <ul>
        {historyData.length > 0 ? (
          historyData.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <p>No history available.</p>
        )}
      </ul>
    </div>
  );
};

export default HistoryPageMenu;