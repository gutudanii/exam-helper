import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/code.webp';

const LandingPage = () => {
  return (
    <main className="bg-gray-50 min-h-screen p-8 flex flex-col items-center">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between w-full max-w-5xl mb-16">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-5xl font-bold text-darkBlue mb-6 leading-snug">
            Welcome to <span className="text-darkGreen">Exam Helper</span>
          </h1>
          <p className="text-lg text-darkGray mb-6">
            Tools to simplify your exam preparation and create custom exams with ease. Explore the options below to get started.
          </p>
          <Link
            to="/"
            className="bg-darkGreen text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-darkBlue focus:outline-none focus:ring-2 focus:ring-darkGreen focus:ring-offset-2 transition duration-300"
          >
            Start Now
          </Link>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="Illustration of exam preparation tools"
            className="rounded-lg shadow-lg w-full max-w-md"
            loading="lazy"
          />
        </div>
      </section>

      {/* Buttons Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        <Link to="/multiple-choice">
          <div className="flex flex-col items-center p-6 bg-darkBlue text-white rounded-lg shadow hover:shadow-lg transition hover:bg-lightBlue">
            <span className="material-icons text-4xl mb-2">check_circle</span>
            <span className="text-lg font-semibold">Multiple Choice</span>
          </div>
        </Link>

        <Link to="/short-answer">
          <div className="flex flex-col items-center p-6 bg-lightBlue text-white rounded-lg shadow hover:shadow-lg transition hover:bg-darkBlue">
            <span className="material-icons text-4xl mb-2">short_text</span>
            <span className="text-lg font-semibold">Short Answer</span>
          </div>
        </Link>

        <Link to="/true-false">
          <div className="flex flex-col items-center p-6 bg-darkGreen text-white rounded-lg shadow hover:shadow-lg transition hover:bg-lightBlue">
            <span className="material-icons text-4xl mb-2">toggle_on</span>
            <span className="text-lg font-semibold">True/False</span>
          </div>
        </Link>

        <Link to="/matching">
          <div className="flex flex-col items-center p-6 bg-darkBlue text-white rounded-lg shadow hover:shadow-lg transition hover:bg-lightBlue">
            <span className="material-icons text-4xl mb-2">compare_arrows</span>
            <span className="text-lg font-semibold">Matching</span>
          </div>
        </Link>
      </section>
    </main>
  );
};

export default LandingPage;
