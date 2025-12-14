// components/Services.js
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Fast Delivery",
      description: "30-minute delivery guarantee to your doorstep",
      icon: "🚚"
    },
    {
      title: "Fresh Ingredients",
      description: "Daily fresh ingredients, never frozen",
      icon: "🥬"
    },
    {
      title: "24/7 Service",
      description: "Open round the clock for your cravings",
      icon: "⏰"
    },
    {
      title: "Contactless Delivery",
      description: "Safe and hygienic delivery options",
      icon: "🛡️"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're committed to delivering the best food experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-2xl mb-6 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;