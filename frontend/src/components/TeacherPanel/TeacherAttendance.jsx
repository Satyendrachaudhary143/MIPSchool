import React, { useState, useEffect } from 'react';

const TeacherAttendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [currentDate, setCurrentDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Placeholder student data (replace with actual data fetching)
  const students = [
    { id: 1, name: 'Student A' },
    { id: 2, name: 'Student B' },
    { id: 3, name: 'Student C' },
    { id: 4, name: 'Student D' },
    { id: 5, name: 'Student E' },
  ];

  useEffect(() => {
    // Set current date on component mount
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    setCurrentDate(`${year}-${month}-${day}`);

    // Initialize attendance data for today (all students absent by default)
    const initialAttendance = students.map(student => ({
      studentId: student.id,
      name: student.name,
      status: 'Absent', // Default to Absent
    }));
    setAttendanceData(initialAttendance);
  }, []); // Empty dependency array means this effect runs only once on mount

  const handleToggleAttendance = (studentId) => {
    setAttendanceData(prevAttendance =>
      prevAttendance.map(student =>
        student.studentId === studentId
          ? { ...student, status: student.status === 'Present' ? 'Absent' : 'Present' }
          : student
      )
    );
  };

  const handleSubmitAttendance = async () => {
    setIsSubmitting(true);
    try {
      // Here you would typically make an API call to submit the attendance data
      console.log('Submitting attendance data:', {
        date: currentDate,
        attendance: attendanceData
      });
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message (you can replace this with a proper notification system)
      alert('Attendance submitted successfully!');
      
    } catch (error) {
      console.error('Error submitting attendance:', error);
      alert('Error submitting attendance. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const presentStudents = attendanceData.filter(student => student.status === 'Present');
  const absentStudents = attendanceData.filter(student => student.status === 'Absent');

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Take Attendance</h2>

      {/* Attendance for Current Date */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-600">Attendance for {currentDate}</h3>
        
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden border border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {attendanceData.map((student) => (
                    <tr key={student.studentId} className="hover:bg-gray-50">
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          student.status === 'Present' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm">
                        <button 
                          onClick={() => handleToggleAttendance(student.studentId)}
                          className={`px-3 py-1 rounded-md text-white ${
                            student.status === 'Present' ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-green-600 hover:bg-green-700'
                          }`}
                        >
                          {student.status === 'Present' ? 'Mark Absent' : 'Mark Present'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Submit Attendance Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSubmitAttendance}
            disabled={isSubmitting}
            className={`px-6 py-3 rounded-md text-white font-semibold ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Attendance'}
          </button>
        </div>
      </div>

      {/* Attendance Summary */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-green-600">Present Students Today ({presentStudents.length})</h3>
          <ul className="divide-y divide-gray-200">
            {presentStudents.length > 0 ? (
              presentStudents.map(student => (
                <li key={student.id} className="py-2 text-sm text-gray-800">{student.name}</li>
              ))
            ) : (
              <li className="py-2 text-sm text-gray-600">No students marked present yet.</li>
            )}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-red-600">Absent Students Today ({absentStudents.length})</h3>
           <ul className="divide-y divide-gray-200">
            {absentStudents.length > 0 ? (
              absentStudents.map(student => (
                <li key={student.id} className="py-2 text-sm text-gray-800">{student.name}</li>
              ))
            ) : (
              <li className="py-2 text-sm text-gray-600">No students marked absent yet.</li>
            )}
          </ul>
        </div>
      </div>

      {/* Placeholder for Month-wise Attendance History (similar to Student Panel) */}
      {/* <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-600">Month-wise Attendance History</h3>
        <p className="text-gray-600">Month-wise attendance history with filtering will be displayed here.</p>
      </div> */}
    </div>
  );
};

export default TeacherAttendance; 