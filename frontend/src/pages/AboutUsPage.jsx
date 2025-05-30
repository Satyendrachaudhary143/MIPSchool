import React from 'react';
import { motion } from 'framer-motion';

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

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 space-y-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-center text-gray-800 mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          About Our School
        </motion.h1>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-16"
        >
          {/* Welcome Section */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300"
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Welcome to [School Name]</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Welcome to [School Name], where we are dedicated to providing a nurturing and stimulating environment that fosters academic excellence, personal growth, and holistic development. Our commitment is to empower students to become lifelong learners and responsible global citizens.
            </p>
          </motion.div>

          {/* Our History Section */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300"
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Our History</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Founded in [Year], [School Name] has a rich history of [mention a few key historical points, e.g., serving the community, focusing on innovation, achieving milestones]. Over the years, we have grown from a small institution into a renowned educational hub, consistently adapting to the evolving needs of education while upholding our core values.
            </p>
          </motion.div>

          {/* Mission and Vision Section */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300"
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Mission and Vision</h2>
            <div className="space-y-8">
              <motion.div 
                variants={fadeInUp}
                className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <h3 className="text-2xl font-medium text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Our mission is to provide a comprehensive education that encourages critical thinking, creativity, and collaboration. We strive to create an inclusive community where every student feels valued and is inspired to reach their full potential.
                </p>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <h3 className="text-2xl font-medium text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Our vision is to be a leading educational institution recognized for our innovative teaching methods, commitment to student success, and positive impact on the community. We aim to shape future leaders who are compassionate, confident, and well-equipped to face the challenges of the 21st century.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Our Values Section */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300"
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Excellence in Education", icon: "🎓" },
                { title: "Integrity and Respect", icon: "🤝" },
                { title: "Innovation and Creativity", icon: "💡" },
                { title: "Community and Collaboration", icon: "👥" },
                { title: "Personal Growth", icon: "🌱" },
                { title: "Global Citizenship", icon: "🌍" }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <h3 className="text-xl font-medium text-gray-900">{value.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action Section */}
          <motion.div 
            variants={fadeInUp}
            className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-center"
          >
            <h2 className="text-3xl font-semibold text-white mb-6">Join Our Community</h2>
            <p className="text-white/90 leading-relaxed text-lg mb-8">
              Interested in joining our school community? We invite you to explore our admissions process or contact us for more information.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/admissions" 
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Visit Admissions
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsPage; 