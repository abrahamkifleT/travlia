
import logo from "../assets/logo-1.png"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheck } from "react-icons/fa";
import imageOne from "../assets/152.png"
import imageTwo from "../assets/154.png"
import imageThree from "../assets/Container (7).png"
import imageFour from "../assets/fg2-1.webp.png"
import imageFive from "../assets/fg3.webp.png"
import imageSix from "../assets/fg5.webp.png"


const Footer = () => {
    return (
        <div className="relative bg-black mt-30 flex flex-col items-center justify-center">
            <div className="">
                <div className="relative md:absolute -top-10 left-0 right-0 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-40 py-5 bg-[#206577] mx-4 md:mx-20 px-6 md:px-20 rounded-2xl">
                    <div className="flex items-center gap-4">
                        {/* phone icon */}
                        <div className="w-10 h-10 rounded-full bg-[#26263E] text-white flex items-center justify-center">
                            <FaPhoneAlt />
                        </div>
                        <div className="flex flex-col gap-2 text-white">
                            <p>Need Help</p>
                            <p>+000(123)456-789</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* email icon */}
                        <div className="w-10 h-10 rounded-full bg-[#26263E] text-white  flex items-center justify-center">
                            <FaEnvelope />
                        </div>
                        <div className="flex flex-col gap-2 text-white">
                            <p>Email Us</p>
                            <p>info@travlia.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* location icon */}
                        <div className="w-10 h-10 rounded-full bg-[#26263E] text-white flex items-center justify-center ">
                            <FaMapMarkerAlt />
                        </div>
                        <div className="flex flex-col gap-2 text-white">
                            <p>Location</p>
                            <p>New York, USA</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 px-6 md:px-20 pt-10 md:pt-24 pb-10 gap-8 md:gap-0">
                    <div className="md:col-span-2 flex flex-col text-white">
                        <img src={logo} alt="" className="brightness-0 invert w-36 h-12" />
                        <p className="pt-3 text-2xl">Travel beyond your <br className="hidden md:block" />
                            imagination, with our Travel <br className="hidden md:block" />
                            Agency!</p>
                        <p className="text-sm pt-5 text-gray-400">
                            No matter how big your company is, as you expand and <br className="hidden md:block" />
                            reach new highs you’ll want an agency to have your <br className="hidden md:block" />
                            back. One with a process
                        </p>
                    </div>
                    <div className="text-white">
                        <p className="text-2xl underline pb-2 inline-block">Travel Itineraries</p>
                        <ul className="text-sm">
                            <li className="pt-3 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-[#175F71] flex items-center justify-center text-black text-[10px]"><FaCheck /></div><a href="">Tour Listings</a></li>
                            <li className="pt-3 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-[#175F71] flex items-center justify-center text-black text-[10px]"><FaCheck /></div><a href="">Destination</a></li>
                            <li className="pt-3 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-[#175F71] flex items-center justify-center text-black text-[10px]"><FaCheck /></div><a href="">Tour Activites</a></li>
                            <li className="pt-3 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-[#175F71] flex items-center justify-center text-black text-[10px]"><FaCheck /></div><a href="">Tour Types</a></li>
                            <li className="pt-3 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-[#175F71] flex items-center justify-center text-black text-[10px]"><FaCheck /></div><a href="">How it Work</a></li>
                            <li className="pt-3 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-[#175F71] flex items-center justify-center text-black text-[10px]"><FaCheck /></div><a href="">Must-See Landmarks</a></li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <p className="text-2xl underline pb-1 inline-block">Explore Now</p>
                        <ul className="text-sm">
                            <li className="pt-3 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-[#175F71] flex items-center justify-center text-black text-[10px]"><FaCheck /></div><a href="">About</a></li>
                            <li className="pt-3 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-[#175F71] flex items-center justify-center text-black text-[10px]"><FaCheck /></div><a href="">Explore The Wonders</a></li>
                            <li className="pt-3 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-[#175F71] flex items-center justify-center text-black text-[10px]"><FaCheck /></div><a href="">Testimonials</a></li>
                            <li className="pt-3 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-[#175F71] flex items-center justify-center text-black text-[10px]"><FaCheck /></div><a href="">Last News</a></li>
                            <li className="pt-3 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-[#175F71] flex items-center justify-center text-black text-[10px]"><FaCheck /></div><a href="">Contact Now</a></li>
                            <li className="pt-3 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-[#175F71] flex items-center justify-center text-black text-[10px]"><FaCheck /></div><a href="">Traveling on a Budget</a></li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <p className="text-2xl underline pb-1 inline-block">Adventure Travel</p>
                        <ul className="text-sm">
                            <li className="pt-3 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-[#175F71] flex items-center justify-center text-black text-[10px]"><FaCheck /></div><a href="">Organized Group Tour</a></li>
                            <li className="pt-3 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-[#175F71] flex items-center justify-center text-black text-[10px]"><FaCheck /></div><a href="">Single Custemized Trip</a></li>
                            <li className="pt-3 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-[#175F71] flex items-center justify-center text-black text-[10px]"><FaCheck /></div><a href="">Storyboard</a></li>
                            <li className="pt-3 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-[#175F71] flex items-center justify-center text-black text-[10px]"><FaCheck /></div><a href="">UserFlow</a></li>
                            <li className="pt-3 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-[#175F71] flex items-center justify-center text-black text-[10px]"><FaCheck /></div><a href="">Information Architecture</a></li>
                            <li className="pt-3 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-[#175F71] flex items-center justify-center text-black text-[10px]"><FaCheck /></div><a href="">Rience of Cultures</a></li>
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6">
                    <img src={imageOne} alt="" className="w-full h-45 object-cover" />
                    <img src={imageTwo} alt="" className="w-full h-45 object-cover" />
                    <img src={imageThree} alt="" className="w-full h-45 object-cover" />
                    <img src={imageFour} alt="" className="w-full h-45 object-cover" />
                    <img src={imageFive} alt="" className="w-full h-45 object-cover" />
                    <img src={imageSix} alt="" className="w-full h-45 object-cover" />
                </div>

            </div>
            <p className="text-white py-3">2025 © Travlia. All rights reserved.</p>
        </div>
    )
}

export default Footer