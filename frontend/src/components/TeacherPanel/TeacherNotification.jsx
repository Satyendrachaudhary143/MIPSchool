import React from 'react';

const TeacherNotification = () => {
  // Placeholder data for teacher notifications
  const notifications = [
    {
      id: 1,
      title: 'Faculty Meeting Tomorrow',
      message: 'A mandatory faculty meeting will be held tomorrow at 10:00 AM in the conference room.',
      date: '2024-03-16',
      read: false,
    },
    {
      id: 2,
      title: 'Grade Submission Deadline',
      message: 'The deadline for submitting student grades for the current term is [Date]. Please ensure all grades are submitted on time.',
      date: '2024-03-14',
      read: true,
    },
    {
      id: 3,
      title: 'Professional Development Workshop',
      message: 'A workshop on [Topic] will be held on [Date]. Register by [Registration Deadline].',
      date: '2024-03-12',
      read: true,
    },
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Notifications (Teachers)</h2>

      {/* Notification List */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        {notifications.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {notifications.map((notification) => (
              <li key={notification.id} className={`py-4 ${!notification.read ? 'bg-blue-50' : ''} hover:bg-gray-100 rounded-md px-2 -mx-2`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-2 md:mb-0">
                    <h3 className={`text-base md:text-lg font-semibold ${!notification.read ? 'text-blue-800' : 'text-gray-800'}`}>{notification.title}</h3>
                    <p className="text-sm md:text-base text-gray-600">{notification.message}</p>
                  </div>
                  <div className="flex-shrink-0 text-sm text-gray-500">
                    {notification.date}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No new notifications for teachers.</p>
        )}
      </div>
    </div>
  );
};

export default TeacherNotification; 