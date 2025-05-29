import React, { useState } from 'react';

const TeacherFees = () => {
  const [studentIdentifierType, setStudentIdentifierType] = useState('email');
  const [studentIdentifier, setStudentIdentifier] = useState('');
  const [amount, setAmount] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const [endMonth, setEndMonth] = useState('');

  const handleIdentifierTypeChange = (e) => {
    setStudentIdentifierType(e.target.value);
  };

  const handleIdentifierChange = (e) => {
    setStudentIdentifier(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleStartMonthChange = (e) => {
    setStartMonth(e.target.value);
  };

  const handleEndMonthChange = (e) => {
    setEndMonth(e.target.value);
  };

  const handleRecordFee = (e) => {
    e.preventDefault();
    // Handle recording fee payment logic here
    console.log('Recording fee payment:', {
      studentIdentifierType,
      studentIdentifier,
      amount,
      startMonth,
      endMonth,
    });
    // Reset form
    setStudentIdentifierType('email');
    setStudentIdentifier('');
    setAmount('');
    setStartMonth('');
    setEndMonth('');
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Record Student Fees</h2>

      {/* Fee Recording Form */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Record Payment</h3>
        <form onSubmit={handleRecordFee} className="space-y-4">
          <div>
            <label htmlFor="studentIdentifierType" className="block text-sm font-medium text-gray-700">Identify Student By</label>
            <select
              id="studentIdentifierType"
              value={studentIdentifierType}
              onChange={handleIdentifierTypeChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="email">Email</option>
              <option value="mobile">Mobile</option>
              <option value="idcard">ID Card No.</option>
            </select>
          </div>
          <div>
            <label htmlFor="studentIdentifier" className="block text-sm font-medium text-gray-700">Student Identifier</label>
            <input
              type="text"
              id="studentIdentifier"
              value={studentIdentifier}
              onChange={handleIdentifierChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount (₹)</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
              min="0"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="startMonth" className="block text-sm font-medium text-gray-700">From Month</label>
              <input
                type="month"
                id="startMonth"
                value={startMonth}
                onChange={handleStartMonthChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="endMonth" className="block text-sm font-medium text-gray-700">To Month</label>
              <input
                type="month"
                id="endMonth"
                value={endMonth}
                onChange={handleEndMonthChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Record Fee Payment
            </button>
          </div>
        </form>
      </div>

      {/* Optional: Display recent fee records */}
      {/* <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Recent Records</h3>
        <p className="text-gray-600">Recent fee records will be shown here.</p>
      </div> */}
    </div>
  );
};

export default TeacherFees; 