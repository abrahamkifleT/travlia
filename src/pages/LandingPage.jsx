import ruralBg from '../assets/rural_bg.png'

import Container from '../assets/Container.png'

import Header from '../component/Header'

const LandingPage = () => {
    return (
        <div
            className="relative w-full h-screen bg-cover bg-center overflow-hidden "
            style={{ backgroundImage: `url(${ruralBg})` }}
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 w-full h-full flex flex-col ">
                <Header />

                <div className="flex-1 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-2 md:mx-20 md:mt-20">
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative">
                        <img
                            src={Container}
                            alt="Travel Composition"
                            className="max-w-full h-auto object-contain scale-110 lg:scale-125 transform translate-x-4 lg:translate-x-10 "
                        />

                    </div>

                    <div className="w-full lg:w-1/2 text-white flex flex-col items-center  text-center lg:text-right space-y-0">

                        <div className="font-bold tracking-wider text-xl lg:text-2xl font-['Poppins']">
                            <span className="text-[#FAD71B] font-['Dancing_Script'] mr-2 text-4xl">It's</span>
                            TIME TO
                        </div>

                        <h1 className="text-6xl lg:text-8xl font-['Playfair_Display'] italic text-[#FAD71B] leading-tight -mt-2">
                            Travel
                        </h1>

                        <h2 className="text-5xl lg:text-7xl font-['Poppins'] font-bold tracking-widest leading-none">
                            EXPLORE
                        </h2>

                        <p className="tracking-[0.2em] text-sm lg:text-base mb-2 font-['Poppins'] mt-2">
                            THE WORLD WITH US!
                        </p>

                        <p className="text-gray-300 max-w-md text-xs lg:text-sm leading-relaxed mb-4 font-['Poppins']">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>

                        <button className="bg-[#FAD71B] text-black font-['Poppins'] font-bold py-3 px-8 rounded-full flex items-center gap-2 hover:bg-yellow-400 transition-colors mt-2 shadow-lg shadow-yellow-500/20">
                            SEE HOLIDAY DETAIL
                            <span className="text-xl">→</span>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage