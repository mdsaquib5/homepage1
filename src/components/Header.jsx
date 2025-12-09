import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { LuSearch } from "react-icons/lu";
import { RxHamburgerMenu, RxCross2, RxExit } from "react-icons/rx";

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
    const [activeDesktopDropdown, setActiveDesktopDropdown] = useState(null);

    const toggleMobileDropdown = (id) => {
        setOpenMobileDropdown(openMobileDropdown === id ? null : id);
    };

    const handleDesktopDropdownEnter = (id) => {
        setActiveDesktopDropdown(id);
    };

    const handleDesktopDropdownLeave = () => {
        setActiveDesktopDropdown(null);
    };

    return (
        <>
            <div>
                <div className="corpContainer mx-auto px-4 lg:px-6 py-2 lg:py-0">
                    {/* Main Header */}
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center w-fit">
                            <span className="text-lg md:text-2xl font-bold text-dark">
                                Bilimd
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-10 justify-center w-fit">
                            <button className='cursor-pointer'>
                                <RxHamburgerMenu className="w-6 h-6 text-gray-700" />
                            </button>
                            
                            {/* Solutions Dropdown */}
                            <div
                                className="relative group"
                                onMouseEnter={() => handleDesktopDropdownEnter('solutions')}
                                onMouseLeave={handleDesktopDropdownLeave}
                            >
                                <Link
                                    to={'/'}
                                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-8"
                                >
                                    <span>Solutions</span>
                                    <FaChevronDown className={`w-3 h-3 mt-0.5 transition-transform duration-300 ${activeDesktopDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                                </Link>

                                {/* Desktop Dropdown */}
                                <div className={`hidden lg:block absolute origin-top scale-y-0 top-full left-0 w-48 bg-white rounded-lg shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-50 group-hover:scale-y-100`}>
                                    <a
                                        href="#"
                                        className="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 first:rounded-t-lg"
                                    >
                                        Solution 1
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                                    >
                                        Solution 2
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 last:rounded-b-lg"
                                    >
                                        Solution 3
                                    </a>
                                </div>
                            </div>

                            <Link
                                to={'/'}
                                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-8"
                            >
                                <span>Who we server</span>
                            </Link>
                            <Link
                                to={'/'}
                                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-8"
                            >
                                <span>Inside Look</span>
                            </Link>
                            <button className='cursor-pointer'><LuSearch className="w-5 h-5 text-gray-700" /></button>
                        </nav>

                        {/* Right Section */}
                        <div className="flex items-center justify-end gap-10 w-fit">

                            <div>
                                {/* Login Dropdown */}
                                <div
                                    className="relative group"
                                    onMouseEnter={() => handleDesktopDropdownEnter('login')}
                                    onMouseLeave={handleDesktopDropdownLeave}
                                >
                                    <Link
                                        to={'/'}
                                        className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-8"
                                    >
                                        <RxExit className='w-6 h-6 text-gray-500' />
                                        <span>Login</span>
                                        <FaChevronDown className={`w-3 h-3 mt-0.5 transition-transform duration-300 ${activeDesktopDropdown === 'login' ? 'rotate-180' : ''}`} />
                                    </Link>

                                    {/* Desktop Dropdown */}
                                    <div className={`hidden lg:block absolute origin-top scale-y-0 top-full left-0 w-48 bg-white rounded-lg shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-50 group-hover:scale-y-100`}>
                                        <a
                                            href="#"
                                            className="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 first:rounded-t-lg"
                                        >
                                            Login Option 1
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                                        >
                                            Login Option 2
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 last:rounded-b-lg"
                                        >
                                            Login Option 3
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button - Desktop */}
                            <div className="hidden lg:block m-0">
                                <Link to={'/'} className="px-6 py-2 capitalize group items-center flex justify-center gap-3 bg-green-300/50 text-green-800 rounded-lg transition-all duration-300">
                                    Let's Connect
                                </Link>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                                className="lg:hidden rounded-lg hover:bg-gray-100 transition-colors duration-200"
                            >
                                {isDrawerOpen ? (
                                    <RxCross2 className="w-6 h-6 text-gray-700" />
                                ) : (
                                    <RxHamburgerMenu className="w-6 h-6 text-gray-700" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Drawer */}
                    <div className={`lg:hidden ${isDrawerOpen ? 'block' : 'hidden'} border-t border-gray-100`}>
                        <div className="p-4 space-y-4">
                            {/* Mobile Search */}
                            <div className="flex items-center bg-gray-50 rounded-lg px-4 py-3">
                                <LuSearch className="w-5 h-5 text-gray-400 mr-3" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full bg-transparent outline-none text-gray-700"
                                />
                            </div>

                            {/* Mobile Navigation */}
                            <nav className="space-y-1">
                                {/* Solutions Mobile Dropdown */}
                                <div>
                                    <button
                                        onClick={() => toggleMobileDropdown('solutions')}
                                        className="w-full flex items-center justify-between p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                    >
                                        <span className="font-medium">Solutions</span>
                                        <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${openMobileDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${openMobileDropdown === 'solutions' ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                        <div className="ml-4 pl-4 border-l border-gray-200">
                                            <a
                                                href="#"
                                                className="block py-2.5 pl-3 text-gray-600 hover:text-blue-600 transition-all duration-200 hover:translate-x-1 rounded-lg hover:bg-blue-50/30"
                                                onClick={() => {
                                                    setOpenMobileDropdown(null);
                                                    setIsDrawerOpen(false);
                                                }}
                                            >
                                                Solution 1
                                            </a>
                                            <a
                                                href="#"
                                                className="block py-2.5 pl-3 text-gray-600 hover:text-blue-600 transition-all duration-200 hover:translate-x-1 rounded-lg hover:bg-blue-50/30"
                                                onClick={() => {
                                                    setOpenMobileDropdown(null);
                                                    setIsDrawerOpen(false);
                                                }}
                                            >
                                                Solution 2
                                            </a>
                                            <a
                                                href="#"
                                                className="block py-2.5 pl-3 text-gray-600 hover:text-blue-600 transition-all duration-200 hover:translate-x-1 rounded-lg hover:bg-blue-50/30"
                                                onClick={() => {
                                                    setOpenMobileDropdown(null);
                                                    setIsDrawerOpen(false);
                                                }}
                                            >
                                                Solution 3
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    to={'/'}
                                    className="block w-full text-left p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
                                    onClick={() => setIsDrawerOpen(false)}
                                >
                                    Who we serve
                                </Link>

                                {/* Inside Look Link */}
                                <Link
                                    to={'/'}
                                    className="block w-full text-left p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
                                    onClick={() => setIsDrawerOpen(false)}
                                >
                                    Inside Look
                                </Link>

                                {/* Login Mobile Dropdown */}
                                <div>
                                    <button
                                        onClick={() => toggleMobileDropdown('login')}
                                        className="w-full flex items-center justify-between p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                    >
                                        <span className="font-medium">Login</span>
                                        <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${openMobileDropdown === 'login' ? 'rotate-180' : ''}`} />
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${openMobileDropdown === 'login' ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                        <div className="ml-4 pl-4 border-l border-gray-200">
                                            <a
                                                href="#"
                                                className="block py-2.5 pl-3 text-gray-600 hover:text-blue-600 transition-all duration-200 hover:translate-x-1 rounded-lg hover:bg-blue-50/30"
                                                onClick={() => {
                                                    setOpenMobileDropdown(null);
                                                    setIsDrawerOpen(false);
                                                }}
                                            >
                                                Login Option 1
                                            </a>
                                            <a
                                                href="#"
                                                className="block py-2.5 pl-3 text-gray-600 hover:text-blue-600 transition-all duration-200 hover:translate-x-1 rounded-lg hover:bg-blue-50/30"
                                                onClick={() => {
                                                    setOpenMobileDropdown(null);
                                                    setIsDrawerOpen(false);
                                                }}
                                            >
                                                Login Option 2
                                            </a>
                                            <a
                                                href="#"
                                                className="block py-2.5 pl-3 text-gray-600 hover:text-blue-600 transition-all duration-200 hover:translate-x-1 rounded-lg hover:bg-blue-50/30"
                                                onClick={() => {
                                                    setOpenMobileDropdown(null);
                                                    setIsDrawerOpen(false);
                                                }}
                                            >
                                                Login Option 3
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </nav>

                            {/* Mobile CTA - Updated to match desktop design */}
                            <div className="pt-4 border-t border-gray-100">
                                <Link 
                                    to={'/'} 
                                    className="px-6 py-2 capitalize bg-green-300/50 text-green-800 rounded-lg transition-all duration-300 font-medium hover:bg-green-300/70 w-full text-center block"
                                >
                                    Let's Connect
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;