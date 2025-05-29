import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const StudentPanelPage = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    { path: '/student-panel', label: 'Dashboard' },
    { path: '/student-panel/account', label: 'Account' },
    { path: '/student-panel/exams', label: 'Exams' },
    { path: '/student-panel/assignments', label: 'Assignments' },
    { path: '/student-panel/course-materials', label: 'Course Materials' },
    { path: '/student-panel/ptm', label: 'Parent-Teacher Meeting' },
    { path: '/student-panel/profile', label: 'Profile' },
    { path: '/student-panel/communication', label: 'Communication Center' },
    { path: '/student-panel/fees', label: 'Fees' },
    { path: '/student-panel/attendance', label: 'Attendance' },
    { path: '/student-panel/marksheet', label: 'Marksheet' },
    { path: '/student-panel/complain', label: 'Complain' },
    { path: '/student-panel/notification', label: 'Notification' },
    { path: '/student-panel/group', label: 'Group' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-200 pt-0">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-0 left-0 z-50 p-1 text-gray-800 focus:outline-none"
      >
        {isSidebarOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:inset-auto transition duration-200 ease-in-out z-40 w-64 bg-gray-800 text-white flex flex-col shadow-lg`}
      >
        <div className="p-6 text-2xl font-bold border-b border-gray-700">Student Panel</div>
        <nav className="mt-6 flex-grow">
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block px-6 py-3 transition-colors ${
                    location.pathname === item.path ? 'bg-gray-700' : 'hover:bg-gray-700'
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Content Area */}
      <div className="flex-grow p-4 lg:p-8">
        <div className="bg-white p-4 lg:p-8 rounded-lg shadow-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default StudentPanelPage; 