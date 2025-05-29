import React, { useState } from 'react';

const TeacherLibrary = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    file: null,
    coverImage: null
  });

  const categories = [
    'Textbooks',
    'Reference Books',
    'Story Books',
    'Science',
    'Mathematics',
    'History',
    'Geography',
    'Literature',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setNewBook(prev => ({
      ...prev,
      [name]: files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooks(prev => [...prev, { ...newBook, id: Date.now() }]);
    setNewBook({
      title: '',
      author: '',
      category: '',
      description: '',
      file: null,
      coverImage: null
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Digital Library Management</h2>

      {/* Add New Book */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Add New Book</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={newBook.title}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Author</label>
              <input
                type="text"
                name="author"
                value={newBook.author}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                name="category"
                value={newBook.category}
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
              <label className="block text-sm font-medium text-gray-700">Book File (PDF)</label>
              <input
                type="file"
                name="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="mt-1 block w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Cover Image</label>
              <input
                type="file"
                name="coverImage"
                accept="image/*"
                onChange={handleFileChange}
                className="mt-1 block w-full"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={newBook.description}
              onChange={handleInputChange}
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>

      {/* Books List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Library Collection</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div key={book.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                {book.coverImage ? (
                  <img
                    src={URL.createObjectURL(book.coverImage)}
                    alt={book.title}
                    className="object-cover w-full h-48"
                  />
                ) : (
                  <div className="flex items-center justify-center h-48 bg-gray-100">
                    <span className="text-gray-400">No Cover Image</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800">{book.title}</h4>
                <p className="text-sm text-gray-600">By {book.author}</p>
                <p className="text-sm text-gray-500 mt-1">{book.category}</p>
                <p className="text-sm text-gray-700 mt-2 line-clamp-2">{book.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <button
                    onClick={() => alert('View book')}
                    className="text-blue-600 hover:text-blue-900 text-sm font-medium"
                  >
                    View Book
                  </button>
                  <button
                    onClick={() => alert('Download book')}
                    className="text-green-600 hover:text-green-900 text-sm font-medium"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Search Books</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <input
              type="text"
              placeholder="Search by title or author"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <select
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div>
            <button
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherLibrary; 