import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const HamburgerMenu = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <div className="relative z-50">
      <button
        onClick={toggleMenu}
        aria-label="Toggle menu"
        className="flex flex-col items-center justify-center w-10 h-8 bg-gray-800 text-white rounded-md focus:outline-none transition-transform duration-300"
      >
        <div className="hamburger-line w-8 h-1 bg-white rounded-md transition-transform duration-300"></div>
        <div className="hamburger-line w-8 h-1 bg-white rounded-md transition-transform duration-300 my-1"></div>
        <div className="hamburger-line w-8 h-1 bg-white rounded-md transition-transform duration-300"></div>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity duration-300" onClick={handleClose}>
          <div className="absolute top-0 right-0 w-64 h-full bg-gray-900 text-white p-6 shadow-lg transition-transform duration-300 transform translate-x-0">
            <button
              onClick={handleClose}
              className="text-red-500 text-lg font-bold mb-4 hover:bg-red-200 rounded-md p-1 transition duration-300 focus:outline-none"
              aria-label="Close menu"
            >
              &times;
            </button>

            <nav className="space-y-6">
              <NavLink
                to="/"
                onClick={handleClose}
                className={({ isActive }) =>
                  `flex items-center text-xl font-medium hover:text-blue-400 transition duration-300 ${isActive ? 'text-blue-500 font-bold' : ''}`
                }
              >
                <i className="fas fa-home mr-2"></i> {/* Home icon */}
                Home
              </NavLink>
              <NavLink
                to="/admin"
                onClick={handleClose}
                className={({ isActive }) =>
                  `flex items-center text-xl font-medium hover:text-blue-400 transition duration-300 ${isActive ? 'text-blue-500 font-bold' : ''}`
                }
              >
                <i className="fas fa-cog mr-2"></i> 
                Admin Panel
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
