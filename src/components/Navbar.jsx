import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-100 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <div className="space-x-6">
        <a href="#home" className="hover:text-gray-400">Home</a>
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#skills" className="hover:text-gray-400">Skills</a>
        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#contact" className="hover:text-gray-400">Contact Me</a>
      </div>
    </nav>
  );
};

export default Navbar;
