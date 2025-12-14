// components/Testimonials.js
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Regular Customer",
      review: "The Hot & Spicy Pizza is absolutely addictive! Ordered 3 times this week already.",
      rating: 5,
      order: "Hot & Spicy Pizza"
    },
    {
      name: "Priya Sharma",
      role: "Food Blogger",
      review: "As a food blogger, I've tried countless pizzas. Their Roaring Roast has the perfect crust!",
      rating: 5,
      order: "Roaring Roast"
    },
    {
      name: "Mike Chen",
      role: "Office Manager",
      review: "We order lunch for our team every Friday. The Fried Chicken combo is everyone's favorite!",
      rating: 4,
      order: "Fried Chicken Combo"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              What our customers say about our food and service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      {i < testimonial.rating ? '★' : '☆'}
                    </span>
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="text-gray-700 mb-6 italic">"{testimonial.review}"</p>
                
                {/* Customer Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-600 text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs mt-1">Ordered: {testimonial.order}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;