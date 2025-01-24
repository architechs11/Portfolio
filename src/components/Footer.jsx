import React from "react";
import {
  FaFacebook,
  FaPhone,
  FaLinkedin,
  FaMailBulk,
  FaHome,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white bg-gradient-to-b from-gray-900 to-black py-8">
      <div className="container mx-auto text-center px-4 sm:px-6">
        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:space-x-6 space-y-4 sm:space-y-0 mb-8">
          {/* Location */}
          <div className="flex items-center gap-2">
            <FaHome size={20} />
            <p className="text-sm sm:text-base">Lucknow, India.</p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <FaPhone size={20} />
            <p className="text-sm sm:text-base">+91-8840048523</p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <FaMailBulk size={20} />
            <p className="text-sm sm:text-base">architechs11@gmail.com</p>
          </div>
        </div>

        {/* About the Creator */}
        <div className="mb-8">
          <h4 className="text-lg sm:text-xl font-semibold">About the Creator</h4>
          <p className="mt-2 text-gray-300 text-sm sm:text-base">
            This is me Archit Shukla, currently in my final year of Engineering in Computer Science. <br />
            I love to develop things and build codes.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://x.com/im_archit_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/architechs11"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://github.com/architechs11"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
