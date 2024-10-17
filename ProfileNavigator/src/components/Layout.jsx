import React from 'react';
import { Outlet } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import defaultLogo from '../assets/logo.png';  
import HomePage from '../Pages/HomePage';

const Layout = () => {
  return (
    <div className="min-h-screen bg-white-300 flex flex-col"> 
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center"> 
          <img 
            src={defaultLogo} 
            alt="Logo" 
            className="w-16 h-16 object-contain mr-4"  
          />
          <h1 className="text-2xl font-bold text-black">Profile Navigator</h1>  
        </div>
        <HamburgerMenu />
      </header>
      <main className="container mx-auto p-4 flex-grow bg-gray-100"> 
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
