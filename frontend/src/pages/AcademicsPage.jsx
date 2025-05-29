import React from 'react';

const AcademicsPage = () => {
  const primarySubjects = ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Art', 'Music', 'Physical Education'];
  const secondarySubjects = ['English Language & Literature', 'Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Science (History, Geography, Civics, Economics)', 'Computer Applications', 'Optional Subjects (e.g., Hindi, French)', 'Art', 'Physical Education'];
  const higherSecondaryStreams = [
    {
      name: 'Science',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'English', 'Computer Science (Optional)', 'Physical Education (Optional)'],
    },
    {
      name: 'Commerce',
      subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics (Optional)', 'English', 'Informatics Practices (Optional)'],
    },
    {
      name: 'Humanities',
      subjects: ['History', 'Political Science', 'Geography', 'Economics', 'English', 'Sociology (Optional)', 'Psychology (Optional)', 'Physical Education (Optional)'],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">Our Academic Programs</h1>

      {/* Primary Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">Primary School (Grades 1-5)</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          In the primary years, we focus on building a strong foundation in core subjects while encouraging curiosity and a love for learning. Our curriculum is designed to be interactive and engaging, fostering essential skills in a supportive environment.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mb-2">Subjects Offered:</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 leading-relaxed">
          {primarySubjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      </div>

      {/* Secondary Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">Secondary School (Grades 6-10)</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The secondary school curriculum is designed to broaden students' knowledge and critical thinking abilities. We offer a balanced mix of compulsory and optional subjects to cater to diverse interests and prepare students for higher studies.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mb-2">Subjects Offered:</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 leading-relaxed">
          {secondarySubjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      </div>

      {/* Higher Secondary Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">Higher Secondary School (Grades 11-12)</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          In the higher secondary years, students choose specialized streams based on their career aspirations. Our comprehensive curriculum and experienced faculty prepare students for competitive examinations and future academic pursuits.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mb-4">Streams and Subjects:</h3>
        <div className="space-y-6">
          {higherSecondaryStreams.map((stream, streamIndex) => (
            <div key={streamIndex}>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{stream.name} Stream</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1 leading-relaxed">
                {stream.subjects.map((subject, subjectIndex) => (
                  <li key={subjectIndex}>{subject}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Add other academic programs or highlights here if needed */}

    </div>
  );
};

export default AcademicsPage; 