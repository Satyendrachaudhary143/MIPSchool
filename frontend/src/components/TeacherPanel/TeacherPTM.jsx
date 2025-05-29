import React, { useState } from 'react';

const TeacherPTM = () => {
  const [meetings, setMeetings] = useState([]);
  const [newMeeting, setNewMeeting] = useState({
    studentName: '',
    parentName: '',
    date: '',
    time: '',
    duration: '15',
    purpose: '',
    notes: '',
    status: 'scheduled'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMeeting(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMeetings(prev => [...prev, { ...newMeeting, id: Date.now() }]);
    setNewMeeting({
      studentName: '',
      parentName: '',
      date: '',
      time: '',
      duration: '15',
      purpose: '',
      notes: '',
      status: 'scheduled'
    });
  };

  const updateMeetingStatus = (id, status) => {
    setMeetings(prev => prev.map(meeting => 
      meeting.id === id ? { ...meeting, status } : meeting
    ));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Parent-Teacher Meeting Scheduler</h2>

      {/* Schedule New Meeting */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Schedule New Meeting</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Student Name</label>
              <input
                type="text"
                name="studentName"
                value={newMeeting.studentName}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Parent Name</label>
              <input
                type="text"
                name="parentName"
                value={newMeeting.parentName}
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
                value={newMeeting.date}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Time</label>
              <input
                type="time"
                name="time"
                value={newMeeting.time}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Duration (minutes)</label>
              <select
                name="duration"
                value={newMeeting.duration}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
                <option value="60">60 minutes</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Purpose of Meeting</label>
            <textarea
              name="purpose"
              value={newMeeting.purpose}
              onChange={handleInputChange}
              rows="2"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Notes</label>
            <textarea
              name="notes"
              value={newMeeting.notes}
              onChange={handleInputChange}
              rows="2"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Schedule Meeting
            </button>
          </div>
        </form>
      </div>

      {/* Meetings List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Scheduled Meetings</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parent</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {meetings.map((meeting) => (
                <tr key={meeting.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{meeting.studentName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{meeting.parentName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{meeting.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{meeting.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{meeting.duration} min</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      meeting.status === 'scheduled' ? 'bg-yellow-100 text-yellow-800' :
                      meeting.status === 'completed' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {meeting.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => updateMeetingStatus(meeting.id, 'completed')}
                        className="text-green-600 hover:text-green-900"
                      >
                        Complete
                      </button>
                      <button
                        onClick={() => updateMeetingStatus(meeting.id, 'cancelled')}
                        className="text-red-600 hover:text-red-900"
                      >
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeacherPTM; 