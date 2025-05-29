import React, { useState } from 'react';

const StudentCourseMaterials = () => {
  const [materials] = useState([
    {
      id: 1,
      subject: 'Mathematics',
      title: 'Calculus Notes',
      type: 'Lecture Notes',
      uploadDate: '2024-03-15',
      fileSize: '2.5 MB',
      format: 'PDF',
      description: 'Comprehensive notes on differential calculus',
      downloadUrl: '#'
    },
    {
      id: 2,
      subject: 'Science',
      title: 'Chemistry Lab Manual',
      type: 'Lab Manual',
      uploadDate: '2024-03-14',
      fileSize: '4.2 MB',
      format: 'PDF',
      description: 'Complete lab manual for chemistry experiments',
      downloadUrl: '#'
    },
    {
      id: 3,
      subject: 'English',
      title: 'Literature Analysis',
      type: 'Study Guide',
      uploadDate: '2024-03-13',
      fileSize: '1.8 MB',
      format: 'PDF',
      description: 'Analysis of selected literary works',
      downloadUrl: '#'
    }
  ]);

  const [recordedLectures] = useState([
    {
      id: 1,
      subject: 'Mathematics',
      title: 'Introduction to Calculus',
      duration: '45:30',
      uploadDate: '2024-03-15',
      thumbnail: 'https://via.placeholder.com/150',
      videoUrl: '#'
    },
    {
      id: 2,
      subject: 'Science',
      title: 'Chemical Reactions',
      duration: '38:15',
      uploadDate: '2024-03-14',
      thumbnail: 'https://via.placeholder.com/150',
      videoUrl: '#'
    }
  ]);

  const [libraryBooks] = useState([
    {
      id: 1,
      title: 'Advanced Mathematics',
      author: 'John Smith',
      subject: 'Mathematics',
      availability: 'Available',
      location: 'Library A-101'
    },
    {
      id: 2,
      title: 'Physics Fundamentals',
      author: 'Jane Doe',
      subject: 'Science',
      availability: 'Borrowed',
      location: 'Library B-203'
    }
  ]);

  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleDownload = (url) => {
    // Implement file download logic here
    console.log(`Downloading from ${url}`);
  };

  const handleVideoPlay = (url) => {
    // Implement video playback logic here
    console.log(`Playing video from ${url}`);
  };

  return (
    <div className="space-y-6">
      {/* Study Materials */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Study Materials</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Upload Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Size</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {materials.map((material) => (
                <tr key={material.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{material.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{material.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{material.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{material.uploadDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{material.fileSize}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      onClick={() => setSelectedMaterial(material)}
                      className="text-blue-600 hover:text-blue-900 mr-3"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleDownload(material.downloadUrl)}
                      className="text-green-600 hover:text-green-900"
                    >
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recorded Lectures */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Recorded Lectures</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recordedLectures.map((lecture) => (
            <div key={lecture.id} className="bg-gray-50 rounded-lg p-4">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img
                  src={lecture.thumbnail}
                  alt={lecture.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{lecture.title}</h3>
              <p className="text-sm text-gray-600">{lecture.subject}</p>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-sm text-gray-500">Duration: {lecture.duration}</span>
                <button
                  onClick={() => handleVideoPlay(lecture.videoUrl)}
                  className="text-blue-600 hover:text-blue-900"
                >
                  Play
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Digital Library */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Digital Library</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Author</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Availability</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {libraryBooks.map((book) => (
                <tr key={book.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.author}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      book.availability === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {book.availability}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      onClick={() => setSelectedBook(book)}
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

      {/* Material Details Modal */}
      {selectedMaterial && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900">{selectedMaterial.title}</h3>
              <div className="mt-2 px-7 py-3">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Subject</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedMaterial.subject}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Type</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedMaterial.type}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Description</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedMaterial.description}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">File Details</h4>
                    <p className="mt-1 text-sm text-gray-900">
                      Size: {selectedMaterial.fileSize} | Format: {selectedMaterial.format}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex justify-end space-x-3">
                  <button
                    onClick={() => setSelectedMaterial(null)}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => handleDownload(selectedMaterial.downloadUrl)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Book Details Modal */}
      {selectedBook && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900">{selectedBook.title}</h3>
              <div className="mt-2 px-7 py-3">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Author</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedBook.author}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Subject</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedBook.subject}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Availability</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedBook.availability}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Location</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedBook.location}</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => setSelectedBook(null)}
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

export default StudentCourseMaterials; 