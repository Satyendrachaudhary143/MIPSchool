import React, { useState } from 'react';

const TeacherMarksheet = () => {
  const [studentIdentifierType, setStudentIdentifierType] = useState('email');
  const [studentIdentifier, setStudentIdentifier] = useState('');
  const [className, setClassName] = useState('');
  const [subjects, setSubjects] = useState([{
    subjectName: '',
    obtainedMarks: '',
    maxMarks: '',
  }]);

  const handleIdentifierTypeChange = (e) => {
    setStudentIdentifierType(e.target.value);
  };

  const handleIdentifierChange = (e) => {
    setStudentIdentifier(e.target.value);
  };

  const handleClassChange = (e) => {
    setClassName(e.target.value);
  };

  const handleSubjectChange = (index, e) => {
    const newSubjects = [...subjects];
    newSubjects[index][e.target.name] = e.target.value;
    setSubjects(newSubjects);
  };

  const handleAddSubject = () => {
    setSubjects([...subjects, { subjectName: '', obtainedMarks: '', maxMarks: '' }]);
  };

  const handleRemoveSubject = (index) => {
    const newSubjects = subjects.filter((_, i) => i !== index);
    setSubjects(newSubjects);
  };

  const handleRecordMarksheet = (e) => {
    e.preventDefault();
    // Handle recording marksheet logic here
    console.log('Recording marksheet:', {
      studentIdentifierType,
      studentIdentifier,
      className,
      subjects,
    });
    // Reset form (optional)
    // setStudentIdentifierType('email');
    // setStudentIdentifier('');
    // setClassName('');
    // setSubjects([{ subjectName: '', obtainedMarks: '', maxMarks: '' }]);
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Record Student Marksheet</h2>

      {/* Marksheet Recording Form */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Record Marks</h3>
        <form onSubmit={handleRecordMarksheet} className="space-y-4">
          {/* Student and Class Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="studentIdentifierType" className="block text-sm font-medium text-gray-700">Identify Student By</label>
              <select
                id="studentIdentifierType"
                value={studentIdentifierType}
                onChange={handleIdentifierTypeChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="email">Email</option>
                <option value="mobile">Mobile</option>
                <option value="idcard">ID Card No.</option>
              </select>
            </div>
            <div>
              <label htmlFor="studentIdentifier" className="block text-sm font-medium text-gray-700">Student Identifier</label>
              <input
                type="text"
                id="studentIdentifier"
                value={studentIdentifier}
                onChange={handleIdentifierChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <div>
             <label htmlFor="className" className="block text-sm font-medium text-gray-700">Class</label>
             <input
                type="text"
                id="className"
                value={className}
                onChange={handleClassChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
             />
          </div>

          {/* Subject Marks Input */}
          <div className="space-y-3">
            <h4 className="text-base font-semibold text-gray-700">Subjects</h4>
            {subjects.map((subject, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="md:col-span-1">
                  <label htmlFor={`subject-name-${index}`} className="block text-sm font-medium text-gray-700">Subject Name</label>
                  <input
                    type="text"
                    id={`subject-name-${index}`}
                    name="subjectName"
                    value={subject.subjectName}
                    onChange={(e) => handleSubjectChange(index, e)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="md:col-span-1">
                  <label htmlFor={`obtained-marks-${index}`} className="block text-sm font-medium text-gray-700">Marks Obtained</label>
                  <input
                    type="number"
                    id={`obtained-marks-${index}`}
                    name="obtainedMarks"
                    value={subject.obtainedMarks}
                    onChange={(e) => handleSubjectChange(index, e)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                    min="0"
                  />
                </div>
                 <div className="md:col-span-1">
                  <label htmlFor={`max-marks-${index}`} className="block text-sm font-medium text-gray-700">Max Marks</label>
                  <input
                    type="number"
                    id={`max-marks-${index}`}
                    name="maxMarks"
                    value={subject.maxMarks}
                    onChange={(e) => handleSubjectChange(index, e)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                    min="0"
                  />
                </div>
                <div className="md:col-span-1 flex items-center">
                  {subjects.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveSubject(index)}
                      className="px-3 py-2 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddSubject}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Subject
            </button>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Record Marksheet
            </button>
          </div>
        </form>
      </div>

      {/* Optional: Display recent marksheet records */}
      {/* <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Recent Records</h3>
        <p className="text-gray-600">Recent marksheet records will be shown here.</p>
      </div> */}
    </div>
  );
};

export default TeacherMarksheet; 