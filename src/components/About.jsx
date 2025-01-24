import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import the AOS CSS styles

const About = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing function for smooth animation
      once: false, // Trigger animation every time it comes into view (not just once)
      offset: 100, // Trigger the animation when the element is 100px before entering the viewport
    });

    // Re-initialize AOS to refresh animations on page visits or navigation
    AOS.refresh();
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center text-pretty text-white px-2"
    >
      <h2
        className="text-4xl font-bold mb-6"
        data-aos="fade-up" // Animation on the title
      >
        About Me
      </h2>
      <ul className="max-w-2xl text-left list-disc list-inside space-y-6 text-lg leading-relaxed">
        <li data-aos="fade-up">Hi, I am Archit Shukla, a passionate programmer with a strong foundation in Java, Python, JavaScript, and DSA.</li>
        <li data-aos="fade-up" data-aos-delay="100">Currently, I am in my final year of Computer Science Engineering, and I love solving complex problems and building efficient solutions.</li>
        <li data-aos="fade-up" data-aos-delay="200">My expertise includes creating dynamic web applications using HTML5, CSS3, JavaScript, React.js, etc.</li>
        <li data-aos="fade-up" data-aos-delay="300">I'm particularly interested in exploring Generative AI and applying it to real-world challenges.</li>
        <li data-aos="fade-up" data-aos-delay="400">Apart from coding, I enjoy reading books, contributing to open-source, and playing mobile games. Let us connect and create something amazing!</li>
      </ul>
      {/* Download CV Button */}
      <a
        href="https://drive.google.com/file/d/1eemTq7fJEZQjLhKL7sJRVDcb8nawR2cD/view"  // Replace with the actual path to your CV file
        target="_blank"  // This opens the link in a new tab
        rel="noopener noreferrer"
      >
        <button className="mt-6 px-6 py-3 bg-blue-900 text-white rounded-md text-lg font-semibold hover:bg-blue-600 transition-all">
          Download CV
        </button>
      </a>
    </section>
  );
};

export default About;
