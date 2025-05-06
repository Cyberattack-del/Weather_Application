// import React, { useEffect, useState } from 'react';

// const HistoryPageMenu = () => {
//   const [history, setHistory] = useState([]);

//   // Fetch history on mount
//   useEffect(() => {
//     fetch("http://localhost:5000/api/history")
//       .then((res) => res.json())
//       .then((data) => setHistory(data))
//       .catch((err) => console.error("Error fetching history:", err));
//   }, []);

//   // Clear history handler
//   const clearHistory = async () => {
//     try {
//       await fetch("http://localhost:5000/api/history", {
//         method: "DELETE",
//       });
//       setHistory([]);
//     } catch (err) {
//       console.error("Failed to clear history", err);
//     }
//   };

//   return (
//     <div style={{ padding: "1rem", maxWidth: "600px", margin: "auto" }}>
//       <h2>Search History</h2>
//       {history.length === 0 ? (
//         <p>No search history found.</p>
//       ) : (
//         <ul>
//           {history.map((item, idx) => (
//             <li key={idx}>
//               <strong>{item.city}</strong> -{" "}
//               {new Date(item.date).toLocaleString()}
//             </li>
//           ))}
//         </ul>
//       )}
//       {history.length > 0 && (
//         <button onClick={clearHistory} style={{ marginTop: "1rem" }}>
//           Clear History
//         </button>
//       )}
//     </div>
//   );
// };

// export default HistoryPageMenu;
// // import React, { useEffect, useState } from "react";
// // import {
// //   WiDaySunny,
// //   WiRain,
// //   WiCloudy,
// //   WiThunderstorm,
// //   WiSnow,
// //   WiFog,
// // } from "react-icons/wi";
// // import {
// //   LineChart,
// //   Line,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   ResponsiveContainer,
// // } from "recharts";

// // const HistoryPageMenu = () => {
// //   const [history, setHistory] = useState([]);

// //   useEffect(() => {
// //     fetch("http://localhost:5000/api/history")
// //       .then((res) => res.json())
// //       .then((data) => setHistory(data))
// //       .catch((err) => console.error("Error fetching history:", err));
// //   }, []);

// //   const clearHistory = async () => {
// //     try {
// //       await fetch("http://localhost:5000/api/history", {
// //         method: "DELETE",
// //       });
// //       setHistory([]);
// //     } catch (err) {
// //       console.error("Failed to clear history", err);
// //     }
// //   };

// //   const getIcon = (condition = "") => {
// //     const cond = condition.toLowerCase();
// //     if (cond.includes("sun")) return <WiDaySunny size={24} />;
// //     if (cond.includes("rain")) return <WiRain size={24} />;
// //     if (cond.includes("cloud")) return <WiCloudy size={24} />;
// //     if (cond.includes("thunder")) return <WiThunderstorm size={24} />;
// //     if (cond.includes("snow")) return <WiSnow size={24} />;
// //     if (cond.includes("fog") || cond.includes("mist")) return <WiFog size={24} />;
// //     return <WiCloudy size={24} />;
// //   };

// //   const graphData = history.map((item, idx) => ({
// //     name: new Date(item.date).toLocaleDateString(),
// //     count: idx + 1,
// //   }));

// //   return (
// //     <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
// //       <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Search History</h2>

// //       {history.length === 0 ? (
// //         <p style={{ textAlign: "center" }}>No search history found.</p>
// //       ) : (
// //         <>
// //           <ul style={{ listStyle: "none", padding: 0 }}>
// //             {history.map((item, idx) => (
// //               <li
// //                 key={idx}
// //                 style={{
// //                   marginBottom: "0.75rem",
// //                   display: "flex",
// //                   alignItems: "center",
// //                   gap: "0.5rem",
// //                   background: "#f4f4f4",
// //                   padding: "0.5rem 1rem",
// //                   borderRadius: "8px",
// //                 }}
// //               >
// //                 {getIcon(item.condition)}
// //                 <span>
// //                   <strong>{item.city}</strong> –{" "}
// //                   {new Date(item.date).toLocaleString()}
// //                 </span>
// //               </li>
// //             ))}
// //           </ul>

