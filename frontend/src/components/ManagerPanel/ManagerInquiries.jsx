import React, { useState } from 'react';

const ManagerInquiries = () => {
  const [inquiries, setInquiries] = useState([
    { id: 1, name: 'Alice Smith', contact: 'alice.s@example.com', message: 'I have a question about the admission process for 7th grade.', date: '2024-03-18', status: 'Pending' },
    { id: 2, name: 'Bob Johnson', contact: '123-456-7890', message: 'Could you please provide details about the school bus routes and timings?', date: '2024-03-17', status: 'Replied' },
    { id: 3, name: 'Charlie Brown', contact: 'charlie.b@example.com', message: 'Interested in the fee structure for primary school.', date: '2024-03-16', status: 'Pending' },
    // Add more placeholder inquiries as needed
  ]);

  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  const handleViewDetails = (inquiry) => {
    setSelectedInquiry(inquiry);
    setShowDetailsModal(true);
  };

  const handleReply = (id) => {
    console.log(`Replying to inquiry with ID: ${id}`);
    // Implement actual reply logic (e.g., open email client, mark as replied)
    setInquiries(inquiries.map(inquiry => inquiry.id === id ? { ...inquiry, status: 'Replied' } : inquiry));
    setShowDetailsModal(false); // Close modal after action (optional)
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Manage Inquiries</h2>

      {/* Inquiries Table */}
      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Received Inquiries</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
               <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {inquiries.map((inquiry) => (
              <tr key={inquiry.id} className="hover:bg-gray-50">
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{inquiry.name}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">{inquiry.contact}</td>
                 <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">{inquiry.date}</td>
                 <td className="px-4 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    inquiry.status === 'Replied' ? 'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {inquiry.status}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => handleViewDetails(inquiry)} className="text-blue-600 hover:text-blue-900 mr-4">View Details</button>
                  {inquiry.status === 'Pending' && (
                    <button onClick={() => handleReply(inquiry.id)} className="text-green-600 hover:text-green-900">Mark as Replied</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Inquiry Details Modal */}
      {showDetailsModal && selectedInquiry && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="inquiry-details-modal">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <h3 className="text-lg font-bold leading-6 text-gray-900 mb-4">Inquiry Details</h3>
            <div className="mt-2 space-y-4 text-sm text-gray-600">
              <p><strong>Name:</strong> {selectedInquiry.name}</p>
              <p><strong>Contact:</strong> {selectedInquiry.contact}</p>
              <p><strong>Date:</strong> {selectedInquiry.date}</p>
              <p><strong>Status:</strong> {selectedInquiry.status}</p>
              <p><strong>Message:</strong></p>
              <p className="bg-gray-100 p-3 rounded-md">{selectedInquiry.message}</p>
            </div>
            <div className="items-center px-4 py-3">
               {selectedInquiry.status === 'Pending' && (
                    <button
                        id="mark-replied-btn"
                        onClick={() => handleReply(selectedInquiry.id)}
                         className="px-4 py-2 bg-green-600 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mb-3"
                    >
                        Mark as Replied
                    </button>
                )}
              <button
                id="close-modal-btn"
                onClick={() => setShowDetailsModal(false)}
                className="px-4 py-2 bg-blue-600 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagerInquiries;