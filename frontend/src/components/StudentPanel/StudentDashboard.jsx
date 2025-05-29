import React, { useState } from 'react';

const StudentDashboard = () => {
  const [academicPerformance] = useState({
    overallGrade: 'A',
    subjects: [
      { name: 'Mathematics', grade: 'A+', progress: 95 },
      { name: 'Science', grade: 'A', progress: 90 },
      { name: 'English', grade: 'A-', progress: 85 },
      { name: 'History', grade: 'B+', progress: 80 }
    ]
  });

  const [upcomingAssignments] = useState([
    { id: 1, title: 'Math Project', dueDate: '2024-03-20', subject: 'Mathematics', status: 'pending' },
    { id: 2, title: 'Science Lab Report', dueDate: '2024-03-22', subject: 'Science', status: 'pending' },
    { id: 3, title: 'English Essay', dueDate: '2024-03-25', subject: 'English', status: 'pending' }
  ]);

  const [attendance] = useState({
    present: 45,
    absent: 3,
    late: 2,
    percentage: 90
  });

  const [feeStatus] = useState({
    total: 5000,
    paid: 4000,
    pending: 1000,
    nextDue: '2024-04-01'
  });

  const [notifications] = useState([
    { id: 1, title: 'New Assignment Posted', message: 'Math Project due next week', date: '2024-03-15' },
    { id: 2, title: 'Fee Payment Reminder', message: 'Please pay pending fees', date: '2024-03-14' },
    { id: 3, title: 'Parent-Teacher Meeting', message: 'Scheduled for next Friday', date: '2024-03-13' }
  ]);

  return (
    <div className="space-y-6">
      {/* Academic Performance */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Academic Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900">Overall Grade</h3>
            <p className="text-4xl font-bold text-blue-700">{academicPerformance.overallGrade}</p>
          </div>
          <div className="space-y-4">
            {academicPerformance.subjects.map((subject, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">{subject.name}</span>
                  <span className="text-lg font-bold text-blue-600">{subject.grade}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${subject.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Assignments */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Upcoming Assignments</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {upcomingAssignments.map((assignment) => (
                <tr key={assignment.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{assignment.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{assignment.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{assignment.dueDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      {assignment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Attendance Summary */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Attendance Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-900">Present</h3>
            <p className="text-2xl font-bold text-green-700">{attendance.present}</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-red-900">Absent</h3>
            <p className="text-2xl font-bold text-red-700">{attendance.absent}</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-900">Late</h3>
            <p className="text-2xl font-bold text-yellow-700">{attendance.late}</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900">Attendance %</h3>
            <p className="text-2xl font-bold text-blue-700">{attendance.percentage}%</p>
          </div>
        </div>
      </div>

      {/* Fee Status */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Fee Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900">Total Fee</h3>
            <p className="text-2xl font-bold text-blue-700">${feeStatus.total}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-900">Paid</h3>
            <p className="text-2xl font-bold text-green-700">${feeStatus.paid}</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-red-900">Pending</h3>
            <p className="text-2xl font-bold text-red-700">${feeStatus.pending}</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-900">Next Due</h3>
            <p className="text-2xl font-bold text-purple-700">{feeStatus.nextDue}</p>
          </div>
        </div>
      </div>

      {/* Recent Notifications */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Notifications</h2>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{notification.title}</h3>
                  <p className="text-gray-600">{notification.message}</p>
                </div>
                <span className="text-sm text-gray-500">{notification.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard; 