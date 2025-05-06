// import React, { useEffect, useState } from 'react';
// import HistoryPageMenu from '../components/HistoryPageMenu';
// import { fetchHistory } from '../services/historyService';

// const HistoryPage = () => {
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     fetchHistory().then(setHistory);
//   }, []);

//   return <HistoryPageMenu history={history} />;
// };

// export default HistoryPage;
import React, { useEffect, useState } from 'react';
import HistoryPageMenu from '../components/HistoryPageMenu';
import { fetchHistory, addSearch } from '../services/historyService';

const HistoryPage = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory().then(setHistory);
  }, []);

  const handleSearch = async (cityName) => {
    // Handle search when clicking on a city from history
    // Update the weather search
    // Add city to history if not already added
    if (!history.includes(cityName)) {
      setHistory((prevHistory) => [cityName, ...prevHistory.slice(0, 19)]);
      await addSearch(cityName);
    }
  };

  return <HistoryPageMenu searchHistory={history} onSearch={handleSearch} />;
};

export default HistoryPage;