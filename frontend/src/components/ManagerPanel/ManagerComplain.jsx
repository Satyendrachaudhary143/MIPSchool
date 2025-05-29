import React, { useState } from 'react';

const ManagerComplain = () => {
  const [filterSource, setFilterSource] = useState(''); // 'All', 'Student', 'Teacher'
  const [filterStatus, setFilterStatus] = useState(''); // 'All', 'Open', 'Resolved'
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [replyText, setReplyText] = useState('');

  // Placeholder data for complaints from students and teachers
  const allComplaints = [
    { id: 1, source: 'Student', sourceName: 'Rahul Sharma', sourceId: 'S001', subject: 'Class Schedule Conflict', message: 'The new schedule for 10th grade has conflicting timings for Math and Science.', date: '2024-03-18', status: 'Open' },
    { id: 2, source: 'Teacher', sourceName: 'Ms. Jane Doe', sourceId: 'T005', subject: 'Issue with Projector', message: 'The projector in room 301 is not working properly.', date: '2024-03-17', status: 'Open' },
    { id: 3, source: 'Student', sourceName: 'Priya Patel', sourceId: 'S002', subject: 'Library Book Availability', message: 'Could not find the required book for the English project in the library.', date: '2024-03-16', status: 'Resolved' },
    { id: 4, source: 'Student', sourceName: 'Amit Kumar', sourceId: 'S003', subject: 'Canteen Food Quality', message: 'The food in the canteen has not been up to the mark lately.', date: '2024-03-15', status: 'Open' },
    { id: 5, source: 'Teacher', sourceName: 'Mr. John Smith', sourceId: 'T002', subject: 'Software License Expired', message: 'The license for the design software in the computer lab has expired.', date: '2024-03-14', status: 'Resolved' },
    { id: 6, source: 'Student', sourceName: 'Rahul Sharma', sourceId: 'S001', subject: 'Exam Paper Re-evaluation', message: 'Requesting re-evaluation for the recent Science exam.', date: '2024-03-13', status: 'Open' },
  ];

  const handleFilterSourceChange = (e) => {
    setFilterSource(e.target.value);
  };

  const handleFilterStatusChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleViewComplaint = (complaint) => {
    setSelectedComplaint(complaint);
    setReplyText(''); // Clear previous reply text
  };

  const handleCloseModal = () => {
    setSelectedComplaint(null);
    setReplyText('');
  };

  const handleReplyChange = (e) => {
    setReplyText(e.target.value);
  };

  const handleSendReply = () => {
    if (replyText.trim()) {
      console.log(`Replying to complaint ${selectedComplaint.id}: ${replyText}`);
      // Here you would typically send the reply to the backend
      setReplyText('');
      // Optionally close modal or update status
    }
  };

  const handleResolveComplaint = (complaintId) => {
    console.log(`Resolving complaint ${complaintId}`);
    // Here you would typically update the status to 'Resolved' in your data/backend
    // For now, we'll just log it.
    handleCloseModal(); // Close modal after resolving
  };

  const filteredComplaints = allComplaints.filter(complaint => {
    const matchesSource = filterSource === '' || complaint.source === filterSource;
    const matchesStatus = filterStatus === '' || complaint.status === filterStatus;
    const matchesSearch = complaint.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          complaint.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          complaint.sourceName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSource && matchesStatus && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open': return 'bg-red-100 text-red-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Manage Complaints</h2>

      {/* Filters and Search */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Filter and Search Complaints</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="filterSource" className="block text-sm font-medium text-gray-700">Filter by Source</label>
            <select
              id="filterSource"
              value={filterSource}
              onChange={handleFilterSourceChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">All Sources</option>
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </select>
          </div>
          <div>
            <label htmlFor="filterStatus" className="block text-sm font-medium text-gray-700">Filter by Status</label>
            <select
              id="filterStatus"
              value={filterStatus}
              onChange={handleFilterStatusChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">All Statuses</option>
              <option value="Open">Open</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700">Search by Subject, Message, or Name</label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={handleSearchChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter keywords"
            />
          </div>
        </div>
      </div>

      {/* Complaints Table */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">All Complaints</h3>
        {filteredComplaints.length > 0 ? (
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden border border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Complainant</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredComplaints.map((complaint) => (
                      <tr key={complaint.id} className="hover:bg-gray-50">
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{complaint.source}</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{complaint.sourceName} ({complaint.sourceId})</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{complaint.subject}</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{complaint.date}</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(complaint.status)}`}>
                            {complaint.status}
                          </span>
                        </td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button onClick={() => handleViewComplaint(complaint)} className="text-blue-600 hover:text-blue-900 mr-2">View</button>
                          {complaint.status === 'Open' && (
                             <button onClick={() => handleResolveComplaint(complaint.id)} className="text-green-600 hover:text-green-900">Resolve</button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">No complaints found matching your criteria.</p>
        )}
      </div>

      {/* View Complaint Modal */}
      {selectedComplaint && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-full max-w-md shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Complaint Details</h3>
              <div className="space-y-4 text-sm text-gray-700">
                <p><strong>From:</strong> {selectedComplaint.sourceName} ({selectedComplaint.sourceId}) - {selectedComplaint.source}</p>
                <p><strong>Subject:</strong> {selectedComplaint.subject}</p>
                <p><strong>Date:</strong> {selectedComplaint.date}</p>
                <p><strong>Status:</strong> 
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(selectedComplaint.status)}`}>
                    {selectedComplaint.status}
                  </span>
                </p>
                <div>
                  <p><strong>Message:</strong></p>
                  <p className="mt-1 p-3 bg-gray-100 rounded-md">{selectedComplaint.message}</p>
                </div>

                {selectedComplaint.status === 'Open' && (
                  <div className="space-y-2">
                    <label htmlFor="reply" className="block text-sm font-medium text-gray-700">Your Reply:</label>
                    <textarea
                      id="reply"
                      rows="3"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      value={replyText}
                      onChange={handleReplyChange}
                      placeholder="Type your reply here..."
                    ></textarea>
                    <button
                      onClick={handleSendReply}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Send Reply
                    </button>
                  </div>
                )}
              </div>
              <div className="flex justify-end mt-4 space-x-2">
                 {selectedComplaint.status === 'Open' && (
                   <button
                     onClick={() => handleResolveComplaint(selectedComplaint.id)}
                     className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                   >
                     Mark as Resolved
                   </button>
                 )}
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagerComplain; 