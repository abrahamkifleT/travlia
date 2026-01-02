import brandone from "../assets/56.png"
import brandtwo from "../assets/sp13.svg fill.png"
import brandthree from "../assets/sp14.svg fill.png"
import brandfour from "../assets/sp15.svg fill.png"
import brandfive from "../assets/sp10.svg fill.png"
import profile from "../assets/tst7.webp.png"
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const GetToKnowUs4 = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center px-6 md:px-20 my-15">
                <p>Get To KnowUs </p>
                <div className="flex flex-col-reverse lg:flex-row items-center lg:items-end justify-between gap-10 lg:gap-5">
                    <div className="pb-5">
                        <p className="text-xl md:text-2xl lg:text-2xl font-medium max-w-4xl text-left leading-tight "><span className="text-[60px] font-bold ">"</span>It is a long established fact that a reader will <br /> be distracted by the readable content of a <br /> page when looking at its layout the point of using.</p>
                        <div className="flex flex-col items-start justify-center gap-1 my-3">
                            <div className="flex items-center justify-start gap-1 my-3">
                                <FaStar className="text-white text-xl" stroke="black" strokeWidth="40" />
                                <FaStar className="text-white text-xl" stroke="black" strokeWidth="40" />
                                <FaStar className="text-white text-xl" stroke="black" strokeWidth="40" />
                                <FaStar className="text-white text-xl" stroke="black" strokeWidth="40" />
                                <FaStar className="text-white text-xl" stroke="black" strokeWidth="40" />
                            </div>

                            <p>Shere John - OUR CLIENT</p>
                        </div>
                    </div>
                    {/* add right and left pointing icon */}
                    <div className="flex items-center gap-5 mt-5">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black text-white shadow-md cursor-pointer hover:bg-gray-800 transition-colors">
                            <FaArrowLeft className="text-lg" />
                        </div>
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black text-white shadow-md cursor-pointer hover:bg-gray-800 transition-colors">
                            <FaArrowRight className="text-lg" />
                        </div>
                    </div>
                    <div>
                        <img src={profile} alt="" className="w-[200px] md:w-[300px] lg:w-[350px] object-cover" />
                    </div>

                </div>
            </div>

            <div className="flex flex-col items-center justify-between px-6 md:px-20">
                <p className="my-5 font-bold text-lg md:text-xl lg:text-xl">Trusted by the highest performance teams at</p>
                <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 md:gap-14 lg:gap-20 my-3">
                    <img src={brandone} alt="" className="w-20 md:w-20 lg:w-30" />
                    <img src={brandtwo} alt="" className="w-20 md:w-20 lg:w-30" />
                    <img src={brandthree} alt="" className="w-20 md:w-20 lg:w-30" />
                    <img src={brandfour} alt="" className="w-20 md:w-20 lg:w-30" />
                    <img src={brandfive} alt="" className="w-20 md:w-20 lg:w-30" />
                </div>
            </div>

        </div>
    )
}

export default GetToKnowUs4
