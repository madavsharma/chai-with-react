import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MapComponent from '../components/MapComponent';
import { Modal } from '../components/Modal'; 

function ProfileDetails({ profiles, setProfiles }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const profile = profiles.find((p) => p.id === parseInt(id));
  const [modalOpen, setModalOpen] = useState(false);

  if (!profile) {
    return <p>Profile not found!</p>;
  }

  const handleClose = () => {
    navigate('/'); // Navigate back to the homepage
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleEdit = () => {
    navigate('/admin', { state: { profile } }); 
  };

  const handleDelete = (id) => {
    // Confirmation dialog
    const confirmDelete = window.confirm("Are you sure you want to delete this profile?");
    if (confirmDelete) {
      setProfiles((prevProfiles) => prevProfiles.filter((p) => p.id !== id));
      handleClose(); // Close the modal after deletion
    }
  };

  return (
    <div className="container mx-auto p-4 relative">
      <h1 className="text-3xl font-bold text-center mb-6">{profile.name}</h1>

      <div className="flex flex-col items-center">
        <img src={profile.photo} alt={profile.name} className="w-48 h-48 rounded-full mb-4 shadow-md" />
        <button onClick={toggleModal} className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
          View Details
        </button>
      </div>

      {/* Modal for displaying profile details */}
      {modalOpen && (
        <Modal onClose={toggleModal}>
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold">{profile.name}</h2>
            <p className="text-lg font-bold mt-2">{profile.description}</p>
            <p className="mt-2 text-md font-bold text-gray-500">Contact: <span className="text-gray-800">{profile.contact}</span></p>
            <p className="mt-2 text-md font-bold text-gray-500">Address: <span className="text-gray-800">{profile.address.street}, {profile.address.city}</span></p>
          </div>
          <h3 className="text-xl font-bold mb-2">Location</h3>
          <MapComponent address={profile.address} />
          <div className="flex justify-between mt-4">
            <button
              onClick={handleEdit}
              className="bg-yellow-500 text-white py-1 px-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(profile.id)}
              className="bg-red-500 text-white py-1 px-2 rounded"
            >
              Delete
            </button>
          </div>
        </Modal>
      )}

      <div className="mt-6">
        <h2 className="text-2xl font-bold text-center mb-4">Location</h2>
        <MapComponent address={profile.address} />
      </div>
    </div>
  );
}

export default ProfileDetails;
