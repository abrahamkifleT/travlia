import { useState } from 'react'
import profile from '../assets/51.png'
import profile1 from '../assets/52.png'
import profile2 from '../assets/53.png'
import Background from '../assets/Background1.png'

const GetToKnowUsPople = () => {
    const profiles = [
        { img: profile2, name: "Mhsano Rahola" },
        { img: profile, name: "Other Profile 1" }, // Update with real names if known
        { img: profile1, name: "Other Profile 2" }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const handleLeftClick = () => {
        if (currentIndex < profiles.length - 1) {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const handleRightClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    return (
        <div className='flex flex-col items-center'>
            <p className='text-[24px] font-bold pt-5'>Get To Know Us</p>
            <div className="flex items-center justify-between min-h-screen bg-white  max-w-7xl mx-auto">


                {/* Container for the 3 Images */}
                <div className="flex items-center justify-center gap-8 flex-1">

                    {/* Left Arrow Button */}
                    <button
                        onClick={handleLeftClick}
                        disabled={currentIndex === profiles.length - 1} // Disable if no more next items
                        className={`bg-[#2D1B14] text-white rounded-full p-3 transition-opacity ${currentIndex === profiles.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                    </button>

                    {/* Left Stack Images */}
                    {profiles.slice(0, currentIndex).map((profile, index) => (
                        <div key={index} className="w-64 h-64 opacity-50 scale-90 transition-all duration-300">
                            <img src={profile.img} alt={profile.name} className="w-full h-full object-contain grayscale" />
                        </div>
                    ))}

                    {/* 1. Main Wrapper (The Center Card) */}
                    <div className="relative mt-13 transition-all duration-500 ease-in-out">

                        {/* 2. Floating Profile Image */}
                        <div className="absolute left-1/2 -top-44 -translate-x-1/2 z-10 w-55 h-55">
                            <div className="overflow-hidden">
                                <img
                                    src={profiles[currentIndex].img}
                                    alt={profiles[currentIndex].name}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* 3. Background Image Card */}
                        <div
                            className="relative w-76 h-55 pt-20 pb-10 px-6 rounded-[40px] shadow-sm text-center bg-cover bg-center overflow-hidden"
                            style={{ backgroundImage: `url(${Background})` }}
                        >
                            {/* Content Over the Background */}
                            <div className="relative z-20 mt-12">
                                <h2 className="text-xl font-bold text-gray-800 tracking-tight">
                                    {profiles[currentIndex].name}
                                </h2>

                                {/* Rating Row */}
                                <div className="mt-2 flex items-center justify-center gap-2">
                                    <div className="flex gap-0.5">
                                        {
                                            [...Array(5)].map((_, i) => (
                                                <div key={i} className="bg-[#00B67A] p-0.5 rounded-sm">
                                                    <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                </div>
                                            ))}
                                    </div>

                                    <div className="flex items-center text-[10px] text-gray-400 font-bold">
                                        <svg className="w-3.5 h-3.5 mr-1 text-[#5c6b8a]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Verified
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Stack Images */}
                    {profiles.slice(currentIndex + 1).map((profile, index) => (
                        <div key={index} className="w-64 h-64 opacity-50 scale-90 transition-all duration-300">
                            <img src={profile.img} alt={profile.name} className="w-full h-full object-contain grayscale" />
                        </div>
                    ))}

                    {/* Right Arrow Button */}
                    <button
                        onClick={handleRightClick}
                        disabled={currentIndex === 0} // Disable if no more prev items
                        className={`bg-[#2D1B14] text-white rounded-full p-3 transition-opacity ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default GetToKnowUsPople