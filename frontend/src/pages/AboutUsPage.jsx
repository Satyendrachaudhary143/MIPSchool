import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">About Our School</h1>

      {/* Welcome Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to [School Name]</h2>
        <p className="text-gray-600 leading-relaxed">
          Welcome to [School Name], where we are dedicated to providing a nurturing and stimulating environment that fosters academic excellence, personal growth, and holistic development. Our commitment is to empower students to become lifelong learners and responsible global citizens.
        </p>
      </div>

      {/* Our History Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our History</h2>
        <p className="text-gray-600 leading-relaxed">
          Founded in [Year], [School Name] has a rich history of [mention a few key historical points, e.g., serving the community, focusing on innovation, achieving milestones]. Over the years, we have grown from a small institution into a renowned educational hub, consistently adapting to the evolving needs of education while upholding our core values.
        </p>
      </div>

      {/* Mission and Vision Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Mission and Vision</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-gray-900">Our Mission</h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Our mission is to provide a comprehensive education that encourages critical thinking, creativity, and collaboration. We strive to create an inclusive community where every student feels valued and is inspired to reach their full potential.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-900">Our Vision</h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Our vision is to be a leading educational institution recognized for our innovative teaching methods, commitment to student success, and positive impact on the community. We aim to shape future leaders who are compassionate, confident, and well-equipped to face the challenges of the 21st century.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
          <li>Excellence in Education</li>
          <li>Integrity and Respect</li>
          <li>Innovation and Creativity</li>
          <li>Community and Collaboration</li>
          <li>Personal Growth and Well-being</li>
          {/* Add more values as needed */}
        </ul>
      </div>

      {/* Optional: Call to Action or Facilities Highlight */}
      {/*
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Learn More</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Interested in joining our school community? We invite you to explore our admissions process or contact us for more information.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/admissions" className="px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Visit Admissions
          </a>
          <a href="/contact" className="px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Contact Us
          </a>
        </div>
      </div>
      */}

    </div>
  );
};

export default AboutUsPage; 