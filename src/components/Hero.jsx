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
            <div className='relative overflow-hidden h-screen' style={{ backgroundImage: `url(${heroImg})` }}>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                    <div>
                        <div className="flex flex-col gap-6 max-w-3xl ml-auto pl-7">
                            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 w-fit">
                                <span className="text-2xl font-bold">33%</span>
                                <span className="text-sm text-gray-600">On product packages</span>
                            </div>
                            <div className='text-4xl lg:text-5xl font-bold leading-tight'>
                                Embark on a <span className='text-red-600'>tasty adventure</span> with a wholesome diet!
                            </div>

                            {/* Description */}
                            <p className='text-gray-600 text-base leading-relaxed'>
                                Embrace a healthy adventure with a wholesome diet! Invite your friends and family to savor the finest healthier diet in the area, crafted fresh and delivered to your doorstep every day
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex items-center gap-4 mt-4">
                                <Link
                                    to={'/'}
                                    className='bg-red-600 hover:bg-red-700 transition-all rounded-full py-3 px-8 shadow-lg font-medium text-white'
                                >
                                    Order Now
                                </Link>
                                <Link
                                    to={'/'}
                                    className='bg-white hover:bg-gray-50 transition-all rounded-full py-3 px-8 border-2 border-gray-300 font-medium'
                                >
                                    View Our Menu
                                </Link>
                            </div>

                            <div className='flex items-center gap-4 mt-8 flex-wrap'>
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
                                        className='flex flex-col gap-2 justify-center items-center w-28 text-center hover:transform hover:scale-105 transition-transform'
                                    >
                                        <div className='rounded-2xl bg-gray-100/80 p-3 shadow-sm'>
                                            <img
                                                src={item.image}
                                                className='rounded-xl w-20 h-20 object-cover'
                                                alt={item.name}
                                            />
                                        </div>
                                        <div className='font-semibold text-xs leading-tight'>{item.name}</div>
                                        <Link
                                            to={'/'}
                                            className='bg-black hover:bg-gray-800 transition-all text-white py-1.5 px-4 rounded-lg text-xs'
                                        >
                                            Order
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="swiper-container-wrapper">
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

                            <div className="custom-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;