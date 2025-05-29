import React, { useState } from 'react';

const ManagerAdmissions = () => {
  const [admissions, setAdmissions] = useState([
    { id: 1, name: 'Alice Johnson', applyingFor: '5th Grade', status: 'Pending', date: '2024-03-10', contact: 'alice@example.com', details: { fatherName: 'David Johnson', motherName: 'Emily Johnson', mobile: '1234567890', idType: 'Adharcard', idNumber: 'ABCD12345' } },
    { id: 2, name: 'Bob Williams', applyingFor: '8th Grade', status: 'Approved', date: '2024-03-05', contact: 'bob@example.com', details: { fatherName: 'Michael Williams', motherName: 'Sarah Williams', mobile: '0987654321', idType: 'Birth Certificate', idNumber: 'EFGH67890' } },
    { id: 3, name: 'Charlie Brown', applyingFor: '3rd Grade', status: 'Rejected', date: '2024-03-01', contact: 'charlie@example.com', details: { fatherName: 'Chris Brown', motherName: 'Patricia Brown', mobile: '1122334455', idType: 'Previous School ID', idNumber: 'IJKL13579' } },
    // Add more admission data as needed
  ]);

  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedAdmission, setSelectedAdmission] = useState(null);

  const handleViewDetails = (admission) => {
    setSelectedAdmission(admission);
    setShowDetailsModal(true);
  };

  const handleApprove = (id) => {
    if (window.confirm('Are you sure you want to approve this admission?')) {
      setAdmissions(admissions.map(ad => ad.id === id ? { ...ad, status: 'Approved' } : ad));
      // Implement actual approval logic (e.g., API call)
    }
  };

  const handleReject = (id) => {
    if (window.confirm('Are you sure you want to reject this admission?')) {
      setAdmissions(admissions.map(ad => ad.id === id ? { ...ad, status: 'Rejected' } : ad));
      // Implement actual rejection logic (e.g., API call)
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Manage Admissions</h2>

      {/* Admissions Table */}
      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Admission Requests</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicant Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applying For</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {admissions.map((ad) => (
              <tr key={ad.id} className="hover:bg-gray-50">
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ad.name}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">{ad.applyingFor}</td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    ad.status === 'Approved' ? 'bg-green-100 text-green-800' :
                    ad.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {ad.status}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">{ad.date}</td>
                <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => handleViewDetails(ad)} className="text-blue-600 hover:text-blue-900 mr-4">View Details</button>
                  {ad.status === 'Pending' && (
                    <>
                      <button onClick={() => handleApprove(ad.id)} className="text-green-600 hover:text-green-900 mr-4">Approve</button>
                      <button onClick={() => handleReject(ad.id)} className="text-red-600 hover:text-red-900">Reject</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Admission Details Modal */}
      {showDetailsModal && selectedAdmission && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="admission-details-modal">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <h3 className="text-lg font-bold leading-6 text-gray-900 mb-4">Admission Details</h3>
            <div className="mt-2 space-y-4 text-sm text-gray-600">
              <p><strong>Name:</strong> {selectedAdmission.name}</p>
              <p><strong>Applying For:</strong> {selectedAdmission.applyingFor}</p>
              <p><strong>Status:</strong> {selectedAdmission.status}</p>
              <p><strong>Date:</strong> {selectedAdmission.date}</p>
              <p><strong>Contact Email:</strong> {selectedAdmission.contact}</p>
              <p><strong>Father's Name:</strong> {selectedAdmission.details.fatherName}</p>
              <p><strong>Mother's Name:</strong> {selectedAdmission.details.motherName}</p>
              <p><strong>Mobile:</strong> {selectedAdmission.details.mobile}</p>
              <p><strong>ID Type:</strong> {selectedAdmission.details.idType}</p>
              <p><strong>ID Number:</strong> {selectedAdmission.details.idNumber}</p>
            </div>
            <div className="items-center px-4 py-3">
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

export default ManagerAdmissions; 