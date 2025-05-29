import React, { useState } from 'react';

const StudentFeePayment = () => {
  const [feeDetails] = useState({
    totalFee: 50000,
    paidAmount: 35000,
    pendingAmount: 15000,
    nextDueDate: '2024-04-15',
    paymentSchedule: [
      {
        id: 1,
        dueDate: '2024-01-15',
        amount: 12500,
        status: 'paid',
        paymentDate: '2024-01-10',
        paymentMethod: 'Online Transfer',
        receiptNumber: 'RCPT001'
      },
      {
        id: 2,
        dueDate: '2024-02-15',
        amount: 12500,
        status: 'paid',
        paymentDate: '2024-02-12',
        paymentMethod: 'Credit Card',
        receiptNumber: 'RCPT002'
      },
      {
        id: 3,
        dueDate: '2024-03-15',
        amount: 12500,
        status: 'paid',
        paymentDate: '2024-03-14',
        paymentMethod: 'Debit Card',
        receiptNumber: 'RCPT003'
      },
      {
        id: 4,
        dueDate: '2024-04-15',
        amount: 12500,
        status: 'pending',
        paymentDate: null,
        paymentMethod: null,
        receiptNumber: null
      }
    ]
  });

  const [selectedPayment, setSelectedPayment] = useState(null);
  const [isPaying, setIsPaying] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePayment = (paymentId) => {
    // Here you would typically integrate with a payment gateway
    console.log(`Processing payment for schedule ${paymentId}`);
    setIsPaying(false);
  };

  const handleDownloadReceipt = (receiptNumber) => {
    // Here you would typically generate and download the receipt
    console.log(`Downloading receipt ${receiptNumber}`);
  };

  return (
    <div className="space-y-6">
      {/* Fee Overview */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Fee Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-blue-800">Total Fee</h3>
            <p className="mt-1 text-2xl font-semibold text-blue-900">
              ₹{feeDetails.totalFee.toLocaleString()}
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-green-800">Paid Amount</h3>
            <p className="mt-1 text-2xl font-semibold text-green-900">
              ₹{feeDetails.paidAmount.toLocaleString()}
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-red-800">Pending Amount</h3>
            <p className="mt-1 text-2xl font-semibold text-red-900">
              ₹{feeDetails.pendingAmount.toLocaleString()}
            </p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-yellow-800">Next Due Date</h3>
            <p className="mt-1 text-2xl font-semibold text-yellow-900">
              {new Date(feeDetails.nextDueDate).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Payment Schedule */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Schedule</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment Method</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Receipt</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {feeDetails.paymentSchedule.map((payment) => (
                <tr key={payment.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(payment.dueDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ₹{payment.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      payment.status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {payment.paymentDate ? new Date(payment.paymentDate).toLocaleDateString() : '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {payment.paymentMethod || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {payment.receiptNumber || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.status === 'paid' ? (
                      <button
                        onClick={() => handleDownloadReceipt(payment.receiptNumber)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        Download Receipt
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setSelectedPayment(payment);
                          setIsPaying(true);
                        }}
                        className="text-green-600 hover:text-green-900"
                      >
                        Pay Now
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Modal */}
      {isPaying && selectedPayment && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900">Make Payment</h3>
              <div className="mt-2 px-7 py-3">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Amount Due</h4>
                    <p className="mt-1 text-sm text-gray-900">
                      ₹{selectedPayment.amount.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Due Date</h4>
                    <p className="mt-1 text-sm text-gray-900">
                      {new Date(selectedPayment.dueDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">Select a payment method</option>
                      <option value="credit_card">Credit Card</option>
                      <option value="debit_card">Debit Card</option>
                      <option value="net_banking">Net Banking</option>
                      <option value="upi">UPI</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4 flex justify-end space-x-3">
                  <button
                    onClick={() => {
                      setIsPaying(false);
                      setSelectedPayment(null);
                    }}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handlePayment(selectedPayment.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Proceed to Pay
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

export default StudentFeePayment; 