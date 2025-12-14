import React from 'react';
import { FaStar, FaStarHalfAlt, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Regular Customer",
      rating: 5,
      comment: "The Hot & Spicy Pizza is absolutely addictive! Ordered 3 times this week already.",
      order: "Hot & Spicy Pizza",
      avatar: "A",
      date: "2 days ago"
    },
    {
      name: "Priya Sharma",
      role: "Food Blogger",
      rating: 5,
      comment: "As a food blogger, I've tried countless pizzas. Their Roaring Roast has the perfect crust!",
      order: "Roaring Roast",
      avatar: "P",
      date: "1 week ago"
    },
    {
      name: "Mike Chen",
      role: "Office Manager",
      rating: 4.5,
      comment: "We order lunch for our team every Friday. The Fried Chicken combo is everyone's favorite!",
      order: "Fried Chicken Combo",
      avatar: "M",
      date: "3 days ago"
    },
    {
      name: "Sarah Wilson",
      role: "Health Enthusiast",
      rating: 5,
      comment: "Finally, healthy options that actually taste amazing! The Veggie Supreme is my go-to.",
      order: "Veggie Supreme",
      avatar: "S",
      date: "1 month ago"
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-red-600">Customers Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  {renderStars(testimonial.rating)}
                  <span className="ml-2 text-gray-700 font-bold">{testimonial.rating.toFixed(1)}</span>
                </div>
                <FaQuoteLeft className="text-red-200 text-xl" />
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-2 py-1 bg-gray-100 rounded">Ordered: {testimonial.order}</span>
                    <span className="text-xs text-gray-500">{testimonial.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;