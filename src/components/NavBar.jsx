import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollToTop = () => {
        setShowMobileMenu(false);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <nav className='flex justify-between z-10 items-center py-3.5 px-6 border-b-2 border-[#efefef] relative'>
            <Link className='z-50' onClickCapture={scrollToTop} to="/">
                <img className='h-11' src={screenWidth > 1000 || screenWidth < 768 ? `https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png` : "https://framerusercontent.com/images/MwRbsJrk7ItYxeL7mKvPzrq3g.png"} alt="logo" />
            </Link>

            <div className='lg:flex md:flex hidden items-center lg:gap-14 md:gap-10'>
                <div className='flex text-[1.1rem] items-center lg:gap-6 md:gap-5'>
                    <a href="/#features">Features</a>
                    <span className='h-1 w-1 bg-gray-300'></span>
                    <a href="/#faq">FAQ</a>
                    <span className='h-1 w-1 bg-gray-300'></span>
                    <a href="/#pricing">Pricing</a>
                    <span className='h-1 w-1 bg-gray-300'></span>
                    <a href="/#testimonials">Testimonials</a>
                </div>
                <button className='bg-white text-lg font-semibold px-5 py-2.5 rounded-2xl border border-gray-100'>
                    Buy Template
                </button>
            </div>

            <button onClick={() => setShowMobileMenu(!showMobileMenu)} className='lg:hidden md:hidden block z-50'>
                {showMobileMenu ? <RxCross2 className='text-3xl' /> : <RxHamburgerMenu className='text-3xl' />}
            </button>

            <div className={`top-0 left-0 w-full h-screen transition-all bg-white z-40 flex flex-col justify-start items-center gap-10 ${showMobileMenu ? 'lg:hidden md:hidden absolute' : 'lg:hidden md:hidden hidden'}`}>
                <div className='flex flex-col gap-10 items-center pt-28 w-full px-16'>
                    <div className='flex flex-col text-[1.1rem] items-center gap-8'>
                        <a onClick={() => setShowMobileMenu(false)} className='font-medium hover:text-[rgb(130,71,255)]' href="/#features">Features</a>
                        <a onClick={() => setShowMobileMenu(false)} className='font-medium hover:text-[rgb(130,71,255)]' href="/#faq">FAQ</a>
                        <a onClick={() => setShowMobileMenu(false)} className='font-medium hover:text-[rgb(130,71,255)]' href="/#pricing">Pricing</a>
                        <a onClick={() => setShowMobileMenu(false)} className='font-medium hover:text-[rgb(130,71,255)]' href="/#testimonials">Testimonials</a>
                    </div>
                    <button className='bg-[rgb(130,71,255)] transition-all ease-in-out border-[6px] border-[#ffffff] hover:border-[rgb(202,178,255)] text-white lg:text-xl md:text-xl text-lg font-semibold lg:w-[14rem] md:w-[13rem] w-full lg:py-3.5 md:py-3.5 py-3 rounded-3xl'>
                        Buy Template
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar