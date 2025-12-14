import React from 'react';
import { FaTruck, FaLeaf, FaClock, FaShieldAlt, FaFire, FaStar, FaUtensils, FaDollarSign } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaTruck className="text-3xl" />,
      title: "Fast Delivery",
      description: "30-minute delivery guarantee to your doorstep",
      highlight: "Guaranteed"
    },
    {
      icon: <FaLeaf className="text-3xl" />,
      title: "Fresh Ingredients",
      description: "Daily fresh ingredients, never frozen",
      highlight: "Always Fresh"
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "24/7 Service",
      description: "Open round the clock for your cravings",
      highlight: "Always Open"
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Contactless Delivery",
      description: "Safe and hygienic delivery options",
      highlight: "Safety First"
    },
    {
      icon: <FaFire className="text-3xl" />,
      title: "Hot & Fresh",
      description: "Food prepared fresh for every order",
      highlight: "Hot Meals"
    },
    {
      icon: <FaStar className="text-3xl" />,
      title: "Quality Guarantee",
      description: "100% satisfaction or your money back",
      highlight: "Premium"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            More Than Just <span className="text-red-600">Fast Food</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering the best food experience with services that go beyond your expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 bg-red-50 rounded-xl text-red-600">
                  {service.icon}
                </div>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
                  {service.highlight}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="text-red-600 font-semibold flex items-center gap-2 hover:text-red-700 transition-colors">
                Learn more
                <span className="text-lg">→</span>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl p-8 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Try Our Premium Service</h3>
              <p className="opacity-90">Join our premium membership for exclusive benefits</p>
            </div>
            <button className="mt-6 lg:mt-0 px-8 py-3 bg-white text-red-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;