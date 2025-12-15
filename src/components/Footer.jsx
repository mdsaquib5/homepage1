import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" }
  ];

  const menuCategories = [
    { name: "Pizzas", href: "/menu#pizzas" },
    { name: "Burgers", href: "/menu#burgers" },
    { name: "Chicken", href: "/menu#chicken" },
    { name: "Salads", href: "/menu#salads" },
    { name: "Drinks", href: "/menu#drinks" },
    { name: "Desserts", href: "/menu#desserts" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <span className="text-red-500">Brand</span>
              <span className="text-white">FOODS</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
              We're committed to delivering the best food experience with fresh ingredients and fast delivery to your doorstep.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaYoutube].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110"
                  aria-label={`Social media link ${index + 1}`}
                >
                  <Icon className="text-lg sm:text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm sm:text-base text-gray-400 hover:text-red-400 transition-colors duration-300 flex items-center gap-2 hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-600 rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Categories */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Our Menu</h4>
            <ul className="space-y-2 sm:space-y-3">
              {menuCategories.map((category, index) => (
                <li key={index}>
                  <a 
                    href={category.href} 
                    className="text-sm sm:text-base text-gray-400 hover:text-red-400 transition-colors duration-300 flex items-center gap-2 hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-600 rounded-full"></span>
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-base sm:text-lg" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm sm:text-base">Call Us</p>
                  <p className="text-xs sm:text-sm text-gray-400 break-words">+1 (555) 123-FOOD</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="text-base sm:text-lg" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm sm:text-base">WhatsApp</p>
                  <p className="text-xs sm:text-sm text-gray-400 break-words">+1 (555) 987-6543</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-base sm:text-lg" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm sm:text-base">Email</p>
                  <p className="text-xs sm:text-sm text-gray-400 break-words">hello@Brandfoods.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-base sm:text-lg" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm sm:text-base">Visit Us</p>
                  <p className="text-xs sm:text-sm text-gray-400 break-words">123 Food Street, City</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 sm:pt-10 md:pt-12 mb-6 sm:mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 px-4">Get the latest updates on new products and upcoming sales</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-full bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500 transition-colors"
              />
              <button className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Brand Foods. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-xs sm:text-sm transition-colors whitespace-nowrap">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs sm:text-sm transition-colors whitespace-nowrap">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs sm:text-sm transition-colors whitespace-nowrap">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;