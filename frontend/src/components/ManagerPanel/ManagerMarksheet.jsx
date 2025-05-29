import React, { useState } from 'react';

const ManagerMarksheet = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterClass, setFilterClass] = useState('');

  // Placeholder data for marksheet records (example structure)
  const allMarksheets = [
    { id: 1, studentName: 'Student A', studentId: 'S001', className: '10th Grade', term: 'First Term', totalMarks: 450, percentage: 90, overallGrade: 'A+' },
    { id: 2, studentName: 'Student B', studentId: 'S002', className: '10th Grade', term: 'First Term', totalMarks: 380, percentage: 76, overallGrade: 'B' },
    { id: 3, studentName: 'Student C', studentId: 'S003', className: '11th Grade', term: 'First Term', totalMarks: 410, percentage: 82, overallGrade: 'B+' },
     { id: 4, studentName: 'Student A', studentId: 'S001', className: '10th Grade', term: 'Second Term', totalMarks: 460, percentage: 92, overallGrade: 'A+' },
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterClassChange = (e) => {
    setFilterClass(e.target.value);
  };

  // Filter records based on search term and class filter
  const filteredMarksheets = allMarksheets.filter(marksheet => {
    const matchesSearch = marksheet.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          marksheet.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = filterClass === '' || marksheet.className === filterClass;
    return matchesSearch && matchesClass;
  });

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
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Manage Student Marksheets</h2>

      {/* Filters and Search */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Filter Marksheets</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700">Search by Student Name or ID</label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={handleSearchChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter name or ID"
            />
          </div>
          <div>
            <label htmlFor="filterClass" className="block text-sm font-medium text-gray-700">Filter by Class</label>
             <select
                id="filterClass"
                value={filterClass}
                onChange={handleFilterClassChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
             >
                <option value="">All Classes</option>
                <option value="10th Grade">10th Grade</option>
                <option value="11th Grade">11th Grade</option>
                <option value="12th Grade">12th Grade</option>
             </select>
          </div>
        </div>
      </div>

      {/* Marksheets Table */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Marksheets</h3>
        {filteredMarksheets.length > 0 ? (
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden border border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                       <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student ID</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                       <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Term</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Marks</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentage</th>
                       <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Overall Grade</th>
                      <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredMarksheets.map((marksheet) => (
                      <tr key={marksheet.id} className="hover:bg-gray-50">
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{marksheet.studentName}</td>
                         <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{marksheet.studentId}</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{marksheet.className}</td>
                         <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{marksheet.term}</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{marksheet.totalMarks}</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{marksheet.percentage}%</td>
                         <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm">
                           <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getGradeColor(marksheet.overallGrade)}`}>
                             {marksheet.overallGrade}
                           </span>
                         </td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {/* Example actions - replace with actual functionality */}
                          <button className="text-blue-600 hover:text-blue-900 mr-2">View</button>
                          <button className="text-red-600 hover:text-red-900">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">No marksheets found.</p>
        )}
      </div>
    </div>
  );
};

export default ManagerMarksheet; 