// //           <button
// //             onClick={clearHistory}
// //             style={{
// //               marginTop: "1.5rem",
// //               padding: "0.5rem 1rem",
// //               background: "#d9534f",
// //               color: "white",
// //               border: "none",
// //               borderRadius: "6px",
// //               cursor: "pointer",
// //             }}
// //           >
// //             Clear History
// //           </button>

// //           <h3 style={{ marginTop: "2rem" }}>Search Trend</h3>
// //           <ResponsiveContainer width="100%" height={300}>
// //             <LineChart data={graphData}>
// //               <XAxis dataKey="name" />
// //               <YAxis />
// //               <Tooltip />
// //               <Line type="monotone" dataKey="count" stroke="#007bff" />
// //             </LineChart>
// //           </ResponsiveContainer>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default HistoryPageMenu;

// // import React, { useEffect, useState } from "react";
// // import {
// //   Chart as ChartJS,
// //   CategoryScale,
// //   LinearScale,
// //   PointElement,
// //   LineElement,
// //   Title,
// //   Tooltip,
// //   Legend
// // } from "chart.js";
// // import { Line } from "react-chartjs-2";

// // // ChartJS Registration
// // ChartJS.register(
// //   CategoryScale,
// //   LinearScale,
// //   PointElement,
// //   LineElement,
// //   Title,
// //   Tooltip,
// //   Legend
// // );

// // export default function HistoryPageMenu() {
// //   const [history, setHistory] = useState([]);

// //   useEffect(() => {
// //     fetch("http://localhost:5000/api/history")
// //       .then((res) => res.json())
// //       .then((data) => setHistory(data))
// //       .catch((err) => console.error("Error fetching history:", err));
// //   }, []);

// //   const clearHistory = async () => {
// //     try {
// //       await fetch("http://localhost:5000/api/history", {
// //         method: "DELETE"
// //       });
// //       setHistory([]);
// //     } catch (err) {
// //       console.error("Failed to clear history", err);
// //     }
// //   };

// //   // Group by date for chart
// //   const grouped = history.reduce((acc, item) => {
// //     const date = new Date(item.date).toLocaleDateString();
// //     acc[date] = (acc[date] || 0) + 1;
// //     return acc;
// //   }, {});

// //   const labels = Object.keys(grouped);
// //   const dataValues = Object.values(grouped);

// //   const data = {
// //     labels,
// //     datasets: [
// //       {
// //         label: "Searches per Day",
// //         data: dataValues,
// //         borderColor: "#00FFFF",
// //         backgroundColor: "rgba(0, 255, 255, 0.2)",
// //         tension: 0.4,
// //         pointBorderColor: "#00FFFF",
// //         pointBackgroundColor: "#00FFFF",
// //         pointRadius: 5
// //       }
// //     ]
// //   };

// //   const options = {
// //     responsive: true,
// //     maintainAspectRatio: false,
// //     plugins: {
// //       legend: {
// //         labels: {
// //           color: "#fff",
// //           font: { size: 14 }
// //         }
// //       },
// //       tooltip: {
// //         backgroundColor: "#111",
// //         titleColor: "#00FFFF",
// //         bodyColor: "#fff"
// //       }
// //     },
// //     scales: {
// //       x: {
// //         ticks: { color: "#ccc" },
// //         grid: { color: "rgba(255,255,255,0.05)" }
// //       },
// //       y: {
// //         ticks: { color: "#ccc" },
// //         grid: { color: "rgba(255,255,255,0.05)" }
// //       }
// //     }
// //   };

// //   return (
// //     <div className="w-screen h-[70vh]">
// //       <div className="w-full h-full p-6">
// //         <div className="w-full h-full bg-white/5 border border-cyan-500 rounded-2xl shadow-xl backdrop-blur-lg p-8">
// //           <div className="flex justify-between items-center mb-6">
// //             <h3 className="text-white text-3xl font-bold text-center w-full">
// //               Search History Overview
// //             </h3>
// //             {history.length > 0 && (
// //               <button
// //                 onClick={clearHistory}
// //                 className="absolute right-8 top-8 text-sm bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
// //               >
// //                 Clear History
// //               </button>
// //             )}
// //           </div>

// //           {history.length === 0 ? (
// //             <p className="text-white text-lg text-center mt-12">
// //               No search history available.
// //             </p>
// //           ) : (
// //             <div className="h-[85%]">
// //               <Line data={data} options={options} />
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
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
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md mt-10">
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
  );
};

export default HistoryPageMenu;