import React, { useState } from 'react';

const Complain = () => {
  const [subject, setSubject] = useState('');
  const [details, setDetails] = useState('');
  const [complaints, setComplaints] = useState([]);

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleDetailsChange = (e) => {
    setDetails(e.target.value);
  };

  const handleSubmitComplain = (e) => {
    e.preventDefault();
    if (subject && details) {
      const newComplaint = {
        id: complaints.length + 1,
        subject,
        details,
        date: new Date().toLocaleDateString(),
        status: 'Pending',
      };
      setComplaints([...complaints, newComplaint]);
      setSubject('');
      setDetails('');
      console.log('Complaint submitted:', newComplaint);
    } else {
      alert('Please fill out both subject and details.');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Submit a Complaint</h2>

      {/* Complaint Submission Form */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">New Complaint</h3>
        <form onSubmit={handleSubmitComplain} className="space-y-4">
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={handleSubjectChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="details" className="block text-sm font-medium text-gray-700">Details</label>
            <textarea
              id="details"
              rows="4"
              value={details}
              onChange={handleDetailsChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit Complaint
            </button>
          </div>
        </form>
      </div>

      {/* Complaint History */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Complaint History</h3>
        {complaints.length > 0 ? (
          <div className="overflow-x-auto">
            <div className="min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {complaints.map((complaint) => (
                      <tr key={complaint.id} className="hover:bg-gray-50">
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{complaint.subject}</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{complaint.date}</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(complaint.status)}`}>
                            {complaint.status}
                          </span>
                        </td>
                        <td className="px-4 md:px-6 py-4 text-sm text-gray-500">{complaint.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">No complaint history available.</p>
        )}
      </div>
    </div>
  );
};

export default Complain; 