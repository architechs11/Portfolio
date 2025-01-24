import React from 'react';

const Home = () => {
  return (
    <section id="home" className="h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center text-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-white animate-pulse">
          Hello, I'm Archit Shukla
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          I design, code, and build applications.
        </p>
      </div>
    </section>
  );
};

export default Home;
