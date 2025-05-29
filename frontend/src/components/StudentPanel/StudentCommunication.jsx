import React, { useState } from 'react';

const StudentCommunication = () => {
  const [messages] = useState([
    {
      id: 1,
      sender: 'Mrs. Smith',
      subject: 'Mathematics Assignment',
      message: 'Please submit your assignment by tomorrow.',
      date: '2024-03-15T10:30:00',
      type: 'teacher',
      read: true
    },
    {
      id: 2,
      sender: 'Mr. Johnson',
      subject: 'Science Project',
      message: 'Great work on your science project!',
      date: '2024-03-14T15:45:00',
      type: 'teacher',
      read: false
    },
    {
      id: 3,
      sender: 'School Admin',
      subject: 'Fee Payment Reminder',
      message: 'Please complete your fee payment by the end of this week.',
      date: '2024-03-13T09:15:00',
      type: 'admin',
      read: true
    }
  ]);

  const [announcements] = useState([
    {
      id: 1,
      title: 'Annual Sports Day',
      content: 'Annual sports day will be held on April 15th. All students are required to participate.',
      date: '2024-03-15T08:00:00',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Parent-Teacher Meeting',
      content: 'Parent-teacher meeting scheduled for April 20th. Please ensure your parents attend.',
      date: '2024-03-14T10:00:00',
      priority: 'medium'
    }
  ]);

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [newMessage, setNewMessage] = useState({
    recipient: '',
    subject: '',
    message: ''
  });

  const teachers = [
    { id: 1, name: 'Mrs. Smith', subject: 'Mathematics' },
    { id: 2, name: 'Mr. Johnson', subject: 'Science' },
    { id: 3, name: 'Ms. Williams', subject: 'English' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMessage(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to send the message
    console.log('Sending message:', newMessage);
    setNewMessage({
      recipient: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="space-y-6">
      {/* Messages */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Messages</h2>
          <button
            onClick={() => setNewMessage({ recipient: '', subject: '', message: '' })}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            New Message
          </button>
        </div>

        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`border rounded-lg p-4 hover:bg-gray-50 transition-colors ${
                !msg.read ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-medium text-gray-900">{msg.subject}</h3>
                    {!msg.read && (
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">From: {msg.sender}</p>
                  <p className="text-sm text-gray-600">
                    {new Date(msg.date).toLocaleString()}
                  </p>
                  <p className="mt-2 text-sm text-gray-900">{msg.message}</p>
                </div>
                <button
                  onClick={() => setSelectedMessage(msg)}
                  className="text-blue-600 hover:text-blue-900"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Announcements */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Announcements</h2>
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-medium text-gray-900">{announcement.title}</h3>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      announcement.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {announcement.priority}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {new Date(announcement.date).toLocaleString()}
                  </p>
                  <p className="mt-2 text-sm text-gray-900">{announcement.content}</p>
                </div>
                <button
                  onClick={() => setSelectedAnnouncement(announcement)}
                  className="text-blue-600 hover:text-blue-900"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Message Form */}
      {newMessage.recipient !== '' && (
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">New Message</h3>
          <form onSubmit={handleSendMessage} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Recipient</label>
              <select
                name="recipient"
                value={newMessage.recipient}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select a teacher</option>
                {teachers.map(teacher => (
                  <option key={teacher.id} value={teacher.name}>
                    {teacher.name} ({teacher.subject})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                value={newMessage.subject}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={newMessage.message}
                onChange={handleInputChange}
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setNewMessage({ recipient: '', subject: '', message: '' })}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Message Details Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900">{selectedMessage.subject}</h3>
              <div className="mt-2 px-7 py-3">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">From</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedMessage.sender}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Date</h4>
                    <p className="mt-1 text-sm text-gray-900">
                      {new Date(selectedMessage.date).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Message</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedMessage.message}</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => setSelectedMessage(null)}
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

      {/* Announcement Details Modal */}
      {selectedAnnouncement && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900">{selectedAnnouncement.title}</h3>
              <div className="mt-2 px-7 py-3">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Date</h4>
                    <p className="mt-1 text-sm text-gray-900">
                      {new Date(selectedAnnouncement.date).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Priority</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedAnnouncement.priority}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Content</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedAnnouncement.content}</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => setSelectedAnnouncement(null)}
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

export default StudentCommunication; 