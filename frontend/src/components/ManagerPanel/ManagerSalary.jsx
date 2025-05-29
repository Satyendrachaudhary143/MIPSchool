import React, { useState } from 'react';

const ManagerSalary = () => {
  const [filterType, setFilterType] = useState(''); // 'All', 'Teacher', 'Bus Driver', 'Peon', etc.
  const [filterStatus, setFilterStatus] = useState(''); // 'All', 'Paid', 'Pending'
  const [searchTerm, setSearchTerm] = useState('');

  // Placeholder data for employee salaries
  const allSalaries = [
    { id: 1, employeeName: 'Ms. Jane Doe', employeeId: 'T005', type: 'Teacher', month: 'March 2024', amount: 45000, status: 'Paid' },
    { id: 2, employeeName: 'Mr. John Smith', employeeId: 'T002', type: 'Teacher', month: 'March 2024', amount: 50000, status: 'Pending' },
    { id: 3, employeeName: 'Mr. Ramesh Singh', employeeId: 'BD001', type: 'Bus Driver', month: 'March 2024', amount: 20000, status: 'Paid' },
    { id: 4, employeeName: 'Ms. Pooja Sharma', employeeId: 'P003', type: 'Peon', month: 'March 2024', amount: 15000, status: 'Pending' },
    { id: 5, employeeName: 'Ms. Jane Doe', employeeId: 'T005', type: 'Teacher', month: 'February 2024', amount: 45000, status: 'Paid' },
    { id: 6, employeeName: 'Mr. Suresh Kumar', employeeId: 'BD002', type: 'Bus Driver', month: 'March 2024', amount: 20000, status: 'Pending' },
  ];

  const handleFilterTypeChange = (e) => {
    setFilterType(e.target.value);
  };

  const handleFilterStatusChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleMarkAsPaid = (salaryId) => {
    console.log(`Marking salary ${salaryId} as Paid`);
    // In a real app, update the status in your data/backend
    // For now, we'll just log it.
  };

  const filteredSalaries = allSalaries.filter(salary => {
    const matchesType = filterType === '' || salary.type === filterType;
    const matchesStatus = filterStatus === '' || salary.status === filterStatus;
    const matchesSearch = salary.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          salary.employeeId.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesStatus && matchesSearch;
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
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Manage Employee Salaries</h2>

      {/* Filters and Search */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Filter and Search Salaries</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="filterType" className="block text-sm font-medium text-gray-700">Filter by Employee Type</label>
            <select
              id="filterType"
              value={filterType}
              onChange={handleFilterTypeChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">All Types</option>
              <option value="Teacher">Teacher</option>
              <option value="Bus Driver">Bus Driver</option>
              <option value="Peon">Peon</option>
              {/* Add other employee types as needed */}
            </select>
          </div>
          <div>
            <label htmlFor="filterStatus" className="block text-sm font-medium text-gray-700">Filter by Status</label>
            <select
              id="filterStatus"
              value={filterStatus}
              onChange={handleFilterStatusChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">All Statuses</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700">Search by Name or ID</label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={handleSearchChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter name or ID"
            />
          </div>
        </div>
      </div>

      {/* Salaries Table */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Salary Records</h3>
        {filteredSalaries.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee Name</th>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee ID</th>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount (₹)</th>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSalaries.map((salary) => (
                  <tr key={salary.id} className="hover:bg-gray-50">
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{salary.employeeName}</td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{salary.employeeId}</td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{salary.type}</td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{salary.month}</td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{salary.amount}</td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(salary.status)}`}>
                        {salary.status}
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {salary.status === 'Pending' && (
                        <button
                          onClick={() => handleMarkAsPaid(salary.id)}
                          className="text-green-600 hover:text-green-900"
                        >
                          Mark as Paid
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-600">No salary records found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default ManagerSalary; 