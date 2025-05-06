import React, { useState, useEffect } from "react";
import { RiSearchLine } from "react-icons/ri";
import cityList from "../data/CityList";

export default function SearchBar({ onSearch, error }) {
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [filteredCities, setFilteredCities] = useState([]);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [theme, setTheme] = useState("light");

  // Watch for theme changes on body
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.body.className);
    });
    observer.observe(document.body, { attributes: true });
    setTheme(document.body.className); // Initial set
    return () => observer.disconnect();
  }, []);

  // CSS variables are now applied based on the theme
  const inputStyle = "bg-[var(--input-bg)] text-[var(--text)]";
  const textColor = "text-[var(--text)]";

  const handleSearchClick = () => {
    if (!showInput) {
      setShowInput(true);
    } else if (input.trim()) {
      onSearch(input);
      resetSearch();
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    const filtered = cityList.filter((city) =>
      city.toLowerCase().startsWith(value.toLowerCase())
    );
    setFilteredCities(value ? filtered : []);
    setHighlightIndex(-1);
  };

  const handleSuggestionClick = (city) => {
    onSearch(city);
    resetSearch();
  };

  const resetSearch = () => {
    setInput("");
    setShowInput(false);
    setFilteredCities([]);
    setHighlightIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setHighlightIndex((prev) => Math.min(prev + 1, filteredCities.length - 1));
    } else if (e.key === "ArrowUp") {
      setHighlightIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      if (highlightIndex >= 0 && filteredCities[highlightIndex]) {
        handleSuggestionClick(filteredCities[highlightIndex]);
      } else if (input.trim()) {
        onSearch(input);
        resetSearch();
      }
    } else if (e.key === "Escape") {
      resetSearch();
    }
  };

  return (
    <div
      className={`w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mt-6 font-['Segoe_UI'] relative ${textColor}`}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <h1 className={`${textColor} text-2xl sm:text-3xl font-semibold tracking-wide`}>
          Weather Dashboard
        </h1>

        <div className="relative flex items-center justify-end w-full sm:w-auto">
          {showInput && (
            <div className="relative w-full sm:w-80 mr-2">
              <input
                type="text"
                placeholder="Search for a city..."
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className={`w-full px-5 py-3 rounded-full ${inputStyle} placeholder-[var(--placeholder)] border border-black/20 backdrop-blur-md focus:outline-none focus:ring-2 text-sm shadow-md transition-all duration-300 ease-in-out`}
                autoFocus
              />
              {filteredCities.length > 0 ? (
                <ul className="absolute z-10 mt-1 w-full bg-black/80 border border-white/20 rounded-xl text-white text-sm shadow-lg max-h-52 overflow-y-auto backdrop-blur-lg">
                  {filteredCities.map((city, index) => (
                    <li
                      key={city}
                      onClick={() => handleSuggestionClick(city)}
                      className={`px-4 py-2 cursor-pointer rounded-md transition ${
                        index === highlightIndex ? "bg-blue-600" : "hover:bg-gray-700"
                      }`}
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              ) : input && (
                <div className="absolute mt-1 w-full bg-black/80 border border-white/20 rounded-xl text-white text-sm shadow-lg p-3 backdrop-blur-lg">
                  No city found.
                </div>
              )}
            </div>
          )}
          <button
            onClick={handleSearchClick}
            className={`text-white hover:text-blue-400 transition duration-300${textColor}` }
            aria-label="Search"
          >
            <RiSearchLine size={30} />
          </button>
        </div>
      </div>

      {error && (
        <p className="text-red-400 text-center text-sm mt-3 animate-pulse">
          {error}
        </p>
      )}
    </div>
  );
}

