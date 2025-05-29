import React from 'react';

const EventsPage = () => {
  const culturalFestImages = [
    'https://images.unsplash.com/photo-1523580506012-e0a2a85e32b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Replace with cultural fest image URL 1
    'https://images.unsplash.com/photo-1549451371-64aa9f8fcd2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Replace with cultural fest image URL 2
    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Replace with cultural fest image URL 3
    'https://images.unsplash.com/photo-1532012195267-cdedda161345?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Replace with cultural fest image URL 4
  ];

  const danceEventImages = [
    'https://images.unsplash.com/photo-1517510178653-8f3618a05389?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Replace with dance event image URL 1
    'https://images.unsplash.com/photo-1526404169292-78b0b8451e0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Replace with dance event image URL 2
    'https://images.unsplash.com/photo-1548928124-06049a4554f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Replace with dance event image URL 3
  ];

  const fresherPartyImages = [
    'https://images.unsplash.com/photo-1519052537077-0183c39d854b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Replace with fresher party image URL 1
    'https://images.unsplash.com/photo-1492684223066-81342fd6cdbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Replace with fresher party image URL 2
    'https://images.unsplash.com/photo-1501446529957-628b1f59ce32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Replace with fresher party image URL 3
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800">School Events</h1>

      {/* Cultural Fest Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-blue-600 pb-2">Cultural Fest</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {culturalFestImages.map((imageUrl, index) => (
            <div key={index} className="rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img src={imageUrl} alt={`Cultural Fest ${index + 1}`} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Dance Events Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-blue-600 pb-2">Dance Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {danceEventImages.map((imageUrl, index) => (
            <div key={index} className="rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img src={imageUrl} alt={`Dance Event ${index + 1}`} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Fresher's Party Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-blue-600 pb-2">Fresher's Party</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fresherPartyImages.map((imageUrl, index) => (
            <div key={index} className="rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img src={imageUrl} alt={`Fresher's Party ${index + 1}`} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Add more event sections here as needed */}
    </div>
  );
};

export default EventsPage; 