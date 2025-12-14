import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import heroImg from '../assets/images/hero.jpg';

const Hero = () => {
    return (
        <>
            <div className='relative overflow-hidden min-h-screen bg-cover bg-center mt-4 md:mt-14 xl:mt-0' style={{ backgroundImage: `url(${heroImg})` }}>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen'>
                    {/* Left Content Section */}
                    <div className='px-4 sm:px-6 lg:px-0 py-20 lg:py-10'>
                        <div className="flex flex-col gap-4 sm:gap-6 max-w-3xl lg:ml-auto lg:pl-7">
                            {/* Discount Badge */}
                            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 w-fit">
                                <span className="text-xl sm:text-2xl font-bold">33%</span>
                                <span className="text-xs sm:text-sm text-gray-600">On product packages</span>
                            </div>

                            {/* Heading */}
                            <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
                                Embark on a <span className='text-red-600'>tasty adventure</span> with a wholesome diet!
                            </div>

                            {/* Description */}
                            <p className='text-gray-600 text-sm sm:text-base leading-relaxed'>
                                Embrace a healthy adventure with a wholesome diet! Invite your friends and family to savor the finest healthier diet in the area, crafted fresh and delivered to your doorstep every day
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-2 sm:mt-4">
                                <Link
                                    to={'/'}
                                    className='bg-red-600 hover:bg-red-700 transition-all rounded-full py-2.5 sm:py-3 px-6 sm:px-8 shadow-lg font-medium text-white text-center text-sm sm:text-base'
                                >
                                    Order Now
                                </Link>
                                <Link
                                    to={'/'}
                                    className='bg-white hover:bg-gray-50 transition-all rounded-full py-2.5 sm:py-3 px-6 sm:px-8 border-2 border-gray-300 font-medium text-center text-sm sm:text-base'
                                >
                                    View Our Menu
                                </Link>
                            </div>

                            {/* Food Category Cards */}
                            <div className='flex items-center gap-3 sm:gap-4 mt-4 sm:mt-8 flex-wrap justify-center sm:justify-start'>
                                {[
                                    {
                                        name: "Hot & Spicy Pizza",
                                        image: "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-6.png"
                                    },
                                    {
                                        name: "Roaring Roast",
                                        image: "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-6.png"
                                    },
                                    {
                                        name: "Fried Chicken",
                                        image: "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-6.png"
                                    }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className='flex flex-col gap-1.5 sm:gap-2 justify-center items-center w-24 sm:w-28 text-center hover:transform hover:scale-105 transition-transform'
                                    >
                                        <div className='rounded-xl sm:rounded-2xl bg-gray-100/80 p-2 sm:p-3 shadow-sm'>
                                            <img
                                                src={item.image}
                                                className='rounded-lg sm:rounded-xl w-16 h-16 sm:w-20 sm:h-20 object-cover'
                                                alt={item.name}
                                            />
                                        </div>
                                        <div className='font-semibold text-xs leading-tight'>{item.name}</div>
                                        <Link
                                            to={'/'}
                                            className='bg-black hover:bg-gray-800 transition-all text-white py-1 sm:py-1.5 px-3 sm:px-4 rounded-lg text-xs'
                                        >
                                            Order
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Swiper Section */}
                    <div className='h-96 sm:h-[500px] md:h-[600px] lg:h-screen'>
                        <div className="swiper-container-wrapper h-full">
                            <Swiper
                                effect={'coverflow'}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={2}
                                spaceBetween={100}
                                direction={'vertical'}
                                loop={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 200,
                                    modifier: 2,
                                    slideShadows: false,
                                }}
                                navigation={true}
                                modules={[EffectCoverflow, Autoplay, Navigation]}
                                className="food-swiper w-full h-full"
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1.5,
                                        spaceBetween: 30,
                                    },
                                    640: {
                                        slidesPerView: 1.8,
                                        spaceBetween: 50,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 60,
                                    },
                                    1024: {
                                        slidesPerView: 2,
                                        spaceBetween: 100,
                                    },
                                }}
                            >
                                <SwiperSlide>
                                    <div className="food-plate-container">
                                        <img
                                            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop"
                                            alt="Healthy Bowl"
                                            className='food-plate-img'
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="food-plate-container">
                                        <img
                                            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=600&fit=crop"
                                            alt="Fresh Salad"
                                            className='food-plate-img'
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="food-plate-container">
                                        <img
                                            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop"
                                            alt="Pizza"
                                            className='food-plate-img'
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="food-plate-container">
                                        <img
                                            src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=600&fit=crop"
                                            alt="Pancakes"
                                            className='food-plate-img'
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="food-plate-container">
                                        <img
                                            src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=600&fit=crop"
                                            alt="Soup"
                                            className='food-plate-img'
                                        />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;