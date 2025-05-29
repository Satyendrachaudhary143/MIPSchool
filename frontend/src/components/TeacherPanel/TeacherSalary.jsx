import React, { useState } from 'react';

const TeacherSalary = () => {
  const [salaryData, setSalaryData] = useState([
    {
      id: 1,
      month: 'January 2024',
      amount: 50000,
      status: 'Paid',
      paymentDate: '2024-01-31',
      paymentMethod: 'Bank Transfer',
      transactionId: 'TRX123456'
    },
    {
      id: 2,
      month: 'February 2024',
      amount: 50000,
      status: 'Paid',
      paymentDate: '2024-02-29',
      paymentMethod: 'Bank Transfer',
      transactionId: 'TRX789012'
    },
    {
      id: 3,
      month: 'March 2024',
      amount: 50000,
      status: 'Pending',
      paymentDate: null,
      paymentMethod: null,
      transactionId: null
    },
    {
      id: 4,
      month: 'April 2024',
      amount: 50000,
      status: 'Pending',
      paymentDate: null,
      paymentMethod: null,
      transactionId: null
    }
  ]);

  // Calculate total statistics
  const totalPaid = salaryData
    .filter(salary => salary.status === 'Paid')
    .reduce((sum, salary) => sum + salary.amount, 0);

  const totalPending = salaryData
    .filter(salary => salary.status === 'Pending')
    .reduce((sum, salary) => sum + salary.amount, 0);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Salary Information</h2>

      {/* Salary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Paid</h3>
          <p className="text-3xl font-bold text-green-600">₹{totalPaid.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Pending</h3>
          <p className="text-3xl font-bold text-yellow-600">₹{totalPending.toLocaleString()}</p>
        </div>
      </div>

      {/* Salary Details Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Monthly Salary Details</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Method</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {salaryData.map((salary) => (
                <tr key={salary.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{salary.month}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{salary.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      salary.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {salary.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {salary.paymentDate || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {salary.paymentMethod || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {salary.transactionId || '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Salary Information */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Salary Information</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-medium text-gray-800">Basic Information</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li>• Monthly Salary: ₹50,000</li>
              <li>• Payment Cycle: Monthly</li>
              <li>• Payment Date: Last working day of the month</li>
              <li>• Payment Method: Bank Transfer</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-800">Contact Information</h4>
            <p className="mt-2 text-sm text-gray-600">
              For any salary-related queries, please contact the HR department at hr@school.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSalary; 