import React, { useState } from 'react';

const StudentAccount = () => {
  const [password, setPassword] = useState('');
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUpdatePassword = () => {
    // Handle password update logic here
    console.log('Updating password:', password);
    setIsEditingPassword(false);
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Student Account Overview</h2>
      
      {/* Personal Information */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div className="bg-white p-3 md:p-4 rounded-md shadow-sm">
            <p className="text-sm md:text-base text-gray-600">Name</p>
            <p className="text-base md:text-lg font-medium text-gray-900">Student Name</p>
          </div>
          <div className="bg-white p-3 md:p-4 rounded-md shadow-sm">
            <p className="text-sm md:text-base text-gray-600">Email</p>
            <p className="text-base md:text-lg font-medium text-gray-900">student@example.com</p>
          </div>
          <div className="bg-white p-3 md:p-4 rounded-md shadow-sm">
            <p className="text-sm md:text-base text-gray-600">Mobile</p>
            <p className="text-base md:text-lg font-medium text-gray-900">123-456-7890</p>
          </div>
          <div className="bg-white p-3 md:p-4 rounded-md shadow-sm">
            <p className="text-sm md:text-base text-gray-600">Class</p>
            <p className="text-base md:text-lg font-medium text-gray-900">12A</p>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Security</h3>
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
    </div>
  );
};

export default StudentAccount; 