import React, { useState } from 'react';

const Fees = () => {
  const [selectedMonth, setSelectedMonth] = useState('');

  // Placeholder data - expanded to show more months
  const pendingFees = [
    { month: 'January 2024', amount: 500, dueDate: '2024-01-15' },
    { month: 'February 2024', amount: 500, dueDate: '2024-02-15' },
    { month: 'March 2024', amount: 500, dueDate: '2024-03-15' },
    { month: 'April 2024', amount: 500, dueDate: '2024-04-15' },
    { month: 'May 2024', amount: 500, dueDate: '2024-05-15' },
    { month: 'June 2024', amount: 500, dueDate: '2024-06-15' },
    { month: 'July 2024', amount: 500, dueDate: '2024-07-15' },
    { month: 'August 2024', amount: 500, dueDate: '2024-08-15' },
  ];

  const paidFees = [
    { month: 'October 2023', amount: 500, date: '2023-10-15', receiptNo: 'R001' },
    { month: 'November 2023', amount: 500, date: '2023-11-20', receiptNo: 'R002' },
    { month: 'December 2023', amount: 500, date: '2023-12-18', receiptNo: 'R003' },
    { month: 'January 2024', amount: 500, date: '2024-01-10', receiptNo: 'R004' },
    { month: 'February 2024', amount: 500, date: '2024-02-12', receiptNo: 'R005' },
    { month: 'March 2024', amount: 500, date: '2024-03-10', receiptNo: 'R006' },
    { month: 'April 2024', amount: 500, date: '2024-04-08', receiptNo: 'R007' },
    { month: 'May 2024', amount: 500, date: '2024-05-11', receiptNo: 'R008' },
  ];

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Fees Information</h2>
      
      {/* Month Picker */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
          <label htmlFor="monthPicker" className="text-gray-700 font-semibold">
            Select Month:
          </label>
          <input
            type="month"
            id="monthPicker"
            value={selectedMonth}
            onChange={handleMonthChange}
            className="w-full md:w-auto px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Pending Fees Section */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4 text-red-600">Pending Fees</h3>
        {pendingFees.length > 0 ? (
          <div className="overflow-x-auto border-2 border-red-500">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden border border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {pendingFees.map((fee, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fee.month}</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{fee.amount}</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fee.dueDate}</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            Pending
                          </span>
                        </td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm">
                          <button className="text-blue-600 hover:text-blue-900">Pay Now</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">No pending fees.</p>
        )}
      </div>

      {/* Paid Fees Section */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4 text-green-600">Payment History</h3>
        {paidFees.length > 0 ? (
          <div className="overflow-x-auto border-2 border-green-500">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden border border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Date</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Receipt No.</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {paidFees.map((fee, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fee.month}</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{fee.amount}</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fee.date}</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fee.receiptNo}</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Paid
                          </span>
                        </td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm">
                          <button className="text-blue-600 hover:text-blue-900">Download Receipt</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">No payment history.</p>
        )}
      </div>
    </div>
  );
};

export default Fees; 