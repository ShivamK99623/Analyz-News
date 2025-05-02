import React, { useState } from 'react';

const Header = ({ onLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-gray-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl">My Application</h1>
      {/* <div className="relative">
        <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
          <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center">
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
            <button
              onClick={onLogout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div> */}
    </header>
  );
};

export default Header;
