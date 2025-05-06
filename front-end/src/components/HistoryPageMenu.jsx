import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const HistoryPageMenu = ({ history = [] }) => {
  // Convert history array to frequency data
  const frequencyMap = history.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(frequencyMap).map(([name, count]) => ({
    name,
    count
  }));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 max-w-2xl mx-auto mt-8">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Recent Searches</h3>

      {history.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">No recent searches.</p>
      ) : (
        <>
          <ul className="space-y-2 mb-6">
            {history.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-800 dark:text-gray-100"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Search Frequency</h4>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fill: '#4B5563' }} />
                  <YAxis allowDecimals={false} tick={{ fill: '#4B5563' }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
                    labelStyle={{ color: '#333' }}
                  />
                  <Bar dataKey="count" fill="#6366f1" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HistoryPageMenu;