import React, { useState } from 'react';

const StudentProfile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    studentId: 'STU2024001',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    address: '123 School Street, City',
    dateOfBirth: '2005-05-15',
    grade: '10th Grade',
    section: 'A',
    bloodGroup: 'O+',
    emergencyContact: {
      name: 'Jane Doe',
      relationship: 'Mother',
      phone: '+1234567891'
    }
  });

  const [academicHistory] = useState([
    {
      year: '2023-2024',
      grade: '10th Grade',
      section: 'A',
      overallGrade: 'A',
      attendance: '95%',
      achievements: ['Science Olympiad Winner', 'Math Competition 2nd Place']
    },
    {
      year: '2022-2023',
      grade: '9th Grade',
      section: 'B',
      overallGrade: 'A-',
      attendance: '92%',
      achievements: ['Sports Day Champion', 'Debate Competition Winner']
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmergencyContactChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile(prev => ({
      ...prev,
      emergencyContact: {
        ...prev.emergencyContact,
        [name]: value
      }
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(editedProfile);
    setIsEditing(false);
    // Here you would typically make an API call to update the profile
    console.log('Profile updated:', editedProfile);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to change the password
    console.log('Password change requested');
  };

  return (
    <div className="space-y-6">
      {/* Profile Information */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={editedProfile.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Student ID</label>
                <input
                  type="text"
                  value={profile.studentId}
                  disabled
                  className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={editedProfile.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={editedProfile.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <textarea
                  name="address"
                  value={editedProfile.address}
                  onChange={handleInputChange}
                  rows="3"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={editedProfile.dateOfBirth}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Emergency Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={editedProfile.emergencyContact.name}
                    onChange={handleEmergencyContactChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Relationship</label>
                  <input
                    type="text"
                    name="relationship"
                    value={editedProfile.emergencyContact.relationship}
                    onChange={handleEmergencyContactChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={editedProfile.emergencyContact.phone}
                    onChange={handleEmergencyContactChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-700">Name</h3>
              <p className="mt-1 text-sm text-gray-900">{profile.name}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700">Student ID</h3>
              <p className="mt-1 text-sm text-gray-900">{profile.studentId}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700">Email</h3>
              <p className="mt-1 text-sm text-gray-900">{profile.email}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700">Phone</h3>
              <p className="mt-1 text-sm text-gray-900">{profile.phone}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700">Address</h3>
              <p className="mt-1 text-sm text-gray-900">{profile.address}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700">Date of Birth</h3>
              <p className="mt-1 text-sm text-gray-900">{profile.dateOfBirth}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700">Grade</h3>
              <p className="mt-1 text-sm text-gray-900">{profile.grade}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700">Section</h3>
              <p className="mt-1 text-sm text-gray-900">{profile.section}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700">Blood Group</h3>
              <p className="mt-1 text-sm text-gray-900">{profile.bloodGroup}</p>
            </div>
          </div>
        )}
      </div>

      {/* Academic History */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Academic History</h2>
        <div className="space-y-6">
          {academicHistory.map((year, index) => (
            <div key={index} className="border-b pb-6 last:border-b-0 last:pb-0">
              <h3 className="text-lg font-medium text-gray-900 mb-4">{year.year}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Grade</h4>
                  <p className="mt-1 text-sm text-gray-900">{year.grade}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Section</h4>
                  <p className="mt-1 text-sm text-gray-900">{year.section}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Overall Grade</h4>
                  <p className="mt-1 text-sm text-gray-900">{year.overallGrade}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Attendance</h4>
                  <p className="mt-1 text-sm text-gray-900">{year.attendance}</p>
                </div>
                <div className="md:col-span-2">
                  <h4 className="text-sm font-medium text-gray-700">Achievements</h4>
                  <ul className="mt-1 list-disc list-inside text-sm text-gray-900">
                    {year.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Picture and Password */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Picture</h3>
            <div className="flex items-center space-x-4">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="profile-picture"
                />
                <label
                  htmlFor="profile-picture"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
                >
                  Change Picture
                </label>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Change Password</h3>
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Current Password</label>
                <input
                  type="password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">New Password</label>
                <input
                  type="password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                <input
                  type="password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile; 