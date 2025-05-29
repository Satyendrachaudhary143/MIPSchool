import React, { useState } from 'react';

const ManagerAccount = () => {
  const [password, setPassword] = useState('');
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Smith',
    email: 'john.smith@mipschool.edu',
    mobile: '+91 98765 43210',
    designation: 'School Manager',
    department: 'Administration',
    joiningDate: '2020-06-15',
    address: '123 School Lane, Education City, 400001'
  });

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUpdatePassword = () => {
    // Handle password update logic here
    console.log('Updating manager password:', password);
    setIsEditingPassword(false);
    setPassword('');
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpdateProfile = () => {
    // Handle profile update logic here
    console.log('Updating profile:', profileData);
    setIsEditingProfile(false);
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Manager Account Overview</h2>
      
      {/* Personal Information */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg md:text-xl font-semibold">Personal Information</h3>
          <button
            onClick={() => setIsEditingProfile(!isEditingProfile)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            {isEditingProfile ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>
        
        {isEditingProfile ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleProfileChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleProfileChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile</label>
              <input
                type="tel"
                name="mobile"
                value={profileData.mobile}
                onChange={handleProfileChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={profileData.address}
                onChange={handleProfileChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <button
                onClick={handleUpdateProfile}
                className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p className="text-sm text-gray-600">Full Name</p>
              <p className="text-base font-medium text-gray-900">{profileData.name}</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p className="text-sm text-gray-600">Email</p>
              <p className="text-base font-medium text-gray-900">{profileData.email}</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p className="text-sm text-gray-600">Mobile</p>
              <p className="text-base font-medium text-gray-900">{profileData.mobile}</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p className="text-sm text-gray-600">Designation</p>
              <p className="text-base font-medium text-gray-900">{profileData.designation}</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p className="text-sm text-gray-600">Department</p>
              <p className="text-base font-medium text-gray-900">{profileData.department}</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p className="text-sm text-gray-600">Joining Date</p>
              <p className="text-base font-medium text-gray-900">{profileData.joiningDate}</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm md:col-span-2">
              <p className="text-sm text-gray-600">Address</p>
              <p className="text-base font-medium text-gray-900">{profileData.address}</p>
            </div>
          </div>
        )}
      </div>

      {/* Security Section */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Security</h3>
        <div className="bg-white p-4 rounded-md shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
            <p className="font-semibold text-gray-700">Password:</p>
            {isEditingPassword ? (
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                <input
                  type="password"
                  className="w-full md:w-auto px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter new password"
                />
                <div className="flex space-x-2">
                  <button 
                    onClick={handleUpdatePassword} 
                    className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Update
                  </button>
                  <button 
                    onClick={() => setIsEditingPassword(false)} 
                    className="w-full md:w-auto px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button 
                onClick={() => setIsEditingPassword(true)} 
                className="w-full md:w-auto px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
              >
                Change Password
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Activity Log */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-md shadow-sm">
            <p className="text-sm text-gray-600">March 17, 2024 - 10:30 AM</p>
            <p className="text-base font-medium text-gray-900">Updated fee structure for Class 10</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <p className="text-sm text-gray-600">March 16, 2024 - 2:15 PM</p>
            <p className="text-base font-medium text-gray-900">Approved new teacher appointment</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <p className="text-sm text-gray-600">March 15, 2024 - 11:45 AM</p>
            <p className="text-base font-medium text-gray-900">Processed monthly salary payments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerAccount; 