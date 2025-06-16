import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUsers, FaTrophy, FaBook, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const EnhancedHomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Simulated data - In a real app, this would come from an API
  const stats = [
    { id: 1, number: 5000, label: 'Students', icon: <FaUsers /> },
    { id: 2, number: 300, label: 'Teachers', icon: <FaGraduationCap /> },
    { id: 3, number: 95, label: 'Success Rate', icon: <FaTrophy /> },
    { id: 4, number: 50, label: 'Years of Excellence', icon: <FaBook /> }
  ];

  const features = [
    {
      id: 1,
      title: 'Academic Excellence',
      description: 'Comprehensive curriculum designed for holistic development',
      icon: <FaGraduationCap className="text-4xl text-blue-600" />
    },
    {
      id: 2,
      title: 'Expert Faculty',
      description: 'Highly qualified and experienced teaching staff',
      icon: <FaUsers className="text-4xl text-green-600" />
    },
    {
      id: 3,
      title: 'Modern Facilities',
      description: 'State-of-the-art infrastructure and learning resources',
      icon: <FaBook className="text-4xl text-purple-600" />
    },
    {
      id: 4,
      title: 'Sports & Activities',
      description: 'Wide range of extracurricular activities and sports',
      icon: <FaTrophy className="text-4xl text-red-600" />
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Student',
      image: 'https://via.placeholder.com/150',
      quote: 'The school has provided me with excellent opportunities to grow and learn.',
      rating: 5
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Parent',
      image: 'https://via.placeholder.com/150',
      quote: 'I am impressed with the quality of education and attention to detail.',
      rating: 5
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Annual Sports Day',
      date: '2024-04-15',
      type: 'Sports',
      description: 'Join us for a day of athletic excellence and team spirit.'
    },
    {
      id: 2,
      title: 'Science Exhibition',
      date: '2024-04-20',
      type: 'Academic',
      description: 'Showcasing innovative projects from our talented students.'
    }
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Welcome to Our School</span>
              <span className="block text-indigo-200">Where Excellence Meets Opportunity</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Join our community of learners and discover your potential. We're now accepting applications for the upcoming academic year.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                to="/admissions"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105"
              >
                Apply Now
              </Link>
              <Link
                to="/about"
                className="px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl text-blue-600 mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900">{stat.number}+</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{testimonial.quote}</p>
                  <div className="mt-4 flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <FaCalendarAlt className="text-blue-600 mr-2" />
                  <span className="text-gray-600">{event.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
                <span className="inline-block mt-4 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {event.type}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Location</h2>
              <div className="h-96 bg-gray-200 rounded-lg">
                {/* Add Google Maps iframe here */}
                <div className="flex items-center justify-center h-full">
                  <FaMapMarkerAlt className="text-4xl text-gray-400" />
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <p className="flex items-center">
                  <FaMapMarkerAlt className="text-blue-600 mr-2" />
                  123 School Street, City, Country
                </p>
                <p>Phone: +1 234 567 890</p>
                <p>Email: info@school.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default EnhancedHomePage; 