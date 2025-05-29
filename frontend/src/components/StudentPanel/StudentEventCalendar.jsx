import React, { useState } from 'react';

const StudentEventCalendar = () => {
  const [events] = useState([
    {
      id: 1,
      title: 'Annual Sports Day',
      date: '2024-04-15',
      time: '09:00',
      location: 'School Sports Ground',
      type: 'Sports',
      description: 'Annual sports competition with various events',
      registrationRequired: true,
      registered: true
    },
    {
      id: 2,
      title: 'Science Exhibition',
      date: '2024-04-20',
      time: '10:00',
      location: 'School Auditorium',
      type: 'Academic',
      description: 'Showcase of student science projects',
      registrationRequired: true,
      registered: false
    },
    {
      id: 3,
      title: 'Parent-Teacher Meeting',
      date: '2024-04-25',
      time: '14:00',
      location: 'Classrooms',
      type: 'Academic',
      description: 'Regular parent-teacher meeting',
      registrationRequired: false,
      registered: false
    }
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedType, setSelectedType] = useState('all');

  const eventTypes = ['all', 'Sports', 'Academic', 'Cultural', 'Other'];

  const handleRegister = (eventId) => {
    // Here you would typically make an API call to register for the event
    console.log(`Registering for event ${eventId}`);
  };

  const handleUnregister = (eventId) => {
    // Here you would typically make an API call to unregister from the event
    console.log(`Unregistering from event ${eventId}`);
  };

  const filteredEvents = events.filter(event => {
    const matchesDate = event.date === selectedDate;
    const matchesType = selectedType === 'all' || event.type === selectedType;
    return matchesDate && matchesType;
  });

  return (
    <div className="space-y-6">
      {/* Calendar Filters */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Event Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {eventTypes.map(type => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Events</h2>
        <div className="space-y-4">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <div
                key={event.id}
                className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.description}</p>
                    <div className="mt-2 space-y-1">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Date:</span> {event.date}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Time:</span> {event.time}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Location:</span> {event.location}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Type:</span> {event.type}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setSelectedEvent(event)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      View Details
                    </button>
                    {event.registrationRequired && (
                      event.registered ? (
                        <button
                          onClick={() => handleUnregister(event.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Unregister
                        </button>
                      ) : (
                        <button
                          onClick={() => handleRegister(event.id)}
                          className="text-green-600 hover:text-green-900"
                        >
                          Register
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-4">No events found for the selected criteria.</p>
          )}
        </div>
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900">{selectedEvent.title}</h3>
              <div className="mt-2 px-7 py-3">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Description</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedEvent.description}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Date & Time</h4>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedEvent.date} at {selectedEvent.time}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Location</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedEvent.location}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Type</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedEvent.type}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Registration</h4>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedEvent.registrationRequired ? 'Required' : 'Not Required'}
                    </p>
                  </div>
                  {selectedEvent.registrationRequired && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-700">Status</h4>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedEvent.registered ? 'Registered' : 'Not Registered'}
                      </p>
                    </div>
                  )}
                </div>
                <div className="mt-4 flex justify-end space-x-3">
                  {selectedEvent.registrationRequired && (
                    selectedEvent.registered ? (
                      <button
                        onClick={() => handleUnregister(selectedEvent.id)}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                      >
                        Unregister
                      </button>
                    ) : (
                      <button
                        onClick={() => handleRegister(selectedEvent.id)}
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                      >
                        Register
                      </button>
                    )
                  )}
                  <button
                    onClick={() => setSelectedEvent(null)}
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

export default StudentEventCalendar; 