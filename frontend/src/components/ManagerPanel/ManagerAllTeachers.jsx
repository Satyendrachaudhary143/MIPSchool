import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';

const ManagerAllTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock data - Replace with actual API call
  useEffect(() => {
    // Simulated API call
    const mockTeachers = [
      {
        id: 1,
        fullName: 'John Doe',
        email: 'john.doe@school.com',
        mobile: '9876543210',
        subject: 'Mathematics',
        classes: ['Class 10', 'Class 11'],
        salary: 45000,
        pendingSalary: 15000,
        joiningDate: '2023-01-15',
        experience: '5 years',
        classTeacher: 'Class 10A',
        status: 'active',
        attendance: '95%',
        performance: 'Excellent',
        qualifications: 'M.Sc Mathematics, B.Ed',
        address: '123 Teacher Colony, City',
        lastSalaryPaid: '2024-02-28'
      },
      {
        id: 2,
        fullName: 'Jane Smith',
        email: 'jane.smith@school.com',
        mobile: '9876543211',
        subject: 'Physics',
        classes: ['Class 11', 'Class 12'],
        salary: 48000,
        pendingSalary: 0,
        joiningDate: '2023-03-20',
        experience: '8 years',
        classTeacher: 'Class 12B',
        status: 'active',
        attendance: '92%',
        performance: 'Good',
        qualifications: 'M.Sc Physics, B.Ed',
        address: '456 Teacher Colony, City',
        lastSalaryPaid: '2024-03-01'
      },
      // Add more mock data as needed
    ];
    setTeachers(mockTeachers);
  }, []);

  const handleViewTeacher = (teacher) => {
    setSelectedTeacher(teacher);
    setIsViewModalOpen(true);
  };

  const handleEditTeacher = (teacher) => {
    setSelectedTeacher(teacher);
    setIsEditModalOpen(true);
  };

  const handleDeleteTeacher = (teacherId) => {
    if (window.confirm('Are you sure you want to delete this teacher?')) {
      // Implement delete functionality
      setTeachers(teachers.filter(teacher => teacher.id !== teacherId));
    }
  };

  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || teacher.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">All Teachers</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Add New Teacher
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              placeholder="Search teachers..."
              className="w-full px-4 py-2 border rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <select
              className="w-full px-4 py-2 border rounded-md"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="on-leave">On Leave</option>
            </select>
          </div>
        </div>
      </div>

      {/* Teachers Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Classes</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salary</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pending Salary</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{teacher.fullName}</div>
                    <div className="text-sm text-gray-500">{teacher.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.classes.join(', ')}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{teacher.salary}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      teacher.pendingSalary > 0 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                    }`}>
                      ₹{teacher.pendingSalary}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      teacher.status === 'active' ? 'bg-green-100 text-green-800' : 
                      teacher.status === 'inactive' ? 'bg-red-100 text-red-800' : 
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {teacher.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleViewTeacher(teacher)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <FaEye />
                      </button>
                      <button
                        onClick={() => handleEditTeacher(teacher)}
                        className="text-yellow-600 hover:text-yellow-900"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDeleteTeacher(teacher.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Teacher Modal */}
      {isViewModalOpen && selectedTeacher && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900">Teacher Details</h3>
              <div className="mt-2 px-7 py-3">
                <div className="space-y-3">
                  <p><span className="font-semibold">Name:</span> {selectedTeacher.fullName}</p>
                  <p><span className="font-semibold">Email:</span> {selectedTeacher.email}</p>
                  <p><span className="font-semibold">Mobile:</span> {selectedTeacher.mobile}</p>
                  <p><span className="font-semibold">Subject:</span> {selectedTeacher.subject}</p>
                  <p><span className="font-semibold">Classes:</span> {selectedTeacher.classes.join(', ')}</p>
                  <p><span className="font-semibold">Class Teacher:</span> {selectedTeacher.classTeacher}</p>
                  <p><span className="font-semibold">Experience:</span> {selectedTeacher.experience}</p>
                  <p><span className="font-semibold">Qualifications:</span> {selectedTeacher.qualifications}</p>
                  <p><span className="font-semibold">Joining Date:</span> {selectedTeacher.joiningDate}</p>
                  <p><span className="font-semibold">Attendance:</span> {selectedTeacher.attendance}</p>
                  <p><span className="font-semibold">Performance:</span> {selectedTeacher.performance}</p>
                  <p><span className="font-semibold">Last Salary Paid:</span> {selectedTeacher.lastSalaryPaid}</p>
                </div>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  onClick={() => setIsViewModalOpen(false)}
                  className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Teacher Modal */}
      {isEditModalOpen && selectedTeacher && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900">Edit Teacher</h3>
              <form className="mt-2 px-7 py-3">
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      defaultValue={selectedTeacher.fullName}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      defaultValue={selectedTeacher.email}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Mobile</label>
                    <input
                      type="tel"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      defaultValue={selectedTeacher.mobile}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Salary</label>
                    <input
                      type="number"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      defaultValue={selectedTeacher.salary}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <select
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      defaultValue={selectedTeacher.status}
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="on-leave">On Leave</option>
                    </select>
                  </div>
                </div>
                <div className="items-center px-4 py-3 mt-4">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditModalOpen(false)}
                    className="mt-2 px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagerAllTeachers; 