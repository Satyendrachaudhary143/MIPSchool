import React, { useState } from 'react';

const TeacherDocuments = () => {
  const [documents, setDocuments] = useState([]);
  const [newDocument, setNewDocument] = useState({
    title: '',
    category: '',
    description: '',
    file: null,
    accessLevel: 'private'
  });

  const categories = [
    'Lesson Plans',
    'Worksheets',
    'Exam Papers',
    'Study Materials',
    'Administrative',
    'Student Records',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDocument(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewDocument(prev => ({
      ...prev,
      file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDocuments(prev => [...prev, { ...newDocument, id: Date.now(), uploadDate: new Date().toISOString() }]);
    setNewDocument({
      title: '',
      category: '',
      description: '',
      file: null,
      accessLevel: 'private'
    });
  };

  const deleteDocument = (id) => {
    setDocuments(prev => prev.filter(doc => doc.id !== id));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Document Management</h2>

      {/* Upload New Document */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Upload New Document</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={newDocument.title}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                name="category"
                value={newDocument.category}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Access Level</label>
              <select
                name="accessLevel"
                value={newDocument.accessLevel}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="private">Private</option>
                <option value="department">Department Only</option>
                <option value="public">Public</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">File</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="mt-1 block w-full"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={newDocument.description}
              onChange={handleInputChange}
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Upload Document
            </button>
          </div>
        </form>
      </div>

      {/* Documents List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Document Library</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Upload Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Access Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {documents.map((doc) => (
                <tr key={doc.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{doc.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{doc.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(doc.uploadDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      doc.accessLevel === 'private' ? 'bg-red-100 text-red-800' :
                      doc.accessLevel === 'department' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {doc.accessLevel}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => alert('Download document')}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        Download
                      </button>
                      <button
                        onClick={() => deleteDocument(doc.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </div>
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

export default TeacherDocuments; 