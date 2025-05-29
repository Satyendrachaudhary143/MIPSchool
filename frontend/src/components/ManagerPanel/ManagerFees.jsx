import React, { useState } from 'react';

const ManagerFees = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterMonth, setFilterMonth] = useState('');
  const [filterClass, setFilterClass] = useState('');
  const [showAddFeeModal, setShowAddFeeModal] = useState(false);
  const [newFeeData, setNewFeeData] = useState({
    studentId: '',
    studentName: '',
    amount: '',
    month: '',
    dueDate: '',
    description: ''
  });

  // Placeholder data for fee records (example structure)
  const allFeeRecords = [
    { 
      id: 1, 
      studentName: 'Rahul Sharma', 
      studentId: 'S001', 
      className: '10th Grade',
      month: 'March 2024', 
      amount: 5000, 
      status: 'Paid', 
      date: '2024-03-10',
      receiptNo: 'RCP001',
      description: 'Monthly Tuition Fee'
    },
    { 
      id: 2, 
      studentName: 'Priya Patel', 
      studentId: 'S002', 
      className: '10th Grade',
      month: 'March 2024', 
      amount: 5000, 
      status: 'Pending', 
      dueDate: '2024-03-15',
      description: 'Monthly Tuition Fee'
    },
    { 
      id: 3, 
      studentName: 'Rahul Sharma', 
      studentId: 'S001', 
      className: '10th Grade',
      month: 'February 2024', 
      amount: 5000, 
      status: 'Paid', 
      date: '2024-02-12',
      receiptNo: 'RCP002',
      description: 'Monthly Tuition Fee'
    },
    { 
      id: 4, 
      studentName: 'Amit Kumar', 
      studentId: 'S003', 
      className: '11th Grade',
      month: 'March 2024', 
      amount: 5500, 
      status: 'Paid', 
      date: '2024-03-11',
      receiptNo: 'RCP003',
      description: 'Monthly Tuition Fee'
    },
    { 
      id: 5, 
      studentName: 'Priya Patel', 
      studentId: 'S002', 
      className: '10th Grade',
      month: 'February 2024', 
      amount: 5000, 
      status: 'Paid', 
      date: '2024-02-14',
      receiptNo: 'RCP004',
      description: 'Monthly Tuition Fee'
    },
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterMonthChange = (e) => {
    setFilterMonth(e.target.value);
  };

  const handleFilterClassChange = (e) => {
    setFilterClass(e.target.value);
  };

  const handleNewFeeChange = (e) => {
    const { name, value } = e.target;
    setNewFeeData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddFee = () => {
    // Handle adding new fee record
    console.log('Adding new fee:', newFeeData);
    setShowAddFeeModal(false);
    setNewFeeData({
      studentId: '',
      studentName: '',
      amount: '',
      month: '',
      dueDate: '',
      description: ''
    });
  };

  // Filter records based on search term and filters
  const filteredFeeRecords = allFeeRecords.filter(record => {
    const matchesSearch = record.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMonth = filterMonth === '' || record.month.includes(filterMonth);
    const matchesClass = filterClass === '' || record.className === filterClass;
    return matchesSearch && matchesMonth && matchesClass;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Manage Student Fees</h2>
        <button
          onClick={() => setShowAddFeeModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Add New Student Fee Record
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Filter Student Fee Records</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700">Search by Student Name or ID</label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={handleSearchChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter name or ID"
            />
          </div>
          <div>
            <label htmlFor="filterMonth" className="block text-sm font-medium text-gray-700">Filter by Month</label>
            <input
              type="month"
              id="filterMonth"
              value={filterMonth}
              onChange={handleFilterMonthChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="filterClass" className="block text-sm font-medium text-gray-700">Filter by Class</label>
            <select
              id="filterClass"
              value={filterClass}
              onChange={handleFilterClassChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">All Classes</option>
              <option value="10th Grade">10th Grade</option>
              <option value="11th Grade">11th Grade</option>
              <option value="12th Grade">12th Grade</option>
            </select>
          </div>
        </div>
      </div>

      {/* Fee Records Table */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Student Fee Records</h3>
        {filteredFeeRecords.length > 0 ? (
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden border border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student ID</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date/Due Date</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Receipt No.</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredFeeRecords.map((record) => (
                      <tr key={record.id} className="hover:bg-gray-50">
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.studentName}</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.studentId}</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.className}</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.month}</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{record.amount}</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(record.status)}`}>
                            {record.status}
                          </span>
                        </td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {record.status === 'Paid' ? record.date : record.dueDate}
                        </td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {record.receiptNo || '-'}
                        </td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {record.status === 'Pending' && (
                            <button className="text-green-600 hover:text-green-900 mr-2">Mark Paid</button>
                          )}
                          <button className="text-blue-600 hover:text-blue-900 mr-2">View</button>
                          <button className="text-red-600 hover:text-red-900">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">No fee records found.</p>
        )}
      </div>

      {/* Add Fee Modal */}
      {showAddFeeModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Fee Record</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Student ID</label>
                  <input
                    type="text"
                    name="studentId"
                    value={newFeeData.studentId}
                    onChange={handleNewFeeChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Student Name</label>
                  <input
                    type="text"
                    name="studentName"
                    value={newFeeData.studentName}
                    onChange={handleNewFeeChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Amount</label>
                  <input
                    type="number"
                    name="amount"
                    value={newFeeData.amount}
                    onChange={handleNewFeeChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Month</label>
                  <input
                    type="month"
                    name="month"
                    value={newFeeData.month}
                    onChange={handleNewFeeChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Due Date</label>
                  <input
                    type="date"
                    name="dueDate"
                    value={newFeeData.dueDate}
                    onChange={handleNewFeeChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <input
                    type="text"
                    name="description"
                    value={newFeeData.description}
                    onChange={handleNewFeeChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setShowAddFeeModal(false)}
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddFee}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Add Fee
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagerFees; 