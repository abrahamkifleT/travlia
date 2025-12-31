import React from 'react'
import Button from '../component/Button'
import Container from '../assets/Container (1).png'
import { FaCheck } from "react-icons/fa6";

import RatingCard from '../component/RatingCard'

const GettoKnowUs = () => {
    return (
        <div className='w-full overflow-hidden'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 mx-5 lg:mx-20 my-10 lg:my-0'>
                <div className="relative mb-16 lg:mb-0">
                    <img src={Container} alt="" className="w-full max-w-[500px] lg:max-w-[600px]" />
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full lg:left-10 lg:translate-x-0 transform scale-75 md:scale-90 md:w-[300px] ">
                        <RatingCard />
                    </div>
                </div>
                <div className='w-full lg:w-auto'>
                    <h3 className="font-['Dekko'] text-2xl tracking-wider text-center lg:text-left">Get To Know Us</h3>

                    <div className='mt-5 lg:mt-32'>

                        <div className='mt-5 lg:mt-10 mx-0 lg:mx-20'>

                            <p className='text-gray-500 mb-8 max-w-lg text-center lg:text-left mx-auto lg:mx-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rem, deserunt libero vero est adipisci hic dolore saepe cupiditate quia?</p>
                            <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-10'>
                                <div>
                                    <h1 className='text-4xl font-bold  mb-2'>11k</h1>
                                    <p className='text-gray-500 mb-4'>Find the best fares packages</p>

                                    <div className="flex items-center gap-3 pb-2">
                                        <div className="bg-[#175F71] p-1 rounded-full text-white text-xs">
                                            <FaCheck />
                                        </div>
                                        <p className='font-bold'>Best travel deals</p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="bg-[#175F71] p-1 rounded-full text-white text-xs">
                                            <FaCheck />
                                        </div>
                                        <p className="font-bold">Flexible Booking</p>
                                    </div>
                                </div>

                                <div className='hidden md:block'>
                                    <h1 className='text-4xl font-bold  mb-2'>11k</h1>
                                    <p className='text-gray-500 mb-4'>Find the best fares packages</p>

                                    <div className="flex items-center gap-3 pb-2">
                                        <div className="bg-[#175F71] p-1 rounded-full text-white text-xs">
                                            <FaCheck />
                                        </div>
                                        <p className='font-bold'>Best travel deals</p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="bg-[#175F71] p-1 rounded-full text-white text-xs">
                                            <FaCheck />
                                        </div>
                                        <p className="font-bold">Flexible Booking</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center lg:justify-start gap-4 mt-10">
                                <Button title="SEE HOLIDAY DETAIL" icon="→" color="#FAD71B" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GettoKnowUs