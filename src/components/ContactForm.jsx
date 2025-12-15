import { useState } from 'react';
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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full font-semibold mb-4 text-sm sm:text-base">
            Get in Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-4">
            Send Us a <span className="text-red-600">Message</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 px-4">
            Have questions or special requests? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            {/* Name Field */}
            <div className="relative">
              <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                Full Name *
              </label>
              <div className="relative">
                <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base">
                  <FaUser />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="relative">
              <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                Email Address *
              </label>
              <div className="relative">
                <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base">
                  <FaEnvelope />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
            </div>
          </div>

          {/* Phone Field */}
          <div className="mb-4 sm:mb-6">
            <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base">
                <FaPhone />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="mb-6 sm:mb-8">
            <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
              Your Message *
            </label>
            <div className="relative">
              <div className="absolute left-3 sm:left-4 top-3 sm:top-4 text-gray-400 text-sm sm:text-base">
                <FaComment />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300 resize-none"
                placeholder="Tell us about your inquiry or special request..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 sm:py-4 text-sm sm:text-base bg-red-600 text-white font-bold rounded-lg sm:rounded-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 group"
          >
            <span>Send Message</span>
            <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300 text-sm sm:text-base" />
          </button>

          <p className="text-gray-500 text-xs sm:text-sm text-center mt-4 sm:mt-6 px-2">
            By submitting this form, you agree to our privacy policy. We'll never share your information.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;