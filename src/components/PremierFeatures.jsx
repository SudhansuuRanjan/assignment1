import React from 'react'
import Heading from './Heading'

const PremierFeatures = () => {
    return (
        <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-8 md:pt-8 pt-0">
            <Heading
                smallHeadingEmoji="🔥"
                smallHeadingText="PREMIER FEATURES"
                bigHeadingText="Discover our product's Capabilities"
                highLightedText="Capabilities"
                bottomText="Don't settle for mediocrity - embrace the future of management with Manage Wise." />

            <div className='flex flex-col gap-10 justify-center items-center'>
                <div className='flex lg:w-full md:w-[32rem] w-[100%] lg:flex-row flex-col gap-10'>
                    <div data-aos="fade-up" className='bg-[#ededfa] rounded-3xl flex justify-end flex-col p-10 lg:max-w-xl max-w-lg'>
                        <div className='bg-white p-2 rounded-[1.3rem] text-3xl w-fit mt-2'>⭐️</div>
                        <p className='font-medium lg:text-[2.6rem] lg:leading-[3.3rem] text-3xl leading-[2.6rem] pt-5'>Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features.</p>
                    </div>
                    <div data-aos="fade-up" className='border-gray-200 border rounded-3xl'>
                        <img src="https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png?scale-down-to=1024" alt="card-img" />
                        <div className='p-8'>
                            <h4 className='text-2xl font-semibold pb-1'>
                                Smart Task Management
                            </h4>
                            <p className='text-gray-500 font-medium'>Say goodbye to chaos with our smart task management system</p>
                        </div>
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col lg:w-full md:w-[32rem] w-[100%] gap-10 mb-16'>
                    <div data-aos="fade-up" className='border-gray-200 border rounded-3xl'>
                        <img src="https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=512" alt="card-img" />
                        <div className='p-8'>
                            <h4 className='text-2xl font-semibold pb-1'>
                                Flexible Scheduling
                            </h4>
                            <p className='text-gray-500 font-medium'>Stay productive with our flexible scheduling system</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='border-gray-200 border rounded-3xl'>
                        <img src="https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png?scale-down-to=512" alt="card-img" />
                        <div className='p-8'>
                            <h4 className='text-2xl font-semibold pb-1'>
                                Easy Communication
                            </h4>
                            <p className='text-gray-500 font-medium'>Collaborate seamlessly with your team in real-time</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='border-gray-200 border rounded-3xl'>
                        <img src="https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png?scale-down-to=512" alt="card-img" />
                        <div className='p-8'>
                            <h4 className='text-2xl font-semibold pb-1'>
                                Analytics
                            </h4>
                            <p className='text-gray-500 font-medium'>Gain valuable insights with our advanced analytics feature</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PremierFeatures