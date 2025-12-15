import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ item }) => {
  return (
    <div 
      className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full flex flex-col"
    >
      <div className="flex items-center justify-end mb-3 sm:mb-4">
        <FaQuoteLeft className="text-red-200 text-lg sm:text-xl" />
      </div>
      
      <p className="text-sm sm:text-base text-gray-700 mb-5 sm:mb-6 italic flex-grow leading-relaxed">"{item.comment}"</p>
      
      <div className="flex items-start sm:items-center gap-3 sm:gap-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-base sm:text-lg flex-shrink-0">
          {item.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-gray-900 text-sm sm:text-base truncate">{item.name}</h4>
          <p className="text-gray-600 text-xs sm:text-sm truncate">{item.role}</p>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <span className="text-xs px-2 py-1 bg-gray-100 rounded truncate max-w-[150px]">Ordered: {item.order}</span>
            <span className="text-xs text-gray-500">{item.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
