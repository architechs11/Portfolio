import React from "react";
import { FaFacebook, FaPhone, FaLinkedin, FaMailBulk, FaHome, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white bg-gradient-to-b from-gray-900 to-black py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-12">
          {/* Location */}
          <div className="flex items-center gap-2">
            <FaHome size={20} />
            <p>Lucknow, India.</p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <FaPhone size={20} />
            <p>+91-8840048523</p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <FaMailBulk size={20} />
            <p>architechs11@gmail.com</p>
          </div>
        </div>

        {/* About the Creator */}
        <div className="mt-8">
          <h4 className="text-xl font-semibold">About the Creator</h4>
          <p className="mt-2 text-gray-300">
            This is me Archit Shukla, currently in my final year of Engineering in Computer Science. <br />
            I love to develop things and build codes.
          </p>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex justify-center gap-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaFacebook size={25} />
          </a>
          <a href="https://x.com/im_archit_" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaTwitter size={25} />
          </a>
          <a href="https://www.linkedin.com/in/architechs11" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin size={25} />
          </a>
          <a href="https://github.com/architechs11" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
