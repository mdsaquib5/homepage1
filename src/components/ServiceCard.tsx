import React from 'react';

interface ServiceItem {
    icon: React.ReactNode;
    title: string;
    description: string;
    highlight: string;
}

interface ServiceCardProps {
    item: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
    return (
        <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 bg-red-50 rounded-lg sm:rounded-xl text-red-600">
                    {item.icon}
                </div>
                <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-800 text-xs sm:text-sm font-medium rounded-full">
                    {item.highlight}
                </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{item.title}</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 flex-grow">{item.description}</p>
            <button className="text-red-600 font-semibold flex items-center gap-2 hover:text-red-700 transition-colors text-sm sm:text-base">
                Learn more
                <span className="text-lg">→</span>
            </button>
        </div>
    );
};

export default ServiceCard;
