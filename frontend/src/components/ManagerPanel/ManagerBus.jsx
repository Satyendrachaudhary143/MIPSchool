import React, { useState } from 'react';

const ManagerBus = () => {
  const [buses, setBuses] = useState([
    { id: 1, route: 'Route A', driverName: 'John Doe', driverContact: '9876543210', vehicleNumber: 'DL 1A 1234', capacity: 40 },
    { id: 2, route: 'Route B', driverName: 'Jane Smith', driverContact: '9876543211', vehicleNumber: 'DL 1B 5678', capacity: 35 },
    // Add more bus data as needed
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedBus, setSelectedBus] = useState(null);
  const [newBusData, setNewBusData] = useState({
    route: '',
    driverName: '',
    driverContact: '',
    vehicleNumber: '',
    capacity: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBusData({ ...newBusData, [name]: value });
  };

  const handleAddBus = () => {
    // Basic validation
    if (!newBusData.route || !newBusData.driverName || !newBusData.vehicleNumber) {
      alert('Please fill in all required fields.');
      return;
    }
    setBuses([...buses, { id: buses.length + 1, ...newBusData }]);
    setNewBusData({
      route: '',
      driverName: '',
      driverContact: '',
      vehicleNumber: '',
      capacity: '',
    });
    setShowAddModal(false);
  };

  const handleEditClick = (bus) => {
    setSelectedBus(bus);
    setNewBusData(bus);
    setShowEditModal(true);
  };

  const handleUpdateBus = () => {
    // Basic validation
    if (!newBusData.route || !newBusData.driverName || !newBusData.vehicleNumber) {
      alert('Please fill in all required fields.');
      return;
    }
    setBuses(buses.map(bus => bus.id === selectedBus.id ? { ...bus, ...newBusData } : bus));
    setShowEditModal(false);
    setSelectedBus(null);
    setNewBusData({
      route: '',
      driverName: '',
      driverContact: '',
      vehicleNumber: '',
      capacity: '',
    });
  };

  const handleDeleteBus = (id) => {
    if (window.confirm('Are you sure you want to delete this bus record?')) {
      setBuses(buses.filter(bus => bus.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Manage Buses</h2>

      {/* Add New Bus Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add New Bus
        </button>
      </div>

      {/* Buses Table */}
      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Bus Details</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver Contact</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle Number</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {buses.map((bus) => (
              <tr key={bus.id} className="hover:bg-gray-50">
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{bus.route}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{bus.driverName}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{bus.driverContact}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{bus.vehicleNumber}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{bus.capacity}</td>
                <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => handleEditClick(bus)} className="text-blue-600 hover:text-blue-900 mr-4">Edit</button>
                  <button onClick={() => handleDeleteBus(bus.id)} className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add New Bus Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <h3 className="text-lg font-bold leading-6 text-gray-900 mb-4">Add New Bus</h3>
            <div className="mt-2 space-y-4">
              <div>
                <label htmlFor="route" className="block text-sm font-medium text-gray-700">Route</label>
                <input type="text" name="route" id="route" value={newBusData.route} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="driverName" className="block text-sm font-medium text-gray-700">Driver Name</label>
                <input type="text" name="driverName" id="driverName" value={newBusData.driverName} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
               <div>
                <label htmlFor="driverContact" className="block text-sm font-medium text-gray-700">Driver Contact</label>
                <input type="text" name="driverContact" id="driverContact" value={newBusData.driverContact} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="vehicleNumber" className="block text-sm font-medium text-gray-700">Vehicle Number</label>
                <input type="text" name="vehicleNumber" id="vehicleNumber" value={newBusData.vehicleNumber} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="capacity" className="block text-sm font-medium text-gray-700">Capacity</label>
                <input type="number" name="capacity" id="capacity" value={newBusData.capacity} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>
            <div className="items-center px-4 py-3">
              <button
                id="ok-btn"
                onClick={handleAddBus}
                className="px-4 py-2 bg-blue-600 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add Bus
              </button>
              <button
                id="cancel-btn"
                onClick={() => setShowAddModal(false)}
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Bus Modal */}
      {showEditModal && selectedBus && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <h3 className="text-lg font-bold leading-6 text-gray-900 mb-4">Edit Bus</h3>
            <div className="mt-2 space-y-4">
               <div>
                <label htmlFor="route" className="block text-sm font-medium text-gray-700">Route</label>
                <input type="text" name="route" id="route" value={newBusData.route} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="driverName" className="block text-sm font-medium text-gray-700">Driver Name</label>
                <input type="text" name="driverName" id="driverName" value={newBusData.driverName} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
               <div>
                <label htmlFor="driverContact" className="block text-sm font-medium text-gray-700">Driver Contact</label>
                <input type="text" name="driverContact" id="driverContact" value={newBusData.driverContact} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="vehicleNumber" className="block text-sm font-medium text-gray-700">Vehicle Number</label>
                <input type="text" name="vehicleNumber" id="vehicleNumber" value={newBusData.vehicleNumber} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="capacity" className="block text-sm font-medium text-gray-700">Capacity</label>
                <input type="number" name="capacity" id="capacity" value={newBusData.capacity} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>
            <div className="items-center px-4 py-3">
              <button
                id="update-btn"
                onClick={handleUpdateBus}
                className="px-4 py-2 bg-blue-600 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Update Bus
              </button>
              <button
                id="cancel-btn"
                onClick={() => setShowEditModal(false)}
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagerBus; 