import { useState, useEffect } from 'react'
import profile from '../assets/51.png'
import profile1 from '../assets/52.png'
import profile2 from '../assets/53.png'
import Background from '../assets/Background1.png'

const GetToKnowUsPople = () => {
    const profiles = [
        { img: profile2, name: "Mhsano Rahola" },
        { img: profile, name: "Sarah Jenkins" },
        { img: profile1, name: "David Chen" }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    // Time Interval: Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === profiles.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [profiles.length]);

    const handleLeftClick = () => {
        setCurrentIndex(prev => (prev === profiles.length - 1 ? 0 : prev + 1))
    }

    const handleRightClick = () => {
        setCurrentIndex(prev => (prev === 0 ? profiles.length - 1 : prev - 1))
    }

    return (
        /* w-full overflow-x-hidden prevents any horizontal scrolling on the page */
        <div className='flex flex-col items-center px-4 w-full overflow-hidden'>
            <p className='text-[20px] md:text-[24px] font-bold mb-32 md:mb-40 pt-10 text-center'>Get To Know Us</p>

            <div className="flex items-center justify-center w-full max-w-7xl mx-auto gap-0 md:gap-8 relative">

                {/* Left Arrow - Completely hidden on mobile */}
                <button
                    onClick={handleLeftClick}
                    className="hidden md:block z-30 bg-[#2D1B14] text-white rounded-full p-3 hover:opacity-90 transition-opacity"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </button>

                {/* Left Stack - Only rendered on Desktop (lg) */}
                <div className="hidden lg:flex gap-4">
                    {profiles.slice(0, currentIndex).map((p, index) => (
                        <div key={index} className="w-48 h-48 opacity-40 scale-75 transition-all duration-500">
                            <img src={p.img} alt="" className="w-full h-full object-contain grayscale" />
                        </div>
                    ))}
                </div>

                {/* Main Card Wrapper */}
                <div className="relative mt-13 transition-all duration-500 ease-in-out flex-shrink-0 w-full md:w-auto flex justify-center">

                    {/* Floating Profile Image */}
                    <div className="absolute left-1/2 -top-36 md:-top-44 -translate-x-1/2 z-10 w-44 h-44 md:w-55 md:h-55 pointer-events-none">
                        <img
                            src={profiles[currentIndex].img}
                            alt={profiles[currentIndex].name}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Background Card - Adjusted w-full for small screens */}
                    <div
                        className="relative w-full max-w-[340px] md:w-76 h-55 pt-20 pb-10 px-6 rounded-[40px] shadow-sm text-center bg-cover bg-center overflow-hidden mx-auto"
                        style={{ backgroundImage: `url(${Background})` }}
                    >
                        <div className="relative z-20 mt-10 md:mt-12">
                            <h2 className="text-lg md:text-xl font-bold text-gray-800 tracking-tight transition-all duration-500">
                                {profiles[currentIndex].name}
                            </h2>

                            <div className="mt-2 flex items-center justify-center gap-2">
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="bg-[#00B67A] p-0.5 rounded-sm">
                                            <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-[10px] text-gray-400 font-bold flex items-center">
                                    <svg className="w-3.5 h-3.5 mr-1 text-[#5c6b8a]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Verified
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Stack - Only rendered on Desktop (lg) */}
                <div className="hidden lg:flex gap-4">
                    {profiles.slice(currentIndex + 1).map((p, index) => (
                        <div key={index} className="w-48 h-48 opacity-40 scale-75 transition-all duration-500">
                            <img src={p.img} alt="" className="w-full h-full object-contain grayscale" />
                        </div>
                    ))}
                </div>

                {/* Right Arrow - Completely hidden on mobile */}
                <button
                    onClick={handleRightClick}
                    className="hidden md:block z-30 bg-[#2D1B14] text-white rounded-full p-3 hover:opacity-90 transition-opacity"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </button>

            </div>
        </div>
    )
}

export default GetToKnowUsPople