import { useState, useEffect } from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import SmallHeading from "./SmallHeading";
import { HiArrowCircleRight } from "react-icons/hi";


const Footer = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="pt-24 bg-gradient-to-b from-transparent to-[#ffefe7]">
            <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="bg-white lg:px-24 md:px-20 px-10 lg:py-16 md:py-14 py-10 rounded-[2rem] border border-gray-200 flex lg:flex-row md:flex-row flex-col gap-y-12 justify-between items-center">
                    <div className='flex flex-col lg:py-12 md:py-10 py-6 max-w-sm'>
                        <SmallHeading emoji={"👋"} text={"DON'T MISS OUT"} />
                        <h1 className='lg:text-5xl md:text-4xl text-3xl font-medium py-4'>
                            Unleash your <span className='text-[rgb(254,129,98)]'>Potential</span> with us
                        </h1>
                        <h4 className='text-gray-500 font-medium lg:text-xl md:text-lg'>
                            Join our community of ambitious individuals and organizations eager to make a difference.
                        </h4>
                        <button className='bg-[rgb(130,71,255)] group border-[6px] border-[#fff] hover:border-[rgb(202,178,255)] text-white text-lg w-[14rem] font-semibold px-8 py-3 rounded-3xl text-center flex items-center gap-3 justify-center mt-5'>
                            <span>Try out now</span>
                            <HiArrowCircleRight className="text-[0px] transition-all ease-in-out group-hover:text-xl" />
                        </button>
                    </div>
                    <div className="lg:w-[26rem] md:w-[22rem] w-full community-img">
                        <div className="pb-5">
                            <div className="border shadow-lg border-gray-200 px-6 py-2.5 w-fit rounded-xl font-semibold text-xl m-auto">
                                <span className="text-[rgb(130,71,255)]">200+</span> Happy users
                            </div>
                            <div class="w-0 h-0 -mt-1 m-auto
                                    border-l-[10px] border-l-transparent
                                    border-t-[12px] border-white
                                    border-r-[10px] border-r-transparent">
                            </div>
                        </div>
                        <img height={21} className="w-full" src="https://framerusercontent.com/images/S4kVG1FFzSqxr8zOqpvJRfsBad0.png?scale-down-to=512" alt="community" />
                    </div>
                </div>
            </div>
            <footer className="flex items-center justify-center">
                <div className="flex flex-col lg:w-[80%] md:w-[90%] w-full lg:px-0 md:px-0 sm:px-5 px-8">
                    <div className='flex justify-between my-24'>
                        <div>
                            <img className='h-11' src={screenWidth > 768 ? `https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png` : "https://framerusercontent.com/images/MwRbsJrk7ItYxeL7mKvPzrq3g.png"} alt="logo" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <a href="/#features" className="hover:text-gray-600">Features</a>
                            <a href="/#faq" className="hover:text-gray-600">FAQ</a>
                            <a href="/#pricing" className="hover:text-gray-600">Pricing</a>
                            <a href="/#testimonials" className="hover:text-gray-600">Testimonials</a>
                        </div>
                    </div>

                    <span className="h-[1px] bg-gray-200 w-full"></span>

                    <div className="flex items-center justify-between py-10">
                        <p className="font-medium">
                            © 2022 ManageWise, Inc.
                        </p>

                        <div className="flex lg:gap-5 md:gap-4 gap-3 text-xl">
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-black hover:text-gray-950" />
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-black hover:text-gray-950" />
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-black hover:text-gray-950" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer