import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPinIcon className="h-5 w-5 text-blue-500" />
                <span>123 Education Street, City, Country</span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-blue-500" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-blue-500" />
                <span>info@mipschool.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link to="/admissions" className="hover:text-blue-500 transition-colors">Admissions</Link></li>
              <li><Link to="/academics" className="hover:text-blue-500 transition-colors">Academics</Link></li>
              <li><Link to="/events" className="hover:text-blue-500 transition-colors">Events</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><FaInstagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} MIPSchool. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 