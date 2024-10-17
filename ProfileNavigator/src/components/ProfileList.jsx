import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import { useNavigate } from 'react-router-dom';

function ProfileList({ profiles }) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    profile.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
    profile.address.street.toLowerCase().includes(searchQuery.toLowerCase()) ||
    profile.address.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Search Input with Icon */}
      <div className="flex items-center border border-gray-300 rounded mb-4">
        <span className="p-2 text-gray-500">
          <i className="fas fa-search"></i> {/* Search icon */}
        </span>
        <input
          type="text"
          placeholder="Search profiles..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="block p-2 w-full rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))
        ) : (
          <div className="text-center">
            <p className="text-lg text-gray-700">No profiles available.</p>
            <p className="text-sm text-gray-500">Please try searching again or add a new profile.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileList;
