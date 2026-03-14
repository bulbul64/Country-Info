import { FaSearch } from 'react-icons/fa';
export const Navbar = ({ onSearchClick }) => {
  return (
    <div className="navbar bg-linear-to-r fixed top-0 left-0 w-full z-50 from-pink-500 via-pink-500 to-red-500 shadow-lg px-4 py-2">
      {/* App Title */}
      <div className="navbar-start">
        <h1 className="text-lg md:text-xl font-bold text-white tracking-wide">Country Info</h1>
      </div>

      {/* Search bar centered */}
      <div className="flex justify-center flex-1">
        <div className="relative w-40 md:w-64">
          {/* Search Icon inside input */}
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-400 text-lg" />

          <input
            type="text"
            placeholder="Search country..."
            onClick={onSearchClick}
            className="w-full pl-10 h-10 bg-white/90 focus:bg-white focus:ring-2 focus:ring-pink-400 placeholder-gray-500 rounded-full border border-gray-300 transition"
          />
        </div>
      </div>

      {/* Right side buttons/icons */}
      <div className="navbar-end flex items-center gap-2">
        <button className="btn btn-sm text-pink-600 hover:bg-white hover:text-pink-500 transition rounded-full">
          🌙
        </button>
      </div>
    </div>
  );
};
