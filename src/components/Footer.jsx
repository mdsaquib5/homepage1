// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-red-400">Brand</span>Logo
              </h3>
              <p className="text-gray-400 mb-6">
                Serving delicious pizzas and meals with fast delivery since 2015. Fresh ingredients, great taste.
              </p>
              <div className="flex space-x-4">
                {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'Menu', 'Deals', 'About Us', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link 
                      to={`/${item.toLowerCase().replace(' ', '-')}`} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="text-gray-400">
                  <div className="font-medium text-white mb-1">Phone</div>
                  +1 (555) 123-FOOD
                </li>
                <li className="text-gray-400">
                  <div className="font-medium text-white mb-1">Email</div>
                  orders@Logo.com
                </li>
                <li className="text-gray-400">
                  <div className="font-medium text-white mb-1">Address</div>
                  123 Food Street, Flavor Town
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-lg font-bold mb-6">Opening Hours</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex justify-between">
                  <span>Mon - Thu</span>
                  <span>11AM - 11PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Fri - Sat</span>
                  <span>11AM - 2AM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>12PM - 10PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-8"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} Logo. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;