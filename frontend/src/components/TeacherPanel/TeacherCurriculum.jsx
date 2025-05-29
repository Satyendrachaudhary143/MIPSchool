import React, { useState } from 'react';

const TeacherCurriculum = () => {
  const [curriculum, setCurriculum] = useState([]);
  const [newUnit, setNewUnit] = useState({
    subject: '',
    class: '',
    unit: '',
    topic: '',
    objectives: '',
    duration: '',
    resources: '',
    assessment: ''
  });

  const subjects = ['Mathematics', 'Science', 'English', 'History', 'Geography', 'Computer Science'];
  const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUnit(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurriculum(prev => [...prev, { ...newUnit, id: Date.now() }]);
    setNewUnit({
      subject: '',
      class: '',
      unit: '',
      topic: '',
      objectives: '',
      duration: '',
      resources: '',
      assessment: ''
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Curriculum Planning</h2>

      {/* Add New Unit */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Add New Unit</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <select
                name="subject"
                value={newUnit.subject}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select Subject</option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Class</label>
              <select
                name="class"
                value={newUnit.class}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select Class</option>
                {classes.map((cls) => (
                  <option key={cls} value={cls}>{cls}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Unit</label>
              <input
                type="text"
                name="unit"
                value={newUnit.unit}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Topic</label>
              <input
                type="text"
                name="topic"
                value={newUnit.topic}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Duration (in hours)</label>
              <input
                type="number"
                name="duration"
                value={newUnit.duration}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Learning Objectives</label>
            <textarea
              name="objectives"
              value={newUnit.objectives}
              onChange={handleInputChange}
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Required Resources</label>
            <textarea
              name="resources"
              value={newUnit.resources}
              onChange={handleInputChange}
              rows="2"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Assessment Methods</label>
            <textarea
              name="assessment"
              value={newUnit.assessment}
              onChange={handleInputChange}
              rows="2"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add Unit
            </button>
          </div>
        </form>
      </div>

      {/* Curriculum List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Curriculum Overview</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {curriculum.map((unit) => (
                <tr key={unit.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{unit.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{unit.class}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{unit.unit}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{unit.topic}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{unit.duration} hours</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <button
                      onClick={() => alert('View details')}
                      className="text-blue-600 hover:text-blue-900"
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
    </div>
  );
};

export default TeacherCurriculum; 