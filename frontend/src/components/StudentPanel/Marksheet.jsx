import React, { useState } from 'react';

const Marksheet = () => {
  const [selectedClass, setSelectedClass] = useState('');

  // Placeholder data for different classes - expanded to show more subjects
  const marksheetData = {
    '10th Grade': [
      { subject: 'Mathematics', marks: 85, total: 100, grade: 'A' },
      { subject: 'Science', marks: 88, total: 100, grade: 'A' },
      { subject: 'Social Studies', marks: 80, total: 100, grade: 'B+' },
      { subject: 'English', marks: 90, total: 100, grade: 'A+' },
      { subject: 'Hindi', marks: 82, total: 100, grade: 'B+' },
      { subject: 'Physics', marks: 75, total: 100, grade: 'B' },
      { subject: 'Chemistry', marks: 78, total: 100, grade: 'B' },
    ],
    '11th Grade': [
      { subject: 'Physics', marks: 78, total: 100, grade: 'B' },
      { subject: 'Chemistry', marks: 85, total: 100, grade: 'A' },
      { subject: 'Biology', marks: 80, total: 100, grade: 'B+' },
      { subject: 'English', marks: 88, total: 100, grade: 'A' },
      { subject: 'Physical Education', marks: 95, total: 100, grade: 'A+' },
      { subject: 'Mathematics', marks: 82, total: 100, grade: 'B+' },
      { subject: 'Computer Science', marks: 90, total: 100, grade: 'A+' },
    ],
    '12th Grade': [
      { subject: 'Mathematics', marks: 92, total: 100, grade: 'A+' },
      { subject: 'Physics', marks: 88, total: 100, grade: 'A' },
      { subject: 'Chemistry', marks: 90, total: 100, grade: 'A+' },
      { subject: 'Computer Science', marks: 95, total: 100, grade: 'A+' },
      { subject: 'English', marks: 91, total: 100, grade: 'A+' },
      { subject: 'Biology', marks: 87, total: 100, grade: 'A' },
      { subject: 'Physical Education', marks: 98, total: 100, grade: 'A+' },
    ],
  };

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  const selectedMarks = marksheetData[selectedClass] || [];

  const calculateTotalMarks = () => {
    return selectedMarks.reduce((sum, subject) => sum + subject.marks, 0);
  };

  const calculatePercentage = () => {
    const totalObtained = calculateTotalMarks();
    const totalPossible = selectedMarks.reduce((sum, subject) => sum + subject.total, 0);
    return totalPossible > 0 ? ((totalObtained / totalPossible) * 100).toFixed(1) : '0.0';
  };

  const getOverallGrade = () => {
    const percentage = parseFloat(calculatePercentage());
    if (percentage >= 95) return 'A+';
    if (percentage >= 90) return 'A';
    if (percentage >= 80) return 'B+';
    if (percentage >= 70) return 'B';
    if (percentage >= 60) return 'C';
    return 'D';
  };

  const getGradeColor = (grade) => {
    switch (grade) {
      case 'A+': return 'bg-green-100 text-green-800';
      case 'A': return 'bg-green-100 text-green-800';
      case 'B+': return 'bg-yellow-100 text-yellow-800';
      case 'B': return 'bg-yellow-100 text-yellow-800';
      case 'C': return 'bg-orange-100 text-orange-800';
      case 'D': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Marksheet</h2>

      {/* Class Selection */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
          <label htmlFor="classSelect" className="text-gray-700 font-semibold">
            Select Class:
          </label>
          <select
            id="classSelect"
            value={selectedClass}
            onChange={handleClassChange}
            className="w-full md:w-auto px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a class</option>
            {Object.keys(marksheetData).map((className) => (
              <option key={className} value={className}>
                {className}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Marksheet Details */}
      {selectedClass && selectedMarks.length > 0 && (
        <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
          <h3 className="text-lg md:text-xl font-semibold mb-4">{selectedClass} Marksheet</h3>

          {/* Subject-wise Marks Table */}
          <div className="overflow-x-auto mb-6">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden border border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marks Obtained</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Marks</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {selectedMarks.map((subject, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{subject.subject}</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{subject.marks}</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{subject.total}</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getGradeColor(subject.grade)}`}>
                            {subject.grade}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-white p-4 rounded-md shadow-sm space-y-3 md:space-y-4">
            <h4 className="text-base md:text-lg font-semibold mb-2">Summary</h4>
            <p className="text-sm md:text-base text-gray-700"><strong className="font-semibold text-gray-800">Total Marks Obtained:</strong> {calculateTotalMarks()}</p>
            <p className="text-sm md:text-base text-gray-700"><strong className="font-semibold text-gray-800">Percentage:</strong> {calculatePercentage()}%</p>
            <p className="text-sm md:text-base text-gray-700"><strong className="font-semibold text-gray-800">Overall Grade:</strong> 
              <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getGradeColor(getOverallGrade())}`}>
                {getOverallGrade()}
              </span>
            </p>
          </div>

          {/* Download Button */}
          <div className="mt-6">
            <button className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Download Marksheet
            </button>
          </div>
        </div>
      )}

      {/* Message when no class is selected */}
      {!selectedClass && (
        <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
          <p className="text-gray-600">Please select a class to view the marksheet.</p>
        </div>
      )}
    </div>
  );
};

export default Marksheet; 