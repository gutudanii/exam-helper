import React from 'react';
import profileImg from '../profile.jpg';

const Contact = () => {
  return (
    <main className="bg-gray-100 min-h-screen p-8 flex flex-col items-center">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-darkBlue mb-4">Get in Touch with Me</h1>
        <p className="text-lg text-darkGray">I'd love to connect with you!</p>
      </section>

      {/* Developer Section */}
      <section className="w-full lg:w-2/3 bg-white p-8 rounded-lg shadow-md text-center mb-12">
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full bg-gray-300 mb-4 flex items-center justify-center overflow-hidden">
            {/* Add actual profile image here */}
            <img
              src={profileImg} // Replace this with your actual image URL
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Developer Info */}
          <h2 className="text-2xl font-bold text-darkGreen mb-2">Gutu Daniel Geleta</h2>
          <p className="text-md text-darkGray">Full Stack Developer</p>
          <p className="text-md text-darkGray mb-4">
            Email:{" "}
            <a
              href="mailto:gutudanielgeleta.g@gmail.com"
              className="text-darkBlue hover:underline"
            >
              gutudanielgeleta.g@gmail.com
            </a>
          </p>

          {/* About Me Link */}
          <a
            href="https://www.linkedin.com/in/gutu-daniel/"
            className="inline-block px-6 py-2 bg-darkBlue text-white rounded-lg hover:bg-darkGreen transition-all"
          >
            About Me
          </a>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="w-full lg:w-2/3 bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-darkBlue mb-4">Follow Me</h2>
        <p className="text-md text-darkGray mb-6">
          Connect with me on social media for updates and collaboration.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/gutu-daniel/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-3xl hover:opacity-75"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/gutudanii/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 text-3xl hover:opacity-75"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/gutuyeshi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 text-3xl hover:opacity-75"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a href="htto" className="text-blue-700 text-3xl hover:opacity-75">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contact;
