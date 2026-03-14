import { use, useState } from "react";
import { FaSearch } from "react-icons/fa";

// src/components/SearchModal.jsx
export const SearchModal = ({ onClose, countries }) => {

  const allCountries = use(countries);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredCountries = allCountries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase()),
  );
 console.log(filteredCountries)

  return (
    <div
      // onClick={onClose}
      className="fixed inset-0 z-50 flex items-start md:items-start justify-center bg-gray-800/40 backdrop-blur-sm p-4"
    >
      <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-md md:max-w-lg lg:max-w-xl p-6 shadow-2xl mt-12 md:mt-24 transition-colors">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">
            Search Countries
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition text-2xl font-bold"
          >
            ✕
          </button>
        </div>

        <div className="relative w-full mb-4">
          {/* Search Icon inside input */}
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400 text-lg" />

          <input
            type="text"
            placeholder="Type country name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 p-4 border border-gray-300 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-800 dark:text-white transition placeholder-gray-400 dark:placeholder-gray-500 text-sm md:text-base"
          />
        </div>

        {/* Results */}
        <div className="mt-6 max-h-96 overflow-y-auto space-y-2">
          {/* Example dynamic result */}
          {filteredCountries.map((country) => (
            <div className="p-3 rounded-lg hover:bg-pink-100 dark:hover:bg-pink-700 cursor-pointer transition flex items-center gap-3">
              <img
                src={country.flags.svg}
                alt="Japan"
                className="w-7 h-5 object-cover rounded-sm"
              />
              <span className="text-gray-800 dark:text-gray-100 text-sm md:text-base">
                {country.name.common}
              </span>
            </div>
          ))}

          {/* Dynamic mapping for all search results goes here */}
        </div>
      </div>
    </div>
  );
};
