import React, { useState } from 'react';

const StudentAssignments = () => {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: 'Math Project',
      subject: 'Mathematics',
      dueDate: '2024-03-20',
      status: 'pending',
      description: 'Complete the calculus project on derivatives',
      attachments: ['project_guidelines.pdf', 'sample_problems.pdf'],
      grade: null,
      feedback: null
    },
    {
      id: 2,
      title: 'Science Lab Report',
      subject: 'Science',
      dueDate: '2024-03-22',
      status: 'submitted',
      description: 'Write a lab report on the chemical reactions experiment',
      attachments: ['lab_manual.pdf'],
      grade: 'A',
      feedback: 'Excellent work on the experiment analysis'
    },
    {
      id: 3,
      title: 'English Essay',
      subject: 'English',
      dueDate: '2024-03-25',
      status: 'pending',
      description: 'Write an essay on Shakespeare\'s Macbeth',
      attachments: ['essay_guidelines.pdf', 'macbeth_text.pdf'],
      grade: null,
      feedback: null
    }
  ]);

  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [submission, setSubmission] = useState({
    file: null,
    comments: ''
  });

  const handleFileChange = (e) => {
    setSubmission(prev => ({
      ...prev,
      file: e.target.files[0]
    }));
  };

  const handleCommentsChange = (e) => {
    setSubmission(prev => ({
      ...prev,
      comments: e.target.value
    }));
  };

  const handleSubmit = (assignmentId) => {
    setAssignments(prev =>
      prev.map(assignment =>
        assignment.id === assignmentId
          ? { ...assignment, status: 'submitted' }
          : assignment
      )
    );
    setSelectedAssignment(null);
    setSubmission({ file: null, comments: '' });
  };

  const downloadAttachment = (filename) => {
    // Implement file download logic here
    console.log(`Downloading ${filename}`);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Assignments</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Grade</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {assignments.map((assignment) => (
                <tr key={assignment.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{assignment.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{assignment.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{assignment.dueDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      assignment.status === 'submitted' ? 'bg-green-100 text-green-800' :
                      assignment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {assignment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {assignment.grade || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      onClick={() => setSelectedAssignment(assignment)}
                      className="text-blue-600 hover:text-blue-900 mr-3"
                    >
                      View
                    </button>
                    {assignment.status === 'pending' && (
                      <button
                        onClick={() => setSelectedAssignment(assignment)}
                        className="text-green-600 hover:text-green-900"
                      >
                        Submit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Assignment Details Modal */}
      {selectedAssignment && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900">{selectedAssignment.title}</h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">{selectedAssignment.description}</p>
                
                {/* Attachments */}
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-700">Attachments:</h4>
                  <ul className="mt-2 space-y-2">
                    {selectedAssignment.attachments.map((file, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-sm text-gray-600">{file}</span>
                        <button
                          onClick={() => downloadAttachment(file)}
                          className="ml-2 text-blue-600 hover:text-blue-900"
                        >
                          Download
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submission Form */}
                {selectedAssignment.status === 'pending' && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700">Submit Assignment:</h4>
                    <div className="mt-2">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-blue-50 file:text-blue-700
                          hover:file:bg-blue-100"
                      />
                    </div>
                    <div className="mt-2">
                      <textarea
                        value={submission.comments}
                        onChange={handleCommentsChange}
                        placeholder="Add comments (optional)"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        rows="3"
                      />
                    </div>
                    <div className="mt-4 flex justify-end space-x-3">
                      <button
                        onClick={() => setSelectedAssignment(null)}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleSubmit(selectedAssignment.id)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}

                {/* Grade and Feedback */}
                {selectedAssignment.grade && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700">Grade: {selectedAssignment.grade}</h4>
                    <p className="mt-1 text-sm text-gray-600">{selectedAssignment.feedback}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentAssignments; 