import React, { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://portfolio-backend-9faw.onrender.com/send-email", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Failed to send message.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-gray-900 to-slate-950 flex flex-col items-center justify-center text-white px-4 sm:px-6 py-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Contact Me</h2>
      <form
        className="w-full max-w-md sm:max-w-lg bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div className="mb-4 sm:mb-6">
          <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4 sm:mb-6">
          <label className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        {/* Message */}
        <div className="mb-4 sm:mb-6">
          <label className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows="4"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-800 text-white font-medium py-3 rounded transition duration-300"
        >
          Send Message
        </button>

        {/* Status */}
        {status && <p className="mt-4 text-sm text-gray-300">{status}</p>}
      </form>
    </section>
  );
};

export default ContactMe;
