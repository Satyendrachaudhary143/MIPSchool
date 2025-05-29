import React, { useState } from 'react';

const StudentParentTeacherMeeting = () => {
  const [meetings, setMeetings] = useState([
    {
      id: 1,
      teacher: 'Mrs. Smith',
      subject: 'Mathematics',
      date: '2024-03-20',
      time: '14:00',
      status: 'scheduled',
      purpose: 'Discuss academic progress',
      notes: 'Please bring recent test results'
    },
    {
      id: 2,
      teacher: 'Mr. Johnson',
      subject: 'Science',
      date: '2024-03-15',
      time: '15:30',
      status: 'completed',
      purpose: 'Review project performance',
      notes: 'Meeting went well, discussed improvement areas'
    }
  ]);

  const [newMeeting, setNewMeeting] = useState({
    teacher: '',
    subject: '',
    date: '',
    time: '',
    purpose: '',
    notes: ''
  });

  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [isScheduling, setIsScheduling] = useState(false);

  const teachers = [
    { id: 1, name: 'Mrs. Smith', subject: 'Mathematics' },
    { id: 2, name: 'Mr. Johnson', subject: 'Science' },
    { id: 3, name: 'Ms. Williams', subject: 'English' },
    { id: 4, name: 'Mr. Brown', subject: 'History' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMeeting(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTeacherSelect = (e) => {
    const teacherId = e.target.value;
    const selectedTeacher = teachers.find(t => t.id === parseInt(teacherId));
    setNewMeeting(prev => ({
      ...prev,
      teacher: selectedTeacher.name,
      subject: selectedTeacher.subject
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const meeting = {
      id: meetings.length + 1,
      ...newMeeting,
      status: 'scheduled'
    };
    setMeetings(prev => [...prev, meeting]);
    setNewMeeting({
      teacher: '',
      subject: '',
      date: '',
      time: '',
      purpose: '',
      notes: ''
    });
    setIsScheduling(false);
  };

  const handleCancel = (meetingId) => {
    setMeetings(prev => prev.filter(meeting => meeting.id !== meetingId));
  };

  const handleReschedule = (meetingId) => {
    const meeting = meetings.find(m => m.id === meetingId);
    setNewMeeting({
      teacher: meeting.teacher,
      subject: meeting.subject,
      date: meeting.date,
      time: meeting.time,
      purpose: meeting.purpose,
      notes: meeting.notes
    });
    setIsScheduling(true);
    handleCancel(meetingId);
  };

  return (
    <div className="space-y-6">
      {/* Meeting List */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Parent-Teacher Meetings</h2>
          <button
            onClick={() => setIsScheduling(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Schedule New Meeting
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Teacher</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {meetings.map((meeting) => (
                <tr key={meeting.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{meeting.teacher}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{meeting.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{meeting.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{meeting.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      meeting.status === 'scheduled' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {meeting.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      onClick={() => setSelectedMeeting(meeting)}
                      className="text-blue-600 hover:text-blue-900 mr-3"
                    >
                      View
                    </button>
                    {meeting.status === 'scheduled' && (
                      <>
                        <button
                          onClick={() => handleReschedule(meeting.id)}
                          className="text-yellow-600 hover:text-yellow-900 mr-3"
                        >
                          Reschedule
                        </button>
                        <button
                          onClick={() => handleCancel(meeting.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Cancel
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Schedule Meeting Form */}
      {isScheduling && (
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Schedule New Meeting</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Teacher</label>
                <select
                  onChange={handleTeacherSelect}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select a teacher</option>
                  {teachers.map(teacher => (
                    <option key={teacher.id} value={teacher.id}>
                      {teacher.name} ({teacher.subject})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  value={newMeeting.subject}
                  disabled
                  className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  name="date"
                  value={newMeeting.date}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Time</label>
                <input
                  type="time"
                  name="time"
                  value={newMeeting.time}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Purpose</label>
                <input
                  type="text"
                  name="purpose"
                  value={newMeeting.purpose}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Notes</label>
                <textarea
                  name="notes"
                  value={newMeeting.notes}
                  onChange={handleInputChange}
                  rows="3"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setIsScheduling(false)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Schedule Meeting
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Meeting Details Modal */}
      {selectedMeeting && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900">Meeting Details</h3>
              <div className="mt-2 px-7 py-3">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Teacher</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedMeeting.teacher}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Subject</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedMeeting.subject}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Date & Time</h4>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedMeeting.date} at {selectedMeeting.time}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Purpose</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedMeeting.purpose}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Notes</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedMeeting.notes}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Status</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedMeeting.status}</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => setSelectedMeeting(null)}
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

export default StudentParentTeacherMeeting; 