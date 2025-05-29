import React, { useState, useEffect } from 'react';

const ManagerAttendance = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [attendanceData, setAttendanceData] = useState([]); // Attendance data for selected date and class
  const [allStudents, setAllStudents] = useState([]); // Placeholder for all students

  // Placeholder for all students data (could be fetched from an API)
  useEffect(() => {
    // This would typically be an API call to get students by class
    const dummyStudents = [
      { id: 'S001', name: 'Rahul Sharma', class: '10th Grade' },
      { id: 'S002', name: 'Priya Patel', class: '10th Grade' },
      { id: 'S003', name: 'Amit Kumar', class: '11th Grade' },
      { id: 'S004', name: 'Sneha Singh', class: '10th Grade' },
      { id: 'S005', name: 'Rajesh Verma', class: '11th Grade' },
      { id: 'S006', name: 'Anjali Desai', class: '12th Grade' },
    ];
    setAllStudents(dummyStudents);
  }, []);

  // Fetch attendance data when date or class changes (Placeholder)
  useEffect(() => {
    if (selectedDate && selectedClass) {
      console.log(`Fetching attendance for ${selectedClass} on ${selectedDate}`);
      // This would typically be an API call to get attendance for a specific date and class
      const dummyAttendance = allStudents
        .filter(student => student.class === selectedClass)
        .map(student => ({
          studentId: student.id,
          studentName: student.name,
          status: Math.random() > 0.2 ? 'Present' : 'Absent' // Random status for demo
        }));
      setAttendanceData(dummyAttendance);
    } else {
      setAttendanceData([]); // Clear data if date or class is not selected
    }
  }, [selectedDate, selectedClass, allStudents]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  const handleStatusChange = (studentId, newStatus) => {
    setAttendanceData(attendanceData.map(record =>
      record.studentId === studentId ? { ...record, status: newStatus } : record
    ));
  };

  const presentCount = attendanceData.filter(record => record.status === 'Present').length;
  const absentCount = attendanceData.filter(record => record.status === 'Absent').length;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Present': return 'bg-green-100 text-green-800';
      case 'Absent': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Manage Student Attendance</h2>

      {/* Filters (Date and Class) */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Select Date and Class</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="attendanceDate" className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              id="attendanceDate"
              value={selectedDate}
              onChange={handleDateChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="attendanceClass" className="block text-sm font-medium text-gray-700">Class</label>
            <select
              id="attendanceClass"
              value={selectedClass}
              onChange={handleClassChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Select Class</option>
              <option value="10th Grade">10th Grade</option>
              <option value="11th Grade">11th Grade</option>
              <option value="12th Grade">12th Grade</option>
              {/* Add other classes as needed */}
            </select>
          </div>
        </div>
      </div>

      {/* Attendance Data and Summary */}
      {selectedDate && selectedClass && attendanceData.length > 0 && (
        <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Attendance for {selectedClass} on {selectedDate}</h3>

          {/* Summary */}
          <div className="mb-4 flex space-x-4">
            <span className="text-sm font-medium text-gray-700">Total Students: {attendanceData.length}</span>
            <span className="text-sm font-medium text-green-700">Present: {presentCount}</span>
            <span className="text-sm font-medium text-red-700">Absent: {absentCount}</span>
          </div>

          {/* Attendance Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student ID</th>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {attendanceData.map((record) => (
                  <tr key={record.studentId} className="hover:bg-gray-50">
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.studentName}</td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.studentId}</td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(record.status)}`}>
                        {record.status}
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <select
                        value={record.status}
                        onChange={(e) => handleStatusChange(record.studentId, e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {selectedDate && selectedClass && attendanceData.length === 0 && (
         <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
           <p className="text-gray-600">No attendance data available for {selectedClass} on {selectedDate}.</p>
         </div>
      )}

       {!selectedDate || !selectedClass && (
           <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
               <p className="text-gray-600">Please select a date and class to view attendance.</p>
           </div>
       )}
    </div>
  );
};

export default ManagerAttendance; 