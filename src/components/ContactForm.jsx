// components/ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    orderType: 'delivery'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your order has been submitted. We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '', orderType: 'delivery' });
  };

  const contactMethods = [
    {
      icon: '📞',
      title: 'Call Us',
      details: '+1 (555) 123-FOOD',
      time: '24/7 Available'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      details: '+1 (555) 987-6543',
      time: 'Quick Replies'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: '123 Food Street',
      time: '11AM-11PM Daily'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Food Images & Contact Info */}
        <div className="space-y-8">
          {/* Food Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 flex flex-col items-center justify-center min-h-[200px]">
              <div className="text-5xl mb-4">🍕</div>
              <h4 className="font-bold text-gray-900">Hot & Spicy</h4>
              <p className="text-gray-600 text-sm text-center">Our bestselling pizza</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 flex flex-col items-center justify-center min-h-[200px]">
              <div className="text-5xl mb-4">🍗</div>
              <h4 className="font-bold text-gray-900">Crispy Chicken</h4>
              <p className="text-gray-600 text-sm text-center">Freshly fried daily</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 flex flex-col items-center justify-center min-h-[200px]">
              <div className="text-5xl mb-4">🥗</div>
              <h4 className="font-bold text-gray-900">Healthy Options</h4>
              <p className="text-gray-600 text-sm text-center">Fresh salads & sides</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 flex flex-col items-center justify-center min-h-[200px]">
              <div className="text-5xl mb-4">🥤</div>
              <h4 className="font-bold text-gray-900">Drinks & Desserts</h4>
              <p className="text-gray-600 text-sm text-center">Complete your meal</p>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Contact Options</h4>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-xl mr-4">
                    {method.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">{method.title}</h5>
                    <p className="text-gray-700">{method.details}</p>
                    <p className="text-gray-500 text-sm">{method.time}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Delivery Info */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-gray-900">Delivery Time</h5>
                  <p className="text-gray-600">30-minute guarantee</p>
                </div>
                <div className="text-2xl">⏰</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Order Form */}
        <div className="bg-white rounded-xl p-8">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Place Your Order</h3>
            <p className="text-gray-600">
              Fill out this form and we'll prepare your food fresh. Delivery within 30 minutes or your money back.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Details */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Order Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                How would you like to receive your order?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { 
                    value: 'delivery', 
                    label: 'Home Delivery',
                    icon: '🚚',
                    desc: 'Delivered to your door'
                  },
                  { 
                    value: 'pickup', 
                    label: 'Store Pickup',
                    icon: '🏪',
                    desc: 'Ready in 20 minutes'
                  },
                  { 
                    value: 'catering', 
                    label: 'Catering',
                    icon: '🎉',
                    desc: 'For events & parties'
                  }
                ].map((option) => (
                  <label 
                    key={option.value}
                    className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer transition-all ${
                      formData.orderType === option.value 
                        ? 'border-red-500 bg-red-50' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <input
                      type="radio"
                      name="orderType"
                      value={option.value}
                      checked={formData.orderType === option.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className="text-2xl mb-3">{option.icon}</div>
                    <span className="font-medium text-gray-900 mb-1">{option.label}</span>
                    <span className="text-sm text-gray-600 text-center">{option.desc}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Order Details */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Order Details *
              </label>
              <div className="mb-3">
                <p className="text-sm text-gray-500 mb-2">
                  What would you like to order?
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {['Hot & Spicy Pizza', 'Roaring Roast', 'Fried Chicken', 'Garlic Bread', 'Salad', 'Soft Drinks'].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setFormData({
                        ...formData,
                        message: formData.message ? `${formData.message}, ${item}` : item
                      })}
                      className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                    >
                      + {item}
                    </button>
                  ))}
                </div>
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors"
                placeholder="Example: 2 Hot & Spicy Pizzas (one with extra cheese), 1 Fried Chicken Combo, and 4 Garlic Bread pieces. Delivery to 123 Main St."
              />
            </div>

            {/* Special Instructions */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Instructions (Optional)
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors"
                placeholder="Allergies, dietary restrictions, or delivery notes"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <span className="mr-2">📋</span>
                Submit Order Request
                <span className="ml-2">→</span>
              </button>
              <p className="text-center text-gray-500 text-sm mt-4">
                We'll call you to confirm your order within 10 minutes.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;