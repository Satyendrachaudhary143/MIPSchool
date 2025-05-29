import React, { useState } from 'react';

const ManagerBudget = () => {
  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [newBudget, setNewBudget] = useState({
    category: '',
    amount: '',
    period: '',
    description: '',
    status: 'active'
  });
  const [newExpense, setNewExpense] = useState({
    category: '',
    amount: '',
    date: '',
    description: '',
    paymentMethod: '',
    status: 'pending'
  });

  const handleBudgetInputChange = (e) => {
    const { name, value } = e.target;
    setNewBudget(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleExpenseInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBudgetSubmit = (e) => {
    e.preventDefault();
    setBudgets(prev => [...prev, { ...newBudget, id: Date.now() }]);
    setNewBudget({
      category: '',
      amount: '',
      period: '',
      description: '',
      status: 'active'
    });
  };

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    setExpenses(prev => [...prev, { ...newExpense, id: Date.now() }]);
    setNewExpense({
      category: '',
      amount: '',
      date: '',
      description: '',
      paymentMethod: '',
      status: 'pending'
    });
  };

  const handleExpenseStatusChange = (id, newStatus) => {
    setExpenses(prev =>
      prev.map(expense =>
        expense.id === id ? { ...expense, status: newStatus } : expense
      )
    );
  };

  const deleteBudget = (id) => {
    setBudgets(prev => prev.filter(budget => budget.id !== id));
  };

  const deleteExpense = (id) => {
    setExpenses(prev => prev.filter(expense => expense.id !== id));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const totalBudget = budgets.reduce((sum, budget) => sum + Number(budget.amount), 0);
  const totalExpenses = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
  const remainingBalance = totalBudget - totalExpenses;

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Financial Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900">Total Budget</h3>
            <p className="text-2xl font-bold text-blue-700">{formatCurrency(totalBudget)}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-900">Total Expenses</h3>
            <p className="text-2xl font-bold text-green-700">{formatCurrency(totalExpenses)}</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-900">Remaining Balance</h3>
            <p className="text-2xl font-bold text-purple-700">{formatCurrency(remainingBalance)}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Budget Form */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Add New Budget</h2>
          <form onSubmit={handleBudgetSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                name="category"
                value={newBudget.category}
                onChange={handleBudgetInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Select Category</option>
                <option value="Academic">Academic</option>
                <option value="Administrative">Administrative</option>
                <option value="Facilities">Facilities</option>
                <option value="Technology">Technology</option>
                <option value="Events">Events</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Amount</label>
              <input
                type="number"
                name="amount"
                value={newBudget.amount}
                onChange={handleBudgetInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Period</label>
              <select
                name="period"
                value={newBudget.period}
                onChange={handleBudgetInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Select Period</option>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Annual">Annual</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={newBudget.description}
                onChange={handleBudgetInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows="3"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add Budget
            </button>
          </form>
        </div>

        {/* Expense Form */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Record New Expense</h2>
          <form onSubmit={handleExpenseSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                name="category"
                value={newExpense.category}
                onChange={handleExpenseInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Select Category</option>
                <option value="Academic">Academic</option>
                <option value="Administrative">Administrative</option>
                <option value="Facilities">Facilities</option>
                <option value="Technology">Technology</option>
                <option value="Events">Events</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Amount</label>
              <input
                type="number"
                name="amount"
                value={newExpense.amount}
                onChange={handleExpenseInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={newExpense.date}
                onChange={handleExpenseInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Payment Method</label>
              <select
                name="paymentMethod"
                value={newExpense.paymentMethod}
                onChange={handleExpenseInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Select Payment Method</option>
                <option value="Cash">Cash</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Check">Check</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={newExpense.description}
                onChange={handleExpenseInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows="3"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Record Expense
            </button>
          </form>
        </div>
      </div>

      {/* Budgets List */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Budgets</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Period</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {budgets.map((budget) => (
                <tr key={budget.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{budget.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatCurrency(budget.amount)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{budget.period}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      budget.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {budget.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      onClick={() => deleteBudget(budget.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Expenses List */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Expenses</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Method</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {expenses.map((expense) => (
                <tr key={expense.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{expense.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatCurrency(expense.amount)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{expense.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{expense.paymentMethod}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={expense.status}
                      onChange={(e) => handleExpenseStatusChange(expense.id, e.target.value)}
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        expense.status === 'approved' ? 'bg-green-100 text-green-800' :
                        expense.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}
                    >
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      onClick={() => deleteExpense(expense.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
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

export default ManagerBudget; 