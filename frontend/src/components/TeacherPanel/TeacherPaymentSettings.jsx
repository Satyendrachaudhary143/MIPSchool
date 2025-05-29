import React, { useState } from 'react';

const TeacherPaymentSettings = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    accountHolderName: '',
    upiId: '',
    preferredPaymentMethod: 'bank', // 'bank' or 'upi'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to save the payment information
    console.log('Saving payment information:', paymentInfo);
    setIsEditing(false);
    // Show success message
    alert('Payment information updated successfully!');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Payment Settings</h2>

      {/* Current Payment Information */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Payment Information</h3>
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Edit Information
          </button>
        </div>

        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Payment Method</label>
                <select
                  name="preferredPaymentMethod"
                  value={paymentInfo.preferredPaymentMethod}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="bank">Bank Transfer</option>
                  <option value="upi">UPI</option>
                </select>
              </div>

              {paymentInfo.preferredPaymentMethod === 'bank' ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Bank Name</label>
                    <input
                      type="text"
                      name="bankName"
                      value={paymentInfo.bankName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Account Number</label>
                    <input
                      type="text"
                      name="accountNumber"
                      value={paymentInfo.accountNumber}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">IFSC Code</label>
                    <input
                      type="text"
                      name="ifscCode"
                      value={paymentInfo.ifscCode}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Account Holder Name</label>
                    <input
                      type="text"
                      name="accountHolderName"
                      value={paymentInfo.accountHolderName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-700">UPI ID</label>
                  <input
                    type="text"
                    name="upiId"
                    value={paymentInfo.upiId}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="example@upi"
                    required
                  />
                </div>
              )}
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Preferred Payment Method</p>
                <p className="mt-1 text-sm text-gray-900">
                  {paymentInfo.preferredPaymentMethod === 'bank' ? 'Bank Transfer' : 'UPI'}
                </p>
              </div>

              {paymentInfo.preferredPaymentMethod === 'bank' ? (
                <>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Bank Name</p>
                    <p className="mt-1 text-sm text-gray-900">{paymentInfo.bankName || 'Not set'}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Account Number</p>
                    <p className="mt-1 text-sm text-gray-900">{paymentInfo.accountNumber || 'Not set'}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">IFSC Code</p>
                    <p className="mt-1 text-sm text-gray-900">{paymentInfo.ifscCode || 'Not set'}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Account Holder Name</p>
                    <p className="mt-1 text-sm text-gray-900">{paymentInfo.accountHolderName || 'Not set'}</p>
                  </div>
                </>
              ) : (
                <div>
                  <p className="text-sm font-medium text-gray-500">UPI ID</p>
                  <p className="mt-1 text-sm text-gray-900">{paymentInfo.upiId || 'Not set'}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Payment Information Notice */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              Please ensure your payment information is accurate. Any errors in the provided details may result in delayed salary payments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherPaymentSettings; 