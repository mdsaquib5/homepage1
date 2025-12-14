// components/MenuHighlights.js
import React from 'react';

const MenuHighlights = () => {
  const menuItems = [
    {
      name: "Hot & Spicy Pizza",
      description: "Fiery jalapeños, spicy sausage, signature hot sauce",
      price: "$12.99",
      category: "Pizza",
      tag: "Most Popular"
    },
    {
      name: "Roaring Roast",
      description: "Slow-roasted chicken with herbs, garlic butter",
      price: "$14.99",
      category: "Main Course",
      tag: "Chef's Special"
    },
    {
      name: "Fried Chicken Combo",
      description: "Crispy fried chicken with fries, coleslaw",
      price: "$15.99",
      category: "Combo",
      tag: "Best Value"
    },
    {
      name: "Veggie Supreme",
      description: "Bell peppers, mushrooms, olives, onions, tomatoes",
      price: "$11.99",
      category: "Vegetarian",
      tag: "Healthy Choice"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Menu Highlights</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our most loved dishes that customers keep coming back for
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-red-600">{item.category}</span>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  </div>
                  <span className="text-2xl font-bold text-gray-900">{item.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <button className="text-red-600 font-medium hover:text-red-700 text-sm">
                    View Details
                  </button>
                  <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              View Full Menu →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;