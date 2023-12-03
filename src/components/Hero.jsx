import { FaCirclePlay } from "react-icons/fa6";
import { HiArrowCircleRight } from "react-icons/hi";
import SmallHeading from "./SmallHeading";

const Hero = () => {
    return (
        <div className='py-24 flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center flex items-center flex-col'>
                <SmallHeading emoji={"👋"} text={"WELCOME TO MANAGE WISE!"} />
                <h1 data-aos="fade-up" data-aos-duration="600" className='lg:text-[5rem] md:text-6xl text-4xl lg:leading-[5rem] md:leading-[4rem] leading-[3rem] font-[600] text-gray-800 py-1 lg:max-w-7xl md:max-w-2xl px-6'>
                    Empower your business with <span className='text-[rgb(254,129,98)]'>Strategic</span> insights
                </h1>
                <h4 data-aos="fade-up" data-aos-duration="650" className='text-gray-500 lg:text-xl md:text-xl text-lg max-w-xl lg:py-6 md:py-6 py-3 px-8'>
                    Powerful management platform designed to streamline your business operations, boost productivity, and drive success
                </h4>
                <div data-aos="fade-up" data-aos-duration="700" className='flex lg:flex-row md:flex-row flex-col lg:gap-5 md:gap-5 gap-1 mt-5 items-center'>
                    <button className='bg-[rgb(130,71,255)] group border-[5px] border-[#fff3f3] hover:border-[rgb(202,178,255)] text-white lg:text-xl md:text-xl text-lg font-semibold w-[17rem] py-3 rounded-2xl text-center flex items-center gap-3 justify-center'>
                        <span>Get Started</span>
                        <HiArrowCircleRight className="text-[0px] transition-all ease-in-out group-hover:text-xl" />
                    </button>
                    <button className='bg-white lg:text-xl md:text-xl text-lg font-semibold px-8 py-3 rounded-2xl border w-[16.5rem] border-gray-100 hover:border-gray-500 text-center flex items-center justify-center lg:gap-3 md:gap-3 gap-2'>
                        <span>Watch Demo</span>
                        <FaCirclePlay />
                    </button>
                </div>
            </div>

            <div data-aos="zoom-in" className="pt-16">
                <img className='w-full h-auto rounded-[1.6rem] shadow-2xl' src='https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=2048' alt='hero' />
            </div>
        </div>
    )
}

export default Hero