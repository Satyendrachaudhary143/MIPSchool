import { AcademicCapIcon, UserGroupIcon, BookOpenIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

const Features = () => {
  const features = [
    {
      icon: <AcademicCapIcon className="h-12 w-12 text-blue-600" />,
      title: "Expert Faculty",
      description: "Learn from experienced educators dedicated to your success"
    },
    {
      icon: <UserGroupIcon className="h-12 w-12 text-blue-600" />,
      title: "Student Support",
      description: "Comprehensive support services for academic and personal growth"
    },
    {
      icon: <BookOpenIcon className="h-12 w-12 text-blue-600" />,
      title: "Modern Curriculum",
      description: "Up-to-date curriculum designed for real-world success"
    },
    {
      icon: <ComputerDesktopIcon className="h-12 w-12 text-blue-600" />,
      title: "Digital Learning",
      description: "State-of-the-art technology for enhanced learning experience"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose MIPSchool?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover the features that make us stand out
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 