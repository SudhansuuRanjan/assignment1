import React from 'react'
import Heading from './Heading'
import { FaCheck } from "react-icons/fa6";

const Pricing = () => {
    return (
        <div id='pricing' className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
            <Heading smallHeadingEmoji='💲' smallHeadingText='PRICING' bigHeadingText='Select your ideal Pricing plan' highLightedText='Pricing' bottomText='At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.' />

            <div className='flex items-center justify-center'>
                <div className='flex lg:flex-row flex-col gap-6 w-full lg:items-end md:items-center items-center'>
                    <div data-aos="fade-up" className='bg-[#EDEDFA] p-10 rounded-3xl h-[28rem] flex flex-col justify-between items-start lg:w-full md:w-[32rem] w-full'>
                        <div>
                            <div className='text-[rgb(254,129,98)] p-1 px-3 rounded-lg bg-white w-fit text-xs font-semibold'>FREE</div>
                            <h2 className='text-6xl font-semibold py-5'>$0<span className='text-base font-medium'>/month</span></h2>
                            <ul className='text-lg text-gray-500'>
                                <li><FaCheck className='inline-block text-green-400 text-lg mr-2' /> Access to all basic features</li>
                                <li><FaCheck className='inline-block text-green-400 text-lg mr-2' /> Reporting and analytics</li>
                                <li><FaCheck className='inline-block text-green-400 text-lg mr-2' /> Up to 5 individual users</li>
                                <li><FaCheck className='inline-block text-green-400 text-lg mr-2' /> Chat and email support</li>
                            </ul>
                        </div>
                        <button className='bg-white text-lg font-semibold px-6 py-2.5 rounded-2xl border border-gray-
                    100 hover:border-gray-500'>Get Started</button>
                    </div>

                    <div data-aos="fade-up" className='bg-[rgb(28,28,28)] p-10 rounded-3xl h-[30rem] flex flex-col justify-between items-start lg:w-full md:w-[32rem] w-full'>
                        <div>
                            <div className='text-[rgb(254,129,98)] p-1 px-3 rounded-lg bg-white w-fit text-xs font-semibold'>STANDARD</div>
                            <h2 className='text-6xl text-white font-semibold py-5'>$25<span className='text-base font-medium'>/month</span></h2>
                            <ul className='text-lg text-gray-400'>
                                <li><FaCheck className='inline-block text-green-400 text-lg mr-2' /> Access to all basic features</li>
                                <li><FaCheck className='inline-block text-green-400 text-lg mr-2' /> Reporting and analytics</li>
                                <li><FaCheck className='inline-block text-green-400 text-lg mr-2' /> Up to 5 individual users</li>
                                <li><FaCheck className='inline-block text-green-400 text-lg mr-2' /> Chat and email support</li>
                                <li><FaCheck className='inline-block text-green-400 text-lg mr-2' /> 3+ integrations</li>
                                <li><FaCheck className='inline-block text-green-400 text-lg mr-2' /> Account performance reporting</li>
                            </ul>
                        </div>
                        <button className='bg-[rgb(130,71,255)] border-4 border-[rgb(28,28,28)] hover:border-[#44336b] text-white text-lg font-semibold px-8 py-2.5 rounded-2xl'>Get Started</button>
                    </div>

                    <div data-aos="fade-up" className='bg-[#EDEDFA] p-10  rounded-3xl h-[28rem] flex flex-col justify-between items-start lg:w-full md:w-[32rem] w-full'>
                        <div>
                            <div className='text-[rgb(254,129,98)] p-1 px-3 rounded-lg bg-white w-fit text-xs font-semibold'>BUSINESS</div>
                            <h2 className='text-6xl font-semibold py-5'>$42<span className='text-base font-medium'>/month</span></h2>
                            <ul className='text-lg text-gray-500'>
                                <li><FaCheck className='inline-block text-green-400 text-lg mr-2' /> Access to all basic features</li>
                                <li><FaCheck className='inline-block text-green-400 text-lg mr-2' /> Reporting and analytics</li>
                                <li><FaCheck className='inline-block text-green-400 text-lg mr-2' /> Up to 5 individual users</li>
                                <li><FaCheck className='inline-block text-green-400 text-lg mr-2' /> Chat and email support</li>
                                <li><FaCheck className='inline-block text-green-400 text-lg mr-2' /> 3+ integrations</li>
                            </ul>
                        </div>
                        <button className='bg-white text-lg font-semibold px-6 py-2.5 rounded-2xl border border-gray-
                    100 hover:border-gray-500'>Get Started</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Pricing