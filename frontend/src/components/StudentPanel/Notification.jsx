import React from 'react';

const Notification = () => {
  // Placeholder data for notifications
  const notifications = [
    {
      id: 1,
      title: 'Upcoming Event: Annual Sports Day',
      message: 'Get ready for our Annual Sports Day on [Date]. Participate in various sports and support your house!',
      date: '2024-03-10',
      read: false,
    },
    {
      id: 2,
      title: 'Parent-Teacher Meeting Schedule',
      message: 'The schedule for the upcoming Parent-Teacher Meeting is now available. Please check the school website for details.',
      date: '2024-03-08',
      read: true,
    },
    {
      id: 3,
      title: 'Holiday Notification: [Reason]',
      message: 'Please note that the school will remain closed on [Date] due to [Reason].',
      date: '2024-03-05',
      read: true,
    },
    {
      id: 4,
      title: 'School Timings Change',
      message: 'Effective from [Date], the school timings will be from [New Start Time] to [New End Time].',
      date: '2024-03-01',
      read: false,
    },
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Notifications</h2>

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
          <p className="text-gray-600">No new notifications.</p>
        )}
      </div>
    </div>
  );
};

export default Notification; 