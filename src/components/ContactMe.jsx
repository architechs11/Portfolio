import React from "react";

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-slate-950 flex flex-col items-center justify-center text-white px-4 sm:px-6 py-12"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        Contact Me
      </h2>
      <p className="text-base sm:text-lg text-gray-300 mb-8 text-center max-w-xl">
        Feel free to reach out for collaborations, project discussions, or just to say hello! I'll get back to you as soon as I can.
      </p>
      <form
        className="w-full max-w-md sm:max-w-lg bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg"
        action="#"
        method="POST"
      >
        {/* Name Input */}
        <div className="mb-4 sm:mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-400 mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        {/* Email Input */}
        <div className="mb-4 sm:mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-400 mb-2"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        {/* Message Input */}
        <div className="mb-4 sm:mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-400 mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows="4"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          ></textarea>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-800 text-white font-medium py-3 rounded transition duration-300"
        >
          <a href="mailto:architechs11@gmail.com">Send Message</a>
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
