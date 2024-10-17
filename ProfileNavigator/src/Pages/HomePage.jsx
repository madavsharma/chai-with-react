import React, { useState } from 'react';
import Layout from '../components/Layout';

function HomePage({ profiles }) {
  const [hoveredProfileId, setHoveredProfileId] = useState(null);  // State to track hovered profile
  const [searchQuery, setSearchQuery] = useState('');

  const handleMouseEnter = (id) => {
    setHoveredProfileId(id);  // Set hovered profile ID
  };

  const handleMouseLeave = () => {
    setHoveredProfileId(null);  // Reset hovered profile
  };

  // Filter profiles based on the search query
  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Profile Navigator</h1>

      <div className="mt-4">
        <div className="flex items-center border border-gray-300 rounded mb-4">
          <span className="p-2 text-gray-500">
            <i className="fas fa-search"></i> 
          </span>
          <input
            type="text"
            placeholder="Search profiles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block p-2 w-full rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
            <div 
              key={profile.id}
              className="border p-4 rounded-lg shadow-md bg-white transition-transform hover:scale-105 relative cursor-pointer" // Cursor and scaling effect
              onMouseEnter={() => handleMouseEnter(profile.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center">
                <img 
                  src={profile.photo} 
                  alt={profile.name} 
                  className="w-40 h-40 rounded-full object-cover border-2 border-red-300" // Added border to image
                />
                <div className="ml-4">
                  <h3 className="text-xl font-bold">{profile.name}</h3>
                  {hoveredProfileId === profile.id ? (  // Show details on hover
                    <div className="transition-opacity duration-300 opacity-100 mt-2">
                      <p className="text-gray-700">{profile.description}</p>
                      <p className="text-gray-500">Contact: {profile.contact}</p>
                      <p className="text-gray-500">Address: {profile.address.street}, {profile.address.city}</p>
                    </div>
                  ) : (
                    <p className="text-gray-500 mt-2">Hover to see details</p>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No profiles available.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
