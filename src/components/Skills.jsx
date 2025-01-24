import React, { useEffect } from 'react';
import { FaJava, FaReact, FaLinux, FaPython, FaNodeJs } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiMysql, SiOpenai } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc'; // Generic code icon for Object-Oriented Programming
import { MdApi } from 'react-icons/md'; // API icon for REST APIs
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Skills = () => {
  const skills = [
    { name: 'Java', icon: <FaJava className="text-4xl text-red-600" /> },
    { name: 'React.js', icon: <FaReact className="text-4xl text-blue-500" /> },
    { name: 'HTML', icon: <SiHtml5 className="text-4xl text-orange-500" /> },
    { name: 'CSS', icon: <SiCss3 className="text-4xl text-blue-400" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-4xl text-yellow-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-teal-500" /> },
    { name: 'Linux', icon: <FaLinux className="text-4xl text-gray-500" /> },
    { name: 'Python', icon: <FaPython className="text-4xl text-blue-300" /> },
    { name: 'MySQL', icon: <SiMysql className="text-4xl text-blue-600" /> },
    { name: 'Generative AI', icon: <SiOpenai className="text-4xl text-purple-500" /> },
    { name: 'Data Structures & Algorithms', icon: <VscCode className="text-4xl text-gray-300" /> },
    { name: 'REST APIs', icon: <MdApi className="text-4xl text-red-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-400" /> },
  ];

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Duration of animation
      easing: 'ease-in-out', // Smooth transition
      once: false, // Trigger animation every time the element is in view
    });
  }, []);

  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center px-4 sm:px-6 py-12"
    >
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 max-w-6xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-gray-700"
            data-aos="fade-up" // Apply animation on scroll
            data-aos-delay={index * 100} // Delay animation based on index for sequential appearance
          >
            {skill.icon}
            <p className="mt-2 text-sm sm:text-base font-medium text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
