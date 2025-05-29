import React, { useState } from 'react';

const StudentExams = () => {
  const [examSchedule] = useState([
    {
      id: 1,
      subject: 'Mathematics',
      examType: 'Mid-term',
      date: '2024-03-25',
      time: '09:00 AM',
      duration: '3 hours',
      room: 'Room 101',
      status: 'upcoming'
    },
    {
      id: 2,
      subject: 'Science',
      examType: 'Mid-term',
      date: '2024-03-27',
      time: '09:00 AM',
      duration: '3 hours',
      room: 'Room 102',
      status: 'upcoming'
    },
    {
      id: 3,
      subject: 'English',
      examType: 'Mid-term',
      date: '2024-03-29',
      time: '09:00 AM',
      duration: '3 hours',
      room: 'Room 103',
      status: 'upcoming'
    }
  ]);

  const [examResults] = useState([
    {
      id: 1,
      subject: 'History',
      examType: 'Unit Test',
      date: '2024-03-15',
      marks: 85,
      totalMarks: 100,
      grade: 'A',
      remarks: 'Good performance'
    },
    {
      id: 2,
      subject: 'Geography',
      examType: 'Unit Test',
      date: '2024-03-10',
      marks: 78,
      totalMarks: 100,
      grade: 'B+',
      remarks: 'Satisfactory'
    }
  ]);

  const [selectedResult, setSelectedResult] = useState(null);

  const calculatePercentage = (marks, totalMarks) => {
    return ((marks / totalMarks) * 100).toFixed(1);
  };

  return (
    <div className="space-y-6">
      {/* Exam Schedule */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Upcoming Exams</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Exam Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Room</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {examSchedule.map((exam) => (
                <tr key={exam.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{exam.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{exam.examType}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{exam.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{exam.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{exam.duration}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{exam.room}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Exam Results */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Exam Results</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Exam Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Marks</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Grade</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {examResults.map((result) => (
                <tr key={result.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{result.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{result.examType}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{result.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {result.marks}/{result.totalMarks} ({calculatePercentage(result.marks, result.totalMarks)}%)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      result.grade === 'A' ? 'bg-green-100 text-green-800' :
                      result.grade === 'B+' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {result.grade}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      onClick={() => setSelectedResult(result)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Result Details Modal */}
      {selectedResult && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900">Result Details</h3>
              <div className="mt-2 px-7 py-3">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Subject</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedResult.subject}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Exam Type</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedResult.examType}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Date</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedResult.date}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Marks</h4>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedResult.marks}/{selectedResult.totalMarks} ({calculatePercentage(selectedResult.marks, selectedResult.totalMarks)}%)
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Grade</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedResult.grade}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Remarks</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedResult.remarks}</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => setSelectedResult(null)}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                  >
                    Close
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

export default StudentExams; 