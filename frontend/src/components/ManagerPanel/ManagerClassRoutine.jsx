import React, { useState } from 'react';

const ManagerClassRoutine = () => {
  const [selectedClass, setSelectedClass] = useState('1');

  // Placeholder routine data (replace with actual data fetching logic)
  const routineData = {
    '1': [
      { day: 'Monday', '9:00': 'Math', '10:00': 'Science', '11:00': 'Break', '11:30': 'English', '12:30': 'Lunch', '1:30': 'Social Studies' },
      { day: 'Tuesday', '9:00': 'Science', '10:00': 'Math', '11:00': 'Break', '11:30': 'Social Studies', '12:30': 'Lunch', '1:30': 'English' },
      { day: 'Wednesday', '9:00': 'English', '10:00': 'Social Studies', '11:00': 'Break', '11:30': 'Math', '12:30': 'Lunch', '1:30': 'Science' },
      { day: 'Thursday', '9:00': 'Social Studies', '10:00': 'English', '11:00': 'Break', '11:30': 'Science', '12:30': 'Lunch', '1:30': 'Math' },
      { day: 'Friday', '9:00': 'Math', '10:00': 'English', '11:00': 'Break', '11:30': 'Social Studies', '12:30': 'Lunch', '1:30': 'Science' },
    ],
    '2': [
      { day: 'Monday', '9:00': 'English', '10:00': 'Math', '11:00': 'Break', '11:30': 'Science', '12:30': 'Lunch', '1:30': 'Art' },
      { day: 'Tuesday', '9:00': 'Math', '10:00': 'English', '11:00': 'Break', '11:30': 'Art', '12:30': 'Lunch', '1:30': 'Science' },
      { day: 'Wednesday', '9:00': 'Science', '10:00': 'Art', '11:00': 'Break', '11:30': 'English', '12:30': 'Lunch', '1:30': 'Math' },
      { day: 'Thursday', '9:00': 'Art', '10:00': 'Science', '11:00': 'Break', '11:30': 'Math', '12:30': 'Lunch', '1:30': 'English' },
      { day: 'Friday', '9:00': 'English', '10:00': 'Math', '11:00': 'Break', '11:30': 'Science', '12:30': 'Lunch', '1:30': 'Art' },
    ],
    // Add routines for other classes (3-12) here
  };

  const times = ['9:00', '10:00', '11:00', '11:30', '12:30', '1:30']; // Example time slots

  const handleRoutineEdit = (day, time, subject) => {
    console.log(`Editing ${day} at ${time}: ${subject}`);
    // Implement actual edit logic (e.g., open a modal, update state)
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Manage Class Routine</h2>

      {/* Class Selection */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-md">
        <div>
          <label htmlFor="class" className="block text-sm font-medium text-gray-700">Select Class</label>
          <select
            id="class"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="mt-1 block w-full md:w-1/4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{`${i + 1}${i === 0 ? 'st' : i === 1 ? 'nd' : i === 2 ? 'rd' : 'th'} Grade`}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Routine Table */}
      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Routine for Class {selectedClass}</h3>
        {
          routineData[selectedClass] ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                  {times.map((time, index) => (
                    <th key={index} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{time}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {routineData[selectedClass].map((dayRoutine, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{dayRoutine.day}</td>
                    {times.map((time, timeIndex) => (
                      <td key={timeIndex} className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                        <div
                          className="cursor-pointer hover:text-blue-600"
                          onClick={() => handleRoutineEdit(dayRoutine.day, time, dayRoutine[time])}
                        >
                          {dayRoutine[time] || '---'}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-600">Routine data not available for Class {selectedClass}.</p>
          )
        }
      </div>
    </div>
  );
};

export default ManagerClassRoutine; 