import React, { useState } from 'react';

const TeacherExamSchedule = () => {
  const [examSchedules, setExamSchedules] = useState([]);
  const [newExam, setNewExam] = useState({
    examName: '',
    class: '',
    subject: '',
    date: '',
    startTime: '',
    endTime: '',
    roomNumber: '',
    totalMarks: '',
    instructions: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExam(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExamSchedules(prev => [...prev, { ...newExam, id: Date.now() }]);
    setNewExam({
      examName: '',
      class: '',
      subject: '',
      date: '',
      startTime: '',
      endTime: '',
      roomNumber: '',
      totalMarks: '',
      instructions: ''
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Exam Schedule Management</h2>

      {/* Create New Exam Schedule */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Create New Exam Schedule</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Exam Name</label>
              <input
                type="text"
                name="examName"
                value={newExam.examName}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Class</label>
              <input
                type="text"
                name="class"
                value={newExam.class}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                value={newExam.subject}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={newExam.date}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Start Time</label>
              <input
                type="time"
                name="startTime"
                value={newExam.startTime}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">End Time</label>
              <input
                type="time"
                name="endTime"
                value={newExam.endTime}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Room Number</label>
              <input
                type="text"
                name="roomNumber"
                value={newExam.roomNumber}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Total Marks</label>
              <input
                type="number"
                name="totalMarks"
                value={newExam.totalMarks}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Instructions</label>
            <textarea
              name="instructions"
              value={newExam.instructions}
              onChange={handleInputChange}
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Create Schedule
            </button>
          </div>
        </form>
      </div>

      {/* Exam Schedules List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Exams</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exam Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marks</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {examSchedules.map((exam) => (
                <tr key={exam.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{exam.examName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{exam.class}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{exam.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{exam.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{`${exam.startTime} - ${exam.endTime}`}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{exam.roomNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{exam.totalMarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeacherExamSchedule; 