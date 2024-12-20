import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-darkBlue text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div>
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white hover:text-lightBlue transition duration-300"
        >
          Exam Helper
        </Link>
      </div>

      {/* Navigation for Desktop */}
      <nav className="hidden md:flex space-x-6 text-lg font-medium">
        <Link to="/" className="hover:text-lightBlue transition duration-300">
          Home
        </Link>
        <Link to="/multiple-choice" className="hover:text-lightBlue transition duration-300">
          Multi-Choices
        </Link>
        <Link to="/true-false" className="hover:text-lightBlue transition duration-300">
          True-False
        </Link>
        <Link to="/short-answer" className="hover:text-lightBlue transition duration-300">
          Short-Answer
        </Link>
        <Link to="/matching" className="hover:text-lightBlue transition duration-300">
          Matching
        </Link>
        <Link to="/contact" className="hover:text-lightBlue transition duration-300">
          Contact
        </Link>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="relative md:hidden">
        <button
          onClick={toggleMenu}
          className="text-2xl focus:outline-none hover:text-lightBlue transition duration-300"
        >
          ☰
        </button>
        {isMenuOpen && (
          <div className="fixed inset-0 bg-darkBlue text-white z-50 flex flex-col items-center justify-center space-y-8">
            <button
              onClick={closeMenu}
              className="absolute top-6 right-6 text-3xl font-bold hover:text-lightBlue"
            >
              ✕
            </button>
            <Link
              to="/"
              onClick={closeMenu}
              className="text-2xl font-bold hover:text-lightBlue transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/multiple-choice"
              onClick={closeMenu}
              className="text-2xl font-bold hover:text-lightBlue transition duration-300"
            >
              Multi-Choices
            </Link>
            <Link
              to="/true-false"
              onClick={closeMenu}
              className="text-2xl font-bold hover:text-lightBlue transition duration-300"
            >
              True-False
            </Link>
            <Link
              to="/short-answer"
              onClick={closeMenu}
              className="text-2xl font-bold hover:text-lightBlue transition duration-300"
            >
              Short-Answer
            </Link>
            <Link
              to="/matching"
              onClick={closeMenu}
              className="text-2xl font-bold hover:text-lightBlue transition duration-300"
            >
              Matching
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="text-2xl font-bold hover:text-lightBlue transition duration-300"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
