import React, { useState } from 'react';

const ManagerAllStudents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isViewDetailsOpen, setIsViewDetailsOpen] = useState(false);

  // Placeholder data for students
  const students = [
    {
      id: 1,
      name: 'Rahul Sharma',
      rollNo: 'S001',
      class: '10th',
      fatherName: 'Rajesh Sharma',
      motherName: 'Priya Sharma',
      email: 'rahul@example.com',
      phone: '9876543210',
      address: '123 Main St, City',
      dob: '2005-05-15',
      gender: 'Male',
      status: 'Active',
      fees: {
        total: 50000,
        paid: 45000,
        pending: 5000,
        history: [
          { month: 'March 2024', amount: 15000, status: 'Paid', date: '2024-03-01' },
          { month: 'February 2024', amount: 15000, status: 'Paid', date: '2024-02-01' },
          { month: 'January 2024', amount: 15000, status: 'Pending', date: '2024-01-01' },
        ]
      }
    },
    // Add more student data as needed
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClassFilter = (e) => {
    setSelectedClass(e.target.value);
  };

  const handleViewDetails = (student) => {
    setSelectedStudent(student);
    setIsViewDetailsOpen(true);
    setIsEditMode(false);
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    // In a real app, save the changes to the backend
    setIsEditMode(false);
    alert('Changes saved successfully!');
  };

  const handleDelete = (studentId) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      // In a real app, delete the student from the backend
      console.log(`Deleting student ${studentId}`);
    }
  };

  const handleBlock = (studentId) => {
    // In a real app, update the student's status in the backend
    console.log(`Blocking student ${studentId}`);
  };

  const handleChangePassword = () => {
    // In a real app, implement password change logic
    alert('Password change functionality will be implemented here');
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.rollNo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === '' || student.class === selectedClass;
    return matchesSearch && matchesClass;
  });

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">All Students</h2>

      {/* Filters and Search */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700">Search by Name or Roll No</label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={handleSearch}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter name or roll number"
            />
          </div>
          <div>
            <label htmlFor="class" className="block text-sm font-medium text-gray-700">Filter by Class</label>
            <select
              id="class"
              value={selectedClass}
              onChange={handleClassFilter}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Classes</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
            </select>
          </div>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roll No</th>
                <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.rollNo}</td>
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.class}</td>
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      student.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button
                      onClick={() => handleViewDetails(student)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleDelete(student.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleBlock(student.id)}
                      className="text-yellow-600 hover:text-yellow-900"
                    >
                      Block
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* View/Edit Details Modal */}
      {isViewDetailsOpen && selectedStudent && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                {isEditMode ? 'Edit Student Details' : 'Student Details'}
              </h3>
              <button
                onClick={() => setIsViewDetailsOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              {/* Personal Information */}
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-2">Personal Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    {isEditMode ? (
                      <input
                        type="text"
                        value={selectedStudent.name}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    ) : (
                      <p className="mt-1 text-sm text-gray-900">{selectedStudent.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Roll No</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedStudent.rollNo}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Father's Name</label>
                    {isEditMode ? (
                      <input
                        type="text"
                        value={selectedStudent.fatherName}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    ) : (
                      <p className="mt-1 text-sm text-gray-900">{selectedStudent.fatherName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Mother's Name</label>
                    {isEditMode ? (
                      <input
                        type="text"
                        value={selectedStudent.motherName}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    ) : (
                      <p className="mt-1 text-sm text-gray-900">{selectedStudent.motherName}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-2">Contact Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    {isEditMode ? (
                      <input
                        type="email"
                        value={selectedStudent.email}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    ) : (
                      <p className="mt-1 text-sm text-gray-900">{selectedStudent.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    {isEditMode ? (
                      <input
                        type="tel"
                        value={selectedStudent.phone}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    ) : (
                      <p className="mt-1 text-sm text-gray-900">{selectedStudent.phone}</p>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Address</label>
                    {isEditMode ? (
                      <textarea
                        value={selectedStudent.address}
                        rows="2"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    ) : (
                      <p className="mt-1 text-sm text-gray-900">{selectedStudent.address}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Fees Information */}
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-2">Fees Information</h4>
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Total Fees</label>
                      <p className="mt-1 text-sm text-gray-900">₹{selectedStudent.fees.total}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Paid</label>
                      <p className="mt-1 text-sm text-green-600">₹{selectedStudent.fees.paid}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Pending</label>
                      <p className="mt-1 text-sm text-red-600">₹{selectedStudent.fees.pending}</p>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Month</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {selectedStudent.fees.history.map((fee, index) => (
                          <tr key={index}>
                            <td className="px-4 py-2 text-sm text-gray-900">{fee.month}</td>
                            <td className="px-4 py-2 text-sm text-gray-900">₹{fee.amount}</td>
                            <td className="px-4 py-2">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                fee.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                              }`}>
                                {fee.status}
                              </span>
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-900">{fee.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 mt-4">
                {isEditMode ? (
                  <>
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => setIsEditMode(false)}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleEdit}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Edit Information
                    </button>
                    <button
                      onClick={handleChangePassword}
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                    >
                      Change Password
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagerAllStudents; 