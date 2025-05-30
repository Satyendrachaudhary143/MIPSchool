import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const events = [
    {
      id: 1,
      category: 'cultural',
      title: 'Annual Cultural Fest',
      date: 'March 15, 2024',
      time: '10:00 AM - 6:00 PM',
      location: 'School Auditorium',
      description: 'Join us for a day of cultural celebration featuring dance performances, music, art exhibitions, and more!',
      images: [
        'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
        'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
        'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg',
        'https://images.pexels.com/photos/1190300/pexels-photo-1190300.jpeg',
      ],
      highlights: ['Dance Performances', 'Music Shows', 'Art Exhibition', 'Food Festival']
    },
    {
      id: 2,
      category: 'dance',
      title: 'Inter-School Dance Competition',
      date: 'April 5, 2024',
      time: '2:00 PM - 8:00 PM',
      location: 'Sports Complex',
      description: 'Witness the best dance talents from schools across the city in this exciting competition!',
      images: [
        'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
        'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
        'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg',
      ],
      highlights: ['Classical Dance', 'Contemporary', 'Hip Hop', 'Group Performances']
    },
    {
      id: 3,
      category: 'party',
      title: 'Fresher\'s Welcome Party',
      date: 'August 20, 2024',
      time: '6:00 PM - 10:00 PM',
      location: 'School Grounds',
      description: 'A grand welcome party for our new students with music, dance, and fun activities!',
      images: [
        'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
        'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
        'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg',
      ],
      highlights: ['Welcome Ceremony', 'Cultural Performances', 'Games', 'Dinner']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Events', icon: '🎉' },
    { id: 'cultural', name: 'Cultural', icon: '🎭' },
    { id: 'dance', name: 'Dance', icon: '💃' },
    { id: 'party', name: 'Party', icon: '🎊' }
  ];

  const filteredEvents = activeCategory === 'all' 
    ? events 
    : events.filter(event => event.category === activeCategory);

  // Fallback image URL
  const fallbackImage = 'https://placehold.co/600x400/e2e8f0/1e40af?text=Event+Image';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 space-y-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-center text-gray-800 mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          School Events
        </motion.h1>

        {/* Category Filter */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={event.images[0]}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = fallbackImage;
                  }}
                />
                <div className="absolute top-4 right-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedEvent(event)}
                    className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-blue-600 font-medium shadow-lg hover:bg-white transition-all duration-300"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center gap-2">
                    <span className="text-blue-600">📅</span> {event.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-blue-600">⏰</span> {event.time}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-blue-600">📍</span> {event.location}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {event.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Event Details Modal */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedEvent(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative">
                  <motion.img
                    src={selectedEvent.images[0]}
                    alt={selectedEvent.title}
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = fallbackImage;
                    }}
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedEvent(null)}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-white transition-all duration-300"
                  >
                    ✕
                  </motion.button>
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedEvent.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-3">
                      <p className="flex items-center gap-2 text-gray-600">
                        <span className="text-blue-600">📅</span> {selectedEvent.date}
                      </p>
                      <p className="flex items-center gap-2 text-gray-600">
                        <span className="text-blue-600">⏰</span> {selectedEvent.time}
                      </p>
                      <p className="flex items-center gap-2 text-gray-600">
                        <span className="text-blue-600">📍</span> {selectedEvent.location}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Event Highlights</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedEvent.highlights.map((highlight, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{selectedEvent.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedEvent.images.slice(1).map((image, index) => (
                      <motion.img
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        src={image}
                        alt={`${selectedEvent.title} ${index + 2}`}
                        className="w-full h-32 object-cover rounded-lg"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = fallbackImage;
                        }}
                      />
                    ))}
                  </div>
                  <div className="mt-8 flex justify-end gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:bg-blue-700 transition-all duration-300"
                    >
                      Register Now
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300"
                    >
                      Share Event
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EventsPage; 