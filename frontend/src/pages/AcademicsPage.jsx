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

const AcademicsPage = () => {
  const [activeStream, setActiveStream] = useState(null);
  const [hoveredSubject, setHoveredSubject] = useState(null);

  const primarySubjects = [
    { name: 'English', icon: '📚', description: 'Developing strong communication and literary skills' },
    { name: 'Mathematics', icon: '🔢', description: 'Building foundation in numbers and problem-solving' },
    { name: 'Science', icon: '🔬', description: 'Exploring the wonders of the natural world' },
    { name: 'Social Studies', icon: '🌍', description: 'Understanding society and global perspectives' },
    { name: 'Computer Science', icon: '💻', description: 'Introduction to digital literacy and coding' },
    { name: 'Art', icon: '🎨', description: 'Fostering creativity and artistic expression' },
    { name: 'Music', icon: '🎵', description: 'Developing musical appreciation and skills' },
    { name: 'Physical Education', icon: '⚽', description: 'Promoting physical fitness and sportsmanship' }
  ];

  const secondarySubjects = [
    { name: 'English Language & Literature', icon: '📖', description: 'Advanced language skills and literary analysis' },
    { name: 'Mathematics', icon: '📐', description: 'Advanced mathematical concepts and applications' },
    { name: 'Science', icon: '🧪', description: 'In-depth study of Physics, Chemistry, and Biology' },
    { name: 'Social Science', icon: '🏛️', description: 'Comprehensive study of History, Geography, and Civics' },
    { name: 'Computer Applications', icon: '💾', description: 'Practical computer skills and programming' },
    { name: 'Optional Subjects', icon: '🎯', description: 'Choice of additional languages and specialized subjects' },
    { name: 'Art', icon: '🎭', description: 'Advanced artistic techniques and expression' },
    { name: 'Physical Education', icon: '🏃', description: 'Sports and physical development' }
  ];

  const higherSecondaryStreams = [
    {
      name: 'Science',
      icon: '🔬',
      description: 'Prepare for careers in engineering, medicine, and research',
      subjects: [
        { name: 'Physics', icon: '⚡', description: 'Study of matter, energy, and their interactions' },
        { name: 'Chemistry', icon: '🧪', description: 'Understanding chemical reactions and properties' },
        { name: 'Biology', icon: '🧬', description: 'Exploring living organisms and life processes' },
        { name: 'Mathematics', icon: '📐', description: 'Advanced mathematical concepts and applications' },
        { name: 'English', icon: '📚', description: 'Advanced communication and literary skills' },
        { name: 'Computer Science', icon: '💻', description: 'Programming and computational thinking' }
      ]
    },
    {
      name: 'Commerce',
      icon: '💼',
      description: 'Foundation for business, finance, and entrepreneurship',
      subjects: [
        { name: 'Accountancy', icon: '📊', description: 'Financial accounting and business transactions' },
        { name: 'Business Studies', icon: '🏢', description: 'Understanding business operations and management' },
        { name: 'Economics', icon: '💰', description: 'Study of economic systems and principles' },
        { name: 'Mathematics', icon: '📈', description: 'Business mathematics and statistics' },
        { name: 'English', icon: '📝', description: 'Business communication and writing' },
        { name: 'Informatics Practices', icon: '💾', description: 'Business applications of technology' }
      ]
    },
    {
      name: 'Humanities',
      icon: '🎓',
      description: 'Explore social sciences, arts, and cultural studies',
      subjects: [
        { name: 'History', icon: '📜', description: 'Study of past events and their impact' },
        { name: 'Political Science', icon: '🏛️', description: 'Understanding political systems and governance' },
        { name: 'Geography', icon: '🗺️', description: 'Study of Earth and human-environment interaction' },
        { name: 'Economics', icon: '💹', description: 'Understanding economic systems and policies' },
        { name: 'English', icon: '📚', description: 'Literature and advanced communication' },
        { name: 'Sociology', icon: '👥', description: 'Study of society and social behavior' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 space-y-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-center text-gray-800 mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Our Academic Programs
        </motion.h1>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-16"
        >
          {/* Primary Section */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300"
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Primary School (Grades 1-5)
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              In the primary years, we focus on building a strong foundation in core subjects while encouraging curiosity and a love for learning. Our curriculum is designed to be interactive and engaging, fostering essential skills in a supportive environment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {primarySubjects.map((subject, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{subject.icon}</div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{subject.name}</h3>
                  <p className="text-gray-600 text-sm">{subject.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Secondary Section */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300"
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Secondary School (Grades 6-10)
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              The secondary school curriculum is designed to broaden students' knowledge and critical thinking abilities. We offer a balanced mix of compulsory and optional subjects to cater to diverse interests and prepare students for higher studies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {secondarySubjects.map((subject, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{subject.icon}</div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{subject.name}</h3>
                  <p className="text-gray-600 text-sm">{subject.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Higher Secondary Section */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300"
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Higher Secondary School (Grades 11-12)
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              In the higher secondary years, students choose specialized streams based on their career aspirations. Our comprehensive curriculum and experienced faculty prepare students for competitive examinations and future academic pursuits.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {higherSecondaryStreams.map((stream, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setActiveStream(activeStream === index ? null : index)}
                    className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-4xl mb-3">{stream.icon}</div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">{stream.name} Stream</h3>
                    <p className="text-gray-600 mb-4">{stream.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      View Subjects
                    </motion.button>
                  </motion.div>
                  
                  <AnimatePresence>
                    {activeStream === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 space-y-3"
                      >
                        {stream.subjects.map((subject, subjectIndex) => (
                          <motion.div
                            key={subjectIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subjectIndex * 0.1 }}
                            className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{subject.icon}</span>
                              <div>
                                <h4 className="font-medium text-gray-900">{subject.name}</h4>
                                <p className="text-sm text-gray-600">{subject.description}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action Section */}
          <motion.div 
            variants={fadeInUp}
            className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-center"
          >
            <h2 className="text-3xl font-semibold text-white mb-6">Ready to Join Our Academic Community?</h2>
            <p className="text-white/90 leading-relaxed text-lg mb-8">
              Take the first step towards an exceptional educational journey. Explore our admissions process or schedule a campus visit.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/admissions" 
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Apply Now
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
              >
                Schedule Visit
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AcademicsPage; 