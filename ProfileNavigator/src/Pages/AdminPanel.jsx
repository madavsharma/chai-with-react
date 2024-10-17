import React, { useState } from 'react';
import { Modal } from '../components/Modal';

function AdminPanel({ profiles, setProfiles }) {
  const [profile, setProfile] = useState({
    id: null,
    name: '',
    photo: '',
    description: '',
    contact: '',
    address: {
      street: '',
      city: '',
      latitude: '',
      longitude: ''
    }
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('address.')) {
      const addressField = name.split('.')[1];
      setProfile((prevProfile) => ({
        ...prevProfile,
        address: {
          ...prevProfile.address,
          [addressField]: value
        }
      }));
    } else {
      setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      setProfiles((prevProfiles) =>
        prevProfiles.map((p) => (p.id === profile.id ? { ...p, ...profile } : p))
      );
      setSuccessMessage('Profile updated successfully!'); // Success message for update
    } else {
      const newProfile = { ...profile, id: Date.now() };
      setProfiles((prevProfiles) => [...prevProfiles, newProfile]);
      setSuccessMessage('Profile added successfully!'); // Success message for addition
    }

    // Reset the profile state
    setProfile({
      id: null,
      name: '',
      photo: '',
      description: '',
      contact: '',
      address: {
        street: '',
        city: '',
        latitude: '',
        longitude: ''
      }
    });

    // Clear the success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  const handleEdit = (profileToEdit) => {
    setProfile(profileToEdit);
    setIsEditing(true);
    setSuccessMessage(''); // Clear any previous success message
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this profile?");
    if (confirmDelete) {
      setProfiles((prevProfiles) => prevProfiles.filter((p) => p.id !== id));
    }
  };

  const filteredProfiles = profiles.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      <form onSubmit={handleSubmit} className="mb-6 border p-4 rounded shadow-md bg-white">
        <h2 className="text-xl font-semibold mb-4">{isEditing ? 'Edit Profile' : 'Add New Profile'}</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={profile.name}
          onChange={handleInputChange}
          required
          className="block border p-2 mb-2 w-full rounded"
        />
        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          value={profile.photo}
          onChange={handleInputChange}
          required
          className="block border p-2 mb-2 w-full rounded"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={profile.description}
          onChange={handleInputChange}
          required
          className="block border p-2 mb-2 w-full rounded"
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={profile.contact}
          onChange={handleInputChange}
          required
          className="block border p-2 mb-2 w-full rounded"
        />
        <input
          type="text"
          name="address.street"
          placeholder="Street"
          value={profile.address.street}
          onChange={handleInputChange}
          required
          className="block border p-2 mb-2 w-full rounded"
        />
        <input
          type="text"
          name="address.city"
          placeholder="City"
          value={profile.address.city}
          onChange={handleInputChange}
          required
          className="block border p-2 mb-2 w-full rounded"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          {isEditing ? 'Update Profile' : 'Add Profile'}
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-4">Profile List</h2>
      <div className="flex items-center border border-gray-300 rounded mb-4">
        <span className="p-2 text-gray-500">
          <i className="fas fa-search"></i> {/* Search icon */}
        </span>
        <input
          type="text"
          placeholder="Search profiles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block p-2 w-full rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <br />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((p) => (
            <div key={p.id} className="flex flex-col border p-4 rounded-lg shadow-md bg-white transition-transform hover:scale-105">
              <div className="flex flex-grow">
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <p className="text-gray-700">{p.description}</p>
                  <p className="text-gray-500">Contact: {p.contact}</p>
                  <p className="text-gray-500">Address: {p.address.street}, {p.address.city}</p>
                </div>
                <img src={p.photo} alt={p.name} className="w-40 h-40 rounded-full object-cover ml-4" />
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleEdit(p)}
                  className="bg-blue-500 text-white py-1 px-2 rounded transition duration-200 hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="bg-red-500 text-white py-1 px-2 rounded transition duration-200 hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No profiles available.</p>
        )}
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <Modal onClose={() => setIsEditing(false)}>
          <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={profile.name}
              onChange={handleInputChange}
              required
              className="block border p-2 mb-2 w-full rounded"
            />
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              value={profile.photo}
              onChange={handleInputChange}
              required
              className="block border p-2 mb-2 w-full rounded"
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={profile.description}
              onChange={handleInputChange}
              required
              className="block border p-2 mb-2 w-full rounded"
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact"
              value={profile.contact}
              onChange={handleInputChange}
              required
              className="block border p-2 mb-2 w-full rounded"
            />
            <input
              type="text"
              name="address.street"
              placeholder="Street"
              value={profile.address.street}
              onChange={handleInputChange}
              required
              className="block border p-2 mb-2 w-full rounded"
            />
            <input
              type="text"
              name="address.city"
              placeholder="City"
              value={profile.address.city}
              onChange={handleInputChange}
              required
              className="block border p-2 mb-2 w-full rounded"
            />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
              Update Profile
            </button>

            {/* Display success message within the modal */}
            {successMessage && (
              <div className="mt-4 text-green-500">{successMessage}</div>
            )}
          </form>
        </Modal>
      )}
    </div>
  );
}

export default AdminPanel;
