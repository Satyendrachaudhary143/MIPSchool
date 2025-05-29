import React, { useState } from 'react';

const ManagerFeeStructure = () => {
    const [feeStructures, setFeeStructures] = useState([
        // Placeholder data for fee structures
        { id: 1, className: '10th Grade', month: 'Monthly', amount: 5000 },
        { id: 2, className: '11th Grade', month: 'Monthly', amount: 5500 },
        { id: 3, className: '12th Grade', month: 'Monthly', amount: 6000 },
        { id: 4, className: '10th Grade', month: 'Annual', amount: 55000 },
    ]);
    const [newFeeStructureClass, setNewFeeStructureClass] = useState('10th Grade');
    const [newFeeStructureMonth, setNewFeeStructureMonth] = useState('Monthly');
    const [newFeeStructureAmount, setNewFeeStructureAmount] = useState('');

    // Function to handle adding fee structure
    const handleAddFeeStructure = () => {
        if (newFeeStructureAmount.trim() === '' || newFeeStructureClass === '' || newFeeStructureMonth === '') {
            alert('Please fill in all fee structure details.');
            return;
        }
        const newStructure = {
            id: feeStructures.length + 1,
            className: newFeeStructureClass,
            month: newFeeStructureMonth,
            amount: parseFloat(newFeeStructureAmount) // Convert amount to number
        };
        setFeeStructures([...feeStructures, newStructure]);
        setNewFeeStructureAmount('');
        console.log('Added new fee structure:', newStructure);
    };

    // Function to handle deleting fee structure (Placeholder)
    const handleDeleteFeeStructure = (id) => {
        setFeeStructures(feeStructures.filter(structure => structure.id !== id));
        console.log('Deleted fee structure with id:', id);
    };

    return (
        <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Fee Structure Management</h2>

            {/* Fee Structure Creation */}
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
                <h3 className="text-lg md:text-xl font-semibold mb-4">Define Fee Structure</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    <div>
                        <label htmlFor="feeStructureClass" className="block text-sm font-medium text-gray-700">Class</label>
                        <select
                            id="feeStructureClass"
                            value={newFeeStructureClass}
                            onChange={(e) => setNewFeeStructureClass(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                            <option value="10th Grade">10th Grade</option>
                            <option value="11th Grade">11th Grade</option>
                            <option value="12th Grade">12th Grade</option>
                            {/* Add other classes as needed */}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="feeStructurePeriod" className="block text-sm font-medium text-gray-700">Period</label>
                        <select
                            id="feeStructurePeriod"
                            value={newFeeStructureMonth}
                            onChange={(e) => setNewFeeStructureMonth(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                            <option value="Monthly">Monthly</option>
                            <option value="Quarterly">Quarterly</option>
                            <option value="Annual">Annual</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="feeStructureAmount" className="block text-sm font-medium text-gray-700">Amount (₹)</label>
                        <input
                            type="number"
                            id="feeStructureAmount"
                            value={newFeeStructureAmount}
                            onChange={(e) => setNewFeeStructureAmount(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Enter amount"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <button
                        onClick={handleAddFeeStructure}
                        className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                    >
                        Add Fee Structure Entry
                    </button>
                </div>
            </div>

            {/* Existing Fee Structures Table */}
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
                <h3 className="text-lg md:text-xl font-semibold mb-4">Existing Fee Structures</h3>
                {feeStructures.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Period</th>
                                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount (₹)</th>
                                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {feeStructures.map((structure) => (
                                    <tr key={structure.id} className="hover:bg-gray-50">
                                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{structure.className}</td>
                                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{structure.month}</td>
                                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{structure.amount}</td>
                                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <button onClick={() => handleDeleteFeeStructure(structure.id)} className="text-red-600 hover:text-red-900">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-gray-600">No fee structures defined yet.</p>
                )}
            </div>
        </div>
    );
};

export default ManagerFeeStructure; 