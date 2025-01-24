import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center text-center px-4 sm:px-6"
    >
      <div>
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white animate-pulse leading-snug sm:leading-normal">
          Hello, I'm Archit Shukla
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          I design, code, and build applications.
        </p>
      </div>
    </section>
  );
};

export default Home;
