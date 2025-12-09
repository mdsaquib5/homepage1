import { Link } from 'react-router-dom';
import cardiology from '../assets/images/cardiology.png';
import cardiology2 from '../assets/images/cardiology2.png';

const Hero = () => {
    return (
        <>
            <div className='relative'>
                <div>
                    <div className="corpContainer mx-auto px-4 lg:px-6 py-2 lg:py-0">
                        <div className='pt-15 md:pt-30 lg:pt-40 xl:pt-50'>
                            <div className="flex justify-center items-center text-center">
                                <div className="text-xl md:text-5xl xl:text-6xl font-semibold flex flex-col justify-center gap-2 items-center capitalize">
                                    <div>Simplify your medical billing.</div>
                                    <div>Accelerate your payments.</div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center gap-6 items-center mt-8 w-full md:w-4/5 xl:w-3/7 text-center mx-auto px-8'>
                                <p>At BiliMD.com, we transform the complex world of medical biling into a streamlined, stree-free process, ensuring you get paid faster and with minimal hassle.</p>
                                <Link to={'/'} className="rounded-xl bg-[#17c57a] text-white py-3.5 px-6 capitalize">Let's Connect</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#17c57a] p-20 lg:p-30 mt-10 md:mt-20 xl:mt-30 relative overflow-hidden'>
                    <svg className="absolute top-0 w-full left-0 h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" class="text-white"></path>
                        </svg>
                    <div className='grid grid-cols-auto md:grid-cols-2 items-center'>
                        <div className='xl:block hidden'></div>
                        <div>
                            <p className='text-white font-light'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#eff2fc] h-fit px-4 py-10 rounded-2xl flex flex-col justify-center items-center gap-4 max-w-80 w-full md:absolute md:-bottom-80 xl:left-130 xl:top-110 rotate-4'>
                    <img src={cardiology} alt="" width={300} height={300} />
                    <div className='flex flex-col gap-3 justify-center items-center mt-5'>
                        <div className='font-semibold text-xl'>Cardiology</div>
                        <Link to={'/'} className="px-6 py-2 capitalize group items-center flex justify-center gap-3 bg-green-300/50 text-green-800 rounded-lg transition-all duration-300">
                            more details
                        </Link>
                    </div>
                </div>
                <div className='bg-[#fffbf3] h-fit p-10 rounded-2xl flex flex-col justify-center items-center gap-4 max-w-80 w-full md:absolute xl:left-0 md:right-5 md:top-100 xl:top-60 -rotate-8'>
                    <img src={cardiology2} alt="" width={250} height={250} />
                    <div className='flex flex-col gap-3 justify-center items-center mt-5'>
                        <div className='font-semibold text-xl'>Gastroenterology</div>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi earum voluptatum, molestiae delectus libero doloremque qui provident maxime atque sit, magni beatae soluta.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;