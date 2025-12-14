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
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-red-500">Brand</span>
              <span className="text-white">FOODS</span>
            </h3>
            <p className="text-gray-400 mb-6">
              We're committed to delivering the best food experience with fresh ingredients and fast delivery to your doorstep.
            </p>
            <div className="flex gap-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaYoutube].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Categories */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Menu</h4>
            <ul className="space-y-3">
              {menuCategories.map((category, index) => (
                <li key={index}>
                  <a 
                    href={category.href} 
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <FaPhone className="text-lg" />
                </div>
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-gray-400">+1 (555) 123-FOOD</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <FaWhatsapp className="text-lg" />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-gray-400">+1 (555) 987-6543</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-400">hello@Brandfoods.com</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-gray-400">123 Food Street, City</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-12 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 mb-6">Get the latest updates on new products and upcoming sales</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-6 py-3 rounded-full bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-red-500"
              />
              <button className="px-8 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Brand Foods. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;