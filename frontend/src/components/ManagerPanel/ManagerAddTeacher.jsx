import React, { useState } from 'react';

const ManagerAddTeacher = () => {
  const [teacherData, setTeacherData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    subject: '', // Can be adjusted for multiple subjects
    classes: '', // Can be adjusted for multiple classes
    salary: '',
    dob: '',
    address: '',
    experience: '', // Years of experience
    classTeacher: '', // New field for class teacher assignment
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeacherData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to API)
    console.log('New Teacher Data:', teacherData);
    // Reset form after submission
    setTeacherData({
      fullName: '',
      email: '',
      mobile: '',
      subject: '',
      classes: '',
      salary: '',
      dob: '',
      address: '',
      experience: '',
      classTeacher: '',
    });
    alert('Teacher added successfully! (Placeholder)');
  };

  const classesOptions = Array.from({ length: 12 }, (_, i) => i + 1); // Generate options 1 to 12

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Add New Teacher</h2>

      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={teacherData.fullName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={teacherData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={teacherData.mobile}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={teacherData.dob}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
               <div className="md:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <textarea
                  id="address"
                  name="address"
                  rows="2"
                  value={teacherData.address}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">Professional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject(s) Taught</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={teacherData.subject}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Math, Physics, English"
                  required
                />
              </div>
              <div>
                <label htmlFor="classes" className="block text-sm font-medium text-gray-700">Class(es) Taught</label>
                <input
                  type="text"
                  id="classes"
                  name="classes"
                  value={teacherData.classes}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., 10th, 11th Science"
                  required
                />
              </div>
               <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience (Years)</label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  value={teacherData.experience}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                  min="0"
                />
              </div>
               <div>
                <label htmlFor="salary" className="block text-sm font-medium text-gray-700">Salary (₹)</label>
                <input
                  type="number"
                  id="salary"
                  name="salary"
                  value={teacherData.salary}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                  min="0"
                />
              </div>
                <div> {/* New Class Teacher field */}
                    <label htmlFor="classTeacher" className="block text-sm font-medium text-gray-700">Class Teacher of</label>
                    <select
                        id="classTeacher"
                        name="classTeacher"
                        value={teacherData.classTeacher}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">None</option>
                        {classesOptions.map(cls => (
                            <option key={cls} value={cls}>{cls}th Grade</option>
                        ))}
                    </select>
                </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Add Teacher
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManagerAddTeacher; 