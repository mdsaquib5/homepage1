import React, { useState, useEffect } from 'react';
import { FiShoppingCart, FiUser, FiBookOpen } from 'react-icons/fi';
import {Link} from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [cartCount, setCartCount] = useState(3); // Example cart count

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`
            fixed top-0 z-10 left-0 right-0 transition-all duration-300
            ${isScrolled
                ? 'bg-white shadow-lg py-2'
                : 'bg-transparent py-4'
            }
        `}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="text-2xl font-bold text-gray-800">
                            Logo
                        </div>
                    </div>

                    {/* Right side icons and button */}
                    <div className="flex items-center space-x-4 sm:space-x-6">
                        {/* Cart Icon with Count */}
                        <div className="relative group cursor-pointer">
                            <FiShoppingCart className={`
                                w-6 h-6 transition-colors
                                ${isScrolled ? 'text-red-700' : 'text-gray-700'}
                                group-hover:text-blue-600
                            `} />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs 
                                    font-bold rounded-full w-5 h-5 flex items-center justify-center
                                    transform group-hover:scale-110 transition-transform">
                                    {cartCount}
                                </span>
                            )}
                        </div>

                        {/* Login Icon */}
                        <div className="cursor-pointer group">
                            <FiUser className={`
                                w-6 h-6 transition-colors
                                ${isScrolled ? 'text-red-700' : 'text-gray-700'}
                                group-hover:text-blue-600
                            `} />
                        </div>

                        {/* Book Now Button */}
                        <Link to={'/'} className={`
                            hidden sm:flex items-center gap-2 px-6 py-3 font-semibold
                            transition-all duration-300 shadow-md rounded-full transform bg-white hover:scale-105 active:scale-95
                            ${isScrolled
                                ? ''
                                : 'text-gray-800'
                            }
                        `}>
                            <span>Book Now</span>
                        </Link>

                        {/* Mobile Book Now Button (Icon only) */}
                        <button className={`
                            sm:hidden flex items-center justify-center w-10 h-10 rounded-lg
                            transition-all duration-300
                            ${isScrolled
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                                : 'bg-white/90 backdrop-blur-sm text-gray-800'
                            }
                        `}>
                            <FiBookOpen className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;