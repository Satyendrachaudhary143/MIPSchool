import React, { useState } from 'react';

const TeacherAdmissions = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    fatherName: '',
    motherName: '',
    className: '',
    idType: '',
    idNumber: '',
  });

  const [pendingAdmissions, setPendingAdmissions] = useState([
    {
      id: 1,
      fullName: 'John Doe',
      email: 'john@example.com',
      mobile: '1234567890',
      fatherName: 'James Doe',
      motherName: 'Jane Doe',
      className: '5th Grade',
      idType: 'Adharcard',
      idNumber: 'ABCD12345',
      status: 'Pending',
      date: '2024-03-15'
    },
    // Add more sample data as needed
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new admission to pending admissions
    const newAdmission = {
      id: pendingAdmissions.length + 1,
      ...formData,
      status: 'Pending',
      date: new Date().toISOString().split('T')[0]
    };
    setPendingAdmissions([...pendingAdmissions, newAdmission]);
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      mobile: '',
      fatherName: '',
      motherName: '',
      className: '',
      idType: '',
      idNumber: '',
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Student Admissions</h2>

      {/* Admission Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">New Admission Form</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Father's Name</label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mother's Name</label>
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Class</label>
              <select
                name="className"
                value={formData.className}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select Class</option>
                <option value="1st Grade">1st Grade</option>
                <option value="2nd Grade">2nd Grade</option>
                <option value="3rd Grade">3rd Grade</option>
                <option value="4th Grade">4th Grade</option>
                <option value="5th Grade">5th Grade</option>
                <option value="6th Grade">6th Grade</option>
                <option value="7th Grade">7th Grade</option>
                <option value="8th Grade">8th Grade</option>
                <option value="9th Grade">9th Grade</option>
                <option value="10th Grade">10th Grade</option>
                <option value="11th Grade">11th Grade</option>
                <option value="12th Grade">12th Grade</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">ID Type</label>
              <select
                name="idType"
                value={formData.idType}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select ID Type</option>
                <option value="Previous School ID Card">Previous School ID Card</option>
                <option value="Adharcard">Adharcard</option>
                <option value="Birth Certificate">Birth Certificate</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">ID Number</label>
              <input
                type="text"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>

      {/* Pending Admissions List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Pending Admissions</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pendingAdmissions.map((admission) => (
                <tr key={admission.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{admission.fullName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{admission.className}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{admission.mobile}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{admission.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      {admission.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeacherAdmissions; 