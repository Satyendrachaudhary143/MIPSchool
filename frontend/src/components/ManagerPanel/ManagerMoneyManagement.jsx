import React, { useState } from 'react';

const ManagerMoneyManagement = () => {
  const [selectedMonth, setSelectedMonth] = useState('March 2024');
  const [selectedYear, setSelectedYear] = useState('2024');

  // Placeholder data for financial transactions
  const financialData = {
    currentMonth: {
      income: {
        total: 1500000,
        details: [
          { category: 'Student Fees', amount: 1200000, count: 80 },
          { category: 'Admission Fees', amount: 200000, count: 20 },
          { category: 'Other Income', amount: 100000, count: 5 }
        ]
      },
      expenses: {
        total: 800000,
        details: [
          { category: 'Teacher Salaries', amount: 500000, count: 15 },
          { category: 'Staff Salaries', amount: 200000, count: 10 },
          { category: 'Maintenance', amount: 50000, count: 1 },
          { category: 'Utilities', amount: 50000, count: 1 }
        ]
      }
    },
    yearlySummary: {
      income: {
        total: 18000000,
        monthlyAverage: 1500000,
        growth: 15 // percentage
      },
      expenses: {
        total: 9600000,
        monthlyAverage: 800000,
        growth: 10 // percentage
      }
    },
    recentTransactions: [
      { date: '2024-03-15', type: 'Income', category: 'Student Fees', amount: 150000, description: 'Monthly fees collection' },
      { date: '2024-03-14', type: 'Expense', category: 'Teacher Salaries', amount: 500000, description: 'Monthly salary payment' },
      { date: '2024-03-10', type: 'Income', category: 'Admission Fees', amount: 50000, description: 'New student admission' },
      { date: '2024-03-05', type: 'Expense', category: 'Maintenance', amount: 25000, description: 'Building maintenance' }
    ]
  };

  const profit = financialData.currentMonth.income.total - financialData.currentMonth.expenses.total;
  const profitMargin = (profit / financialData.currentMonth.income.total) * 100;

  const yearlyProfit = financialData.yearlySummary.income.total - financialData.yearlySummary.expenses.total;
  const yearlyProfitMargin = (yearlyProfit / financialData.yearlySummary.income.total) * 100;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Money Management</h2>

      {/* Month/Year Selection */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="month" className="block text-sm font-medium text-gray-700">Select Month</label>
            <select
              id="month"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="March 2024">March 2024</option>
              <option value="February 2024">February 2024</option>
              <option value="January 2024">January 2024</option>
            </select>
          </div>
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700">Select Year</label>
            <select
              id="year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
          </div>
        </div>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Income Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Income</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Income</span>
              <span className="text-2xl font-bold text-green-600">₹{financialData.currentMonth.income.total.toLocaleString()}</span>
            </div>
            {financialData.currentMonth.income.details.map((item, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <span className="text-gray-600">{item.category}</span>
                <span className="text-gray-900">₹{item.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expenses Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Expenses</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Expenses</span>
              <span className="text-2xl font-bold text-red-600">₹{financialData.currentMonth.expenses.total.toLocaleString()}</span>
            </div>
            {financialData.currentMonth.expenses.details.map((item, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <span className="text-gray-600">{item.category}</span>
                <span className="text-gray-900">₹{item.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Profit Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Profit</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Net Profit</span>
              <span className={`text-2xl font-bold ${profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ₹{profit.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Profit Margin</span>
              <span className={`text-lg font-semibold ${profitMargin >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {profitMargin.toFixed(1)}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Yearly Summary */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Yearly Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-md font-medium text-gray-700 mb-2">Income Summary</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Income</span>
                <span className="text-lg font-semibold text-green-600">₹{financialData.yearlySummary.income.total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Monthly Average</span>
                <span className="text-gray-900">₹{financialData.yearlySummary.income.monthlyAverage.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Growth</span>
                <span className="text-green-600">+{financialData.yearlySummary.income.growth}%</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-md font-medium text-gray-700 mb-2">Expense Summary</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Expenses</span>
                <span className="text-lg font-semibold text-red-600">₹{financialData.yearlySummary.expenses.total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Monthly Average</span>
                <span className="text-gray-900">₹{financialData.yearlySummary.expenses.monthlyAverage.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Growth</span>
                <span className="text-red-600">+{financialData.yearlySummary.expenses.growth}%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Yearly Net Profit</span>
            <span className={`text-xl font-bold ${yearlyProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ₹{yearlyProfit.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-600">Yearly Profit Margin</span>
            <span className={`text-lg font-semibold ${yearlyProfitMargin >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {yearlyProfitMargin.toFixed(1)}%
            </span>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {financialData.recentTransactions.map((transaction, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{transaction.date}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      transaction.type === 'Income' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {transaction.type}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{transaction.category}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{transaction.description}</td>
                  <td className={`px-4 py-3 whitespace-nowrap text-sm font-medium ${
                    transaction.type === 'Income' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    ₹{transaction.amount.toLocaleString()}
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

export default ManagerMoneyManagement; 