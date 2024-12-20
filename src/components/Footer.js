import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-darkBlue text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-sm text-gray-300 text-center md:text-left">
            Exam Helper is your all-in-one tool for exam preparation. Build, customize, and practice exams with ease.
          </p>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-sm hover:text-lightBlue transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/multiple-choice" className="text-sm hover:text-lightBlue transition duration-300">
                Multiple Choice
              </Link>
            </li>
            <li>
              <Link to="/short-answer" className="text-sm hover:text-lightBlue transition duration-300">
                Short Answer
              </Link>
            </li>
            <li>
              <Link to="/true-false" className="text-sm hover:text-lightBlue transition duration-300">
                True/False
              </Link>
            </li>
            <li>
              <Link to="/matching" className="text-sm hover:text-lightBlue transition duration-300">
                Matching
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center md:items-end">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-sm text-gray-300">Email: support@examhelper.com</p>
          <p className="text-sm text-gray-300">Phone: +123 456 7890</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-lightBlue transition duration-300"
            >
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-lightBlue transition duration-300"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-lightBlue transition duration-300"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Exam Helper. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
