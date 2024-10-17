import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';  

function ProfileCard({ profile }) {
  return (
    <div className="border p-4 rounded-lg shadow-md text-center">
      <img src={profile.photo} alt={profile.name} className="rounded-full w-24 h-24 mx-auto" />
      <h2 className="text-xl font-bold mt-2">{profile.name}</h2>
      <p>{profile.description}</p>

      {/* Summary Button with Tooltip */}
      <Link
        to={`/profile/${profile.id}`}
        data-tooltip-id="summary-tooltip"
        data-tooltip-content="View Profile Details"
        className="bg-blue-500 text-white py-1 px-4 rounded mt-2 inline-block"
      >
        Summary
      </Link>
      
      {/* Tooltip Component */}
      <Tooltip id="summary-tooltip" place="top" effect="solid" />
    </div>
  );
}

export default ProfileCard;
