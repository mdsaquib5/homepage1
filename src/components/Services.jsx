import { FaTruck, FaLeaf, FaClock, FaShieldAlt, FaFire, FaStar } from 'react-icons/fa';
import ServiceCard from './ServiceCard';

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
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <span className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full font-semibold mb-4 text-sm sm:text-base">
                        Our Services
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-4">
                        More Than Just <span className="text-red-600">Fast Food</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                        We're committed to delivering the best food experience with services that go beyond your expectations
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
                    {services.map((item, index) => (
                        <ServiceCard
                            key={index}
                            item={item}
                        />
                    ))}
                </div>

                <div className="mt-12 sm:mt-16 md:mt-20 bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-white">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div className="text-center lg:text-left">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Try Our Premium Service</h3>
                            <p className="opacity-90 text-sm sm:text-base">Join our premium membership for exclusive benefits</p>
                        </div>
                        <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-red-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap">
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;