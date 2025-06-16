import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const ManagerPanelPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Manager Account', href: '/manager-panel/account' },
    { name: 'Manage Fees', href: '/manager-panel/fees' },
    { name: 'Manage Attendance', href: '/manager-panel/attendance' },
    { name: 'Manage Marksheet', href: '/manager-panel/marksheet' },
    { name: 'Manage Exam Schedule', href: '/manager-panel/exam-schedule' },
    { name: 'Manage Grade Book', href: '/manager-panel/grade-book' },
    { name: 'Manage Digital Library', href: '/manager-panel/library' },
    { name: 'Manage Documents', href: '/manager-panel/documents' },
    { name: 'Manage Inventory', href: '/manager-panel/inventory' },
    { name: 'Manage School Calendar', href: '/manager-panel/calendar' },
    { name: 'Manage Curriculum', href: '/manager-panel/curriculum' },
    { name: 'Manage PTM', href: '/manager-panel/ptm' },
    { name: 'Manage Complaints', href: '/manager-panel/complaints' },
    { name: 'Manage Notifications', href: '/manager-panel/notifications' },
    { name: 'Manage Groups', href: '/manager-panel/groups' },
    { name: 'Manage Admissions', href: '/manager-panel/admissions' },
    { name: 'Manage Salary', href: '/manager-panel/salary' },
    { name: 'Manage Payment Settings', href: '/manager-panel/payment-settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 flex z-40 md:hidden ${isSidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'} transition-transform duration-300`}>
        {/* Sidebar overlay */}
        <div className={`absolute inset-0 bg-gray-600 opacity-75 ${isSidebarOpen ? 'block' : 'hidden'}`} onClick={() => setIsSidebarOpen(false)}></div>
        
        {/* Mobile sidebar content */}
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <span className="text-2xl font-bold text-blue-600">Manager Panel</span>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                    location.pathname === item.href ? 'bg-blue-100 text-blue-900' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 border-r border-gray-200 bg-white">
          <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <span className="text-2xl font-bold text-blue-600">Manager Panel</span>
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    location.pathname === item.href ? 'bg-blue-100 text-blue-900' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        {/* Mobile menu button */}
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ManagerPanelPage; 