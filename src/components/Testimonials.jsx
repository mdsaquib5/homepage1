import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Alex Johnson",
            role: "Regular Customer",
            rating: 5,
            comment: "The Hot & Spicy Pizza is absolutely addictive! Ordered 3 times this week already.",
            order: "Hot & Spicy Pizza",
            avatar: "A",
            date: "2 days ago"
        },
        {
            name: "Priya Sharma",
            role: "Food Blogger",
            rating: 5,
            comment: "As a food blogger, I've tried countless pizzas. Their Roaring Roast has the perfect crust!",
            order: "Roaring Roast",
            avatar: "P",
            date: "1 week ago"
        },
        {
            name: "Mike Chen",
            role: "Office Manager",
            rating: 4.5,
            comment: "We order lunch for our team every Friday. The Fried Chicken combo is everyone's favorite!",
            order: "Fried Chicken Combo",
            avatar: "M",
            date: "3 days ago"
        },
        {
            name: "Sarah Wilson",
            role: "Health Enthusiast",
            rating: 5,
            comment: "Finally, healthy options that actually taste amazing! The Veggie Supreme is my go-to.",
            order: "Veggie Supreme",
            avatar: "S",
            date: "1 month ago"
        },
        {
            name: "David Martinez",
            role: "Family Man",
            rating: 5,
            comment: "Perfect for family dinners! Kids love the cheese pizza and we love the variety.",
            order: "Family Combo",
            avatar: "D",
            date: "5 days ago"
        },
        {
            name: "Emma Thompson",
            role: "Student",
            rating: 4.5,
            comment: "Great late-night delivery service! Always hot and fresh when it arrives.",
            order: "Pepperoni Classic",
            avatar: "E",
            date: "1 week ago"
        }
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <span className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full font-semibold mb-4 text-sm sm:text-base">
                        Testimonials
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-4">
                        What Our <span className="text-red-600">Customers Say</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                        Don't just take our word for it - hear from our satisfied customers
                    </p>
                </div>

                <div className="mb-8 sm:mb-12">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={16}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 16,
                            },
                            640: {
                                slidesPerView: 1.5,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 2.5,
                                spaceBetween: 24,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                        }}
                        className="testimonials-swiper"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <TestimonialCard item={item} index={index} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
