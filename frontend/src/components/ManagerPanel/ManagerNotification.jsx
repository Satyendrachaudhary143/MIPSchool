import React, { useState } from 'react';

const ManagerNotification = () => {
  const [notificationTitle, setNotificationTitle] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [recipientType, setRecipientType] = useState('All'); // 'All', 'Students', 'Teachers', 'Specific'
  const [specificRecipient, setSpecificRecipient] = useState(''); // e.g., student ID, teacher ID, group ID

  // Placeholder data for sent notifications
  const [sentNotifications, setSentNotifications] = useState([
    { id: 1, title: 'School Closure Tomorrow', message: 'Due to heavy rain, the school will remain closed tomorrow.', recipient: 'All', date: '2024-03-18', sentBy: 'Manager John Smith' },
    { id: 2, title: 'Staff Meeting Reminder', message: 'Reminder for the staff meeting at 3 PM today in the conference room.', recipient: 'Teachers', date: '2024-03-17', sentBy: 'Manager John Smith' },
    { id: 3, title: 'Fee Payment Deadline', message: 'The deadline for March fee payment is extended to March 25th.', recipient: 'Students', date: '2024-03-16', sentBy: 'Manager John Smith' },
  ]);

  const handleSendNotification = () => {
    if (notificationTitle.trim() && notificationMessage.trim()) {
      const newNotification = {
        id: sentNotifications.length + 1,
        title: notificationTitle,
        message: notificationMessage,
        recipient: recipientType === 'Specific' ? `Specific (${specificRecipient})` : recipientType,
        date: new Date().toISOString().split('T')[0], // Current date
        sentBy: 'Manager John Smith' // Placeholder for sender
      };
      // In a real app, send this to a backend API
      console.log('Sending notification:', newNotification);

      // For demonstration, add to the list of sent notifications
      setSentNotifications([newNotification, ...sentNotifications]);

      // Clear form
      setNotificationTitle('');
      setNotificationMessage('');
      setRecipientType('All');
      setSpecificRecipient('');
    } else {
      alert('Please fill in title and message.');
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Send & View Notifications</h2>

      {/* Compose Notification */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Compose New Notification</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              value={notificationTitle}
              onChange={(e) => setNotificationTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter notification title"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows="4"
              value={notificationMessage}
              onChange={(e) => setNotificationMessage(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="recipientType" className="block text-sm font-medium text-gray-700">Send To</label>
              <select
                id="recipientType"
                value={recipientType}
                onChange={(e) => setRecipientType(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="All">All Users</option>
                <option value="Students">All Students</option>
                <option value="Teachers">All Teachers</option>
                <option value="Specific">Specific Recipient (Enter ID below)</option>
              </select>
            </div>
            {recipientType === 'Specific' && (
              <div>
                <label htmlFor="specificRecipient" className="block text-sm font-medium text-gray-700">Recipient ID (Student/Teacher/Group)</label>
                <input
                  type="text"
                  id="specificRecipient"
                  value={specificRecipient}
                  onChange={(e) => setSpecificRecipient(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter ID"
                />
              </div>
            )}
          </div>
          <div>
            <button
              onClick={handleSendNotification}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Notification
            </button>
          </div>
        </div>
      </div>

      {/* Sent Notifications History */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Sent Notifications History</h3>
        {sentNotifications.length > 0 ? (
          <div className="space-y-4">
            {sentNotifications.map(notification => (
              <div key={notification.id} className="bg-white p-4 rounded-md shadow-sm border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-base font-semibold text-gray-800">{notification.title}</h4>
                  <span className="text-sm text-gray-500">{notification.date}</span>
                </div>
                <p className="text-sm text-gray-700 mb-2">{notification.message}</p>
                <p className="text-xs text-gray-600">Recipient: {notification.recipient}</p>
                <p className="text-xs text-gray-600">Sent By: {notification.sentBy}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No notifications sent yet.</p>
        )}
      </div>
    </div>
  );
};

export default ManagerNotification; 