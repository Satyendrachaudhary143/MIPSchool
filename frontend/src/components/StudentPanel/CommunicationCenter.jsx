import React, { useState } from 'react';

const CommunicationCenter = () => {
  const [activeTab, setActiveTab] = useState('announcements');
  const [message, setMessage] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');

  // Sample data - In a real app, this would come from an API
  const announcements = [
    {
      id: 1,
      title: 'School Holiday Announcement',
      content: 'School will be closed on March 25th for maintenance.',
      date: '2024-03-20',
      priority: 'high',
      from: 'Principal'
    },
    {
      id: 2,
      title: 'Science Fair Registration',
      content: 'Registration for the annual science fair is now open. Submit your projects by April 1st.',
      date: '2024-03-19',
      priority: 'medium',
      from: 'Science Department'
    },
    {
      id: 3,
      title: 'Parent-Teacher Meeting',
      content: 'The next PTM is scheduled for April 5th. Please ensure your parents attend.',
      date: '2024-03-18',
      priority: 'high',
      from: 'Administration'
    }
  ];

  const teachers = [
    { id: 1, name: 'Mrs. Smith', subject: 'Mathematics' },
    { id: 2, name: 'Mr. Johnson', subject: 'Science' },
    { id: 3, name: 'Ms. Williams', subject: 'English' }
  ];

  const messages = [
    {
      id: 1,
      from: 'Mrs. Smith',
      subject: 'Math Assignment Feedback',
      content: 'Great work on your last assignment! Keep up the good work.',
      date: '2024-03-20',
      read: true
    },
    {
      id: 2,
      from: 'Mr. Johnson',
      subject: 'Science Project Update',
      content: 'Please submit your project proposal by next week.',
      date: '2024-03-19',
      read: false
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    // In a real app, this would send the message to the backend
    console.log('Sending message:', { to: selectedTeacher, message });
    setMessage('');
    setSelectedTeacher('');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Communication Center</h2>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('announcements')}
            className={`${
              activeTab === 'announcements'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Announcements
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`${
              activeTab === 'messages'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Messages
          </button>
          <button
            onClick={() => setActiveTab('new-message')}
            className={`${
              activeTab === 'new-message'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            New Message
          </button>
        </nav>
      </div>

      {/* Content based on active tab */}
      <div className="mt-6">
        {activeTab === 'announcements' && (
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className={`p-4 rounded-lg border ${
                  announcement.priority === 'high'
                    ? 'border-red-200 bg-red-50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900">{announcement.title}</h3>
                  <span className="text-sm text-gray-500">{announcement.date}</span>
                </div>
                <p className="mt-2 text-gray-600">{announcement.content}</p>
                <p className="mt-2 text-sm text-gray-500">From: {announcement.from}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`p-4 rounded-lg border ${
                  msg.read ? 'border-gray-200 bg-white' : 'border-blue-200 bg-blue-50'
                }`}
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900">{msg.subject}</h3>
                  <span className="text-sm text-gray-500">{msg.date}</span>
                </div>
                <p className="mt-2 text-gray-600">{msg.content}</p>
                <p className="mt-2 text-sm text-gray-500">From: {msg.from}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'new-message' && (
          <form onSubmit={handleSendMessage} className="space-y-4">
            <div>
              <label htmlFor="teacher" className="block text-sm font-medium text-gray-700">
                Select Teacher
              </label>
              <select
                id="teacher"
                value={selectedTeacher}
                onChange={(e) => setSelectedTeacher(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Select a teacher</option>
                {teachers.map((teacher) => (
                  <option key={teacher.id} value={teacher.id}>
                    {teacher.name} ({teacher.subject})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CommunicationCenter; 