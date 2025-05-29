import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-blue-600">MIPSchool</Link>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md transition-colors">About</Link>
            <Link to="/academics" className="text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md transition-colors">Academics</Link>
            <Link to="/admissions" className="text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md transition-colors">Admissions</Link>
            <Link to="/events" className="text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md transition-colors">Events</Link>
            <Link to="/contact" className="text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md transition-colors">Contact</Link>
            <Link to="/login" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">Login</Link>
            <Link to="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">Sign Up</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md transition-colors">Home</Link>
            <Link to="/about" className="block text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md transition-colors">About</Link>
            <Link to="/academics" className="block text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md transition-colors">Academics</Link>
            <Link to="/admissions" className="block text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md transition-colors">Admissions</Link>
            <Link to="/events" className="block text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md transition-colors">Events</Link>
            <Link to="/contact" className="block text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md transition-colors">Contact</Link>
            <Link to="/login" className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors mt-2">Login</Link>
            <Link to="/signup" className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mt-2">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 