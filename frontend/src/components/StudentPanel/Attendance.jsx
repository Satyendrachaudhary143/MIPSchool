import React, { useState } from 'react';

const Attendance = () => {
  const [selectedMonth, setSelectedMonth] = useState('');

  // Placeholder data with more detailed attendance information - expanded
  const attendanceData = [
    {
      month: 'January 2024',
      present: 20,
      absent: 2,
      total: 22,
      details: [
        { date: '2024-01-01', status: 'Present' },
        { date: '2024-01-02', status: 'Present' },
        { date: '2024-01-03', status: 'Absent' },
        { date: '2024-01-04', status: 'Present' },
        { date: '2024-01-05', status: 'Present' },
        { date: '2024-01-06', status: 'Present' },
        { date: '2024-01-07', status: 'Absent' },
        { date: '2024-01-08', status: 'Present' },
        { date: '2024-01-09', status: 'Present' },
        { date: '2024-01-10', status: 'Present' },
      ]
    },
    {
      month: 'February 2024',
      present: 18,
      absent: 2,
      total: 20,
      details: [
        { date: '2024-02-01', status: 'Present' },
        { date: '2024-02-02', status: 'Present' },
        { date: '2024-02-03', status: 'Absent' },
        { date: '2024-02-04', status: 'Present' },
        { date: '2024-02-05', status: 'Present' },
        { date: '2024-02-06', status: 'Present' },
        { date: '2024-02-07', status: 'Present' },
        { date: '2024-02-08', status: 'Absent' },
        { date: '2024-02-09', status: 'Present' },
        { date: '2024-02-10', status: 'Present' },
      ]
    },
    {
      month: 'March 2024',
      present: 21,
      absent: 1,
      total: 22,
      details: [
        { date: '2024-03-01', status: 'Present' },
        { date: '2024-03-02', status: 'Present' },
        { date: '2024-03-03', status: 'Present' },
        { date: '2024-03-04', status: 'Absent' },
        { date: '2024-03-05', status: 'Present' },
        { date: '2024-03-06', status: 'Present' },
        { date: '2024-03-07', status: 'Present' },
        { date: '2024-03-08', status: 'Present' },
        { date: '2024-03-09', status: 'Present' },
        { date: '2024-03-10', status: 'Present' },
      ]
    },
  ];

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  // Calculate attendance percentage
  const calculatePercentage = (present, total) => {
    return ((present / total) * 100).toFixed(1);
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Attendance Information</h2>
      


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

      {/* Monthly Summary */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-600">Monthly Summary</h3>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden border border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Present Days</th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Absent Days</th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Days</th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance %</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {attendanceData.map((monthData, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{monthData.month}</td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-green-600">{monthData.present}</td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-red-600">{monthData.absent}</td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{monthData.total}</td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          calculatePercentage(monthData.present, monthData.total) >= 75 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {calculatePercentage(monthData.present, monthData.total)}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Attendance */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-600">Detailed Attendance</h3>
        {attendanceData.map((monthData, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-base md:text-lg font-medium text-gray-700 mb-3">{monthData.month}</h4>
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden border border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {monthData.details.map((day, dayIndex) => (
                        <tr key={dayIndex} className="hover:bg-gray-50">
                          <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{day.date}</td>
                          <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              day.status === 'Present' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {day.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
   
  );
};

export default Attendance; 