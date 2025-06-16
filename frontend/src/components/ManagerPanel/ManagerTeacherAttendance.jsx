import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaDownload, FaFilter } from 'react-icons/fa';

const ManagerTeacherAttendance = () => {
  const [teachers, setTeachers] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [viewMode, setViewMode] = useState('daily'); // 'daily' or 'monthly'
  const [searchTerm, setSearchTerm] = useState('');
  const [attendanceData, setAttendanceData] = useState({});

  // Mock data - Replace with actual API call
  useEffect(() => {
    const mockTeachers = [
      {
        id: 1,
        name: 'John Doe',
        subject: 'Mathematics',
        status: 'present',
        checkIn: '08:45 AM',
        checkOut: '03:30 PM',
        workingHours: '6h 45m',
        attendancePercentage: 95,
        monthlyAttendance: {
          present: 22,
          absent: 1,
          late: 2,
          leave: 5
        }
      },
      {
        id: 2,
        name: 'Jane Smith',
        subject: 'Physics',
        status: 'late',
        checkIn: '09:15 AM',
        checkOut: '03:30 PM',
        workingHours: '6h 15m',
        attendancePercentage: 88,
        monthlyAttendance: {
          present: 20,
          absent: 2,
          late: 3,
          leave: 5
        }
      },
      // Add more mock data as needed
    ];
    setTeachers(mockTeachers);
  }, []);

  const handleAttendanceChange = (teacherId, status) => {
    setTeachers(teachers.map(teacher => 
      teacher.id === teacherId ? { ...teacher, status } : teacher
    ));
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(parseInt(e.target.value));
  };

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
  };

  const handleExportAttendance = () => {
    // Implement export functionality (CSV/Excel)
    console.log('Exporting attendance data...');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'present': return 'bg-green-100 text-green-800';
      case 'absent': return 'bg-red-100 text-red-800';
      case 'late': return 'bg-yellow-100 text-yellow-800';
      case 'leave': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Teacher Attendance</h2>
        <div className="flex space-x-4">
          <button
            onClick={() => setViewMode('daily')}
            className={`px-4 py-2 rounded-md ${
              viewMode === 'daily' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Daily View
          </button>
          <button
            onClick={() => setViewMode('monthly')}
            className={`px-4 py-2 rounded-md ${
              viewMode === 'monthly' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Monthly View
          </button>
          <button
            onClick={handleExportAttendance}
            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            <FaDownload className="mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <input
              type="text"
              placeholder="Search teachers..."
              className="w-full px-4 py-2 border rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {viewMode === 'daily' ? (
            <div>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-md"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </div>
          ) : (
            <>
              <div>
                <select
                  className="w-full px-4 py-2 border rounded-md"
                  value={selectedMonth}
                  onChange={handleMonthChange}
                >
                  <option value="0">January</option>
                  <option value="1">February</option>
                  <option value="2">March</option>
                  <option value="3">April</option>
                  <option value="4">May</option>
                  <option value="5">June</option>
                  <option value="6">July</option>
                  <option value="7">August</option>
                  <option value="8">September</option>
                  <option value="9">October</option>
                  <option value="10">November</option>
                  <option value="11">December</option>
                </select>
              </div>
              <div>
                <select
                  className="w-full px-4 py-2 border rounded-md"
                  value={selectedYear}
                  onChange={handleYearChange}
                >
                  {[2023, 2024, 2025].map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                {viewMode === 'daily' ? (
                  <>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check In</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check Out</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Working Hours</th>
                  </>
                ) : (
                  <>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Present</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Absent</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Late</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leave</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance %</th>
                  </>
                )}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{teacher.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.subject}</td>
                  {viewMode === 'daily' ? (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(teacher.status)}`}
                          value={teacher.status}
                          onChange={(e) => handleAttendanceChange(teacher.id, e.target.value)}
                        >
                          <option value="present">Present</option>
                          <option value="absent">Absent</option>
                          <option value="late">Late</option>
                          <option value="leave">Leave</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.checkIn}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.checkOut}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.workingHours}</td>
                    </>
                  ) : (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.monthlyAttendance.present}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.monthlyAttendance.absent}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.monthlyAttendance.late}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.monthlyAttendance.leave}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.attendancePercentage}%</td>
                    </>
                  )}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      className="text-blue-600 hover:text-blue-900"
                      onClick={() => {/* Implement view details */}}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Attendance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800">Total Teachers</h3>
          <p className="text-2xl font-bold text-blue-600">{teachers.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800">Present Today</h3>
          <p className="text-2xl font-bold text-green-600">
            {teachers.filter(t => t.status === 'present').length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800">Absent Today</h3>
          <p className="text-2xl font-bold text-red-600">
            {teachers.filter(t => t.status === 'absent').length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800">Late Today</h3>
          <p className="text-2xl font-bold text-yellow-600">
            {teachers.filter(t => t.status === 'late').length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManagerTeacherAttendance; 