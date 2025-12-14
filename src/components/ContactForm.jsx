import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaComment, FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="text-center mb-10">
        <span className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full font-semibold mb-4">
          Get in Touch
        </span>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Send Us a <span className="text-red-600">Message</span>
        </h2>
        <p className="text-gray-600">
          Have questions or special requests? Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Name Field */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-2">
              Full Name *
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaUser />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                placeholder="John Doe"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-2">
              Email Address *
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaEnvelope />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>
          </div>
        </div>

        {/* Phone Field */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Phone Number
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaPhone />
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="mb-8">
          <label className="block text-gray-700 font-medium mb-2">
            Your Message *
          </label>
          <div className="relative">
            <div className="absolute left-4 top-4 text-gray-400">
              <FaComment />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300 resize-none"
              placeholder="Tell us about your inquiry or special request..."
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
        >
          <span>Send Message</span>
          <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
        </button>

        <p className="text-gray-500 text-sm text-center mt-6">
          By submitting this form, you agree to our privacy policy. We'll never share your information.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;