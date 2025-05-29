import React, { useState } from 'react';

const TeacherAnalytics = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [timeRange, setTimeRange] = useState('semester');

  const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'];
  const subjects = ['Mathematics', 'Science', 'English', 'History', 'Geography', 'Computer Science'];

  // Mock data for demonstration
  const performanceData = {
    classAverage: 75,
    subjectAverage: 78,
    topPerformers: [
      { name: 'John Doe', score: 95, improvement: '+5%' },
      { name: 'Jane Smith', score: 92, improvement: '+3%' },
      { name: 'Mike Johnson', score: 90, improvement: '+7%' }
    ],
    strugglingStudents: [
      { name: 'Alice Brown', score: 65, improvement: '-2%' },
      { name: 'Bob Wilson', score: 62, improvement: '-5%' },
      { name: 'Carol Davis', score: 60, improvement: '-3%' }
    ],
    attendanceRate: 92,
    assignmentCompletion: 88,
    examResults: [
      { exam: 'Mid Term', average: 76, highest: 95, lowest: 55 },
      { exam: 'Final Term', average: 78, highest: 98, lowest: 60 }
    ]
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Student Performance Analytics</h2>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Class</label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Class</option>
              {classes.map((cls) => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Subject</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Time Range</label>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="semester">Current Semester</option>
              <option value="year">Academic Year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Class Average</h3>
          <p className="text-3xl font-bold text-blue-600">{performanceData.classAverage}%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Subject Average</h3>
          <p className="text-3xl font-bold text-green-600">{performanceData.subjectAverage}%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Attendance Rate</h3>
          <p className="text-3xl font-bold text-purple-600">{performanceData.attendanceRate}%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Assignment Completion</h3>
          <p className="text-3xl font-bold text-orange-600">{performanceData.assignmentCompletion}%</p>
        </div>
      </div>

      {/* Top Performers and Struggling Students */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Top Performers</h3>
          <div className="space-y-4">
            {performanceData.topPerformers.map((student, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">{student.name}</p>
                  <p className="text-sm text-gray-500">Score: {student.score}%</p>
                </div>
                <span className="text-green-600 font-medium">{student.improvement}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Students Needing Support</h3>
          <div className="space-y-4">
            {performanceData.strugglingStudents.map((student, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">{student.name}</p>
                  <p className="text-sm text-gray-500">Score: {student.score}%</p>
                </div>
                <span className="text-red-600 font-medium">{student.improvement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Exam Results */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Exam Results</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exam</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Highest</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lowest</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {performanceData.examResults.map((exam, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{exam.exam}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{exam.average}%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{exam.highest}%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{exam.lowest}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeacherAnalytics; 