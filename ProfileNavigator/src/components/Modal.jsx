import React from 'react';

export function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg relative w-3/4 md:w-1/2 lg:w-1/3">
        {children}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 text-lg hover:text-red-500 focus:outline-none transition duration-300 transform hover:scale-110"
          aria-label="Close modal"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
