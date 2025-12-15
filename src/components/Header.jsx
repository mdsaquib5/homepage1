import { useState, useEffect } from 'react';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [cartCount] = useState(3);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`
            fixed top-0 z-50 left-0 right-0 transition-all duration-300
            ${isScrolled
                ? 'bg-white shadow-lg py-2 sm:py-3 md:py-2'
                : 'bg-transparent py-3 sm:py-4 md:py-4'
            }
        `}>
            <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between gap-2 sm:gap-4">
                    {/* Logo */}
                    <div className="flex items-center flex-shrink-0">
                        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                            Logo
                        </div>
                    </div>

                    {/* Right side icons and button */}
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                        {/* Cart Icon with Count */}
                        <div className="relative group cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <FiShoppingCart className={`
                                w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-colors
                                ${isScrolled ? 'text-gray-700' : 'text-gray-700'}
                                group-hover:text-blue-600
                            `} />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 sm:top-0 sm:right-0 bg-red-500 text-white text-xs 
                                    font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center
                                    transform group-hover:scale-110 transition-transform">
                                    {cartCount}
                                </span>
                            )}
                        </div>

                        {/* Login Icon */}
                        <div className="cursor-pointer group p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <FiUser className={`
                                w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-colors
                                ${isScrolled ? 'text-gray-700' : 'text-gray-700'}
                                group-hover:text-blue-600
                            `} />
                        </div>

                        {/* Book Now Button */}
                        <Link 
                            to={'/'} 
                            className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5 lg:px-7 lg:py-3 
                                font-semibold text-xs sm:text-sm md:text-base bg-white text-gray-800 border-2 border-gray-300
                                transition-all duration-300 shadow-md rounded-full 
                                hover:bg-gray-50 hover:border-gray-400 hover:shadow-lg hover:scale-105 active:scale-95
                                whitespace-nowrap"
                        >
                            <span>Book Now</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;