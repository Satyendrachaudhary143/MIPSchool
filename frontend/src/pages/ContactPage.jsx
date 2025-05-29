import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800">Get In Touch</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Email or Phone Number</label>
              <input
                type="text"
                id="contact"
                name="contact"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Email or Phone"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* School Contact Information */}
        <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Contact Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Email Address</h3>
              <p className="mt-1 text-gray-600">info@mibschool.com</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Phone Number</h3>
              <p className="mt-1 text-gray-600">+91 12345 67890</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Address</h3>
              <p className="mt-1 text-gray-600">123 School Lane, Education City, State, Pincode</p>
            </div>
          </div>
          
          {/* Social Media Links */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Connect With Us</h3>
            <div className="flex space-x-6">
              {/* Replace with actual social media icons/links */}
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <span className="sr-only">Instagram</span>
                {/* Instagram Icon Placeholder */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.317 3.031a1.664 1.664 0 011.742 0l5.342 2.671c.503.252.822.76.822 1.322V12.38c0 .708-.443 1.343-1.114 1.586l-5.342 2.671a1.664 1.664 0 01-1.742 0l-5.342-2.671C5.043 13.723 4.6 13.088 4.6 12.38V7.024c0-.562.319-1.07.822-1.322l5.342-2.671zm-1.894 4.112a.832.832 0 00-.884 0L3.885 9.845A.926.926 0 003 10.687v1.983a.926.926 0 00.885.842l5.654 2.827a.832.832 0 00.884 0l5.654-2.827a.926.926 0 00.885-.842v-1.983a.926.926 0 00-.885-.842l-5.654-2.827zM12 8.85l-.528-.264-4.14 2.07.528.264 4.14-2.07zM12 10.547l-.885-.442-4.14 2.07.885.442 4.14-2.07zm1.894-3.365l-4.14 2.07-.528-.264 4.14-2.07.528.264zm-1.894 3.365l-4.14 2.07-.885-.442 4.14-2.07.885.442z" clipRule="evenodd" /></svg>

              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <span className="sr-only">Twitter</span>
                 {/* Twitter Icon Placeholder */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178-.004-.357-.012-.534A8.359 8.359 0 0022 5.92a8.11 8.11 0 01-2.357.646 4.116 4.116 0 001.804-2.27 8.34 8.34 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.273 4.106 4.106 0 001.27 5.477A4.073 4.073 0 014 10.34c0-.092.004-.184.012-.276a4.105 4.105 0 003.247 4.03z" /></svg>

              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <span className="sr-only">LinkedIn</span>
                 {/* LinkedIn Icon Placeholder */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.227-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>

              </a>
              {/* Add more social media icons here (e.g., Facebook, YouTube) */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 