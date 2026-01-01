import profile1 from "../assets/Container (7).png"
import profile2 from "../assets/gl7.webp.png"
import profile3 from "../assets/gl8.webp (1).png"
import profile4 from "../assets/gl8.webp.png"
import profile5 from "../assets/gl9.webp (1).png"
import profile6 from "../assets/gl9.webp.png"
import profile7 from "../assets/gl10.webp (1).png"
import profile8 from "../assets/gl10.webp.png"

const GetToNowUsGallery = () => {
    const profiles = [
        profile1, profile2, profile3, profile4, 
        profile5, profile6, profile7, profile8
    ];

    const row1 = [...profiles, ...profiles];
    const row2 = [...profiles.reverse(), ...profiles]; 

    return (
        <div className="flex flex-col items-center py-12 bg-white overflow-hidden">
            <style>
                {`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee-inline {
                    display: flex;
                    width: max-content;
                    /* CHANGE 1: Slowed down from 30s to 60s */
                    animation: marquee 90s linear infinite; 
                }
                .animate-marquee-inline:hover {
                    animation-play-state: paused;
                }
                `}
            </style>

            <div className="mb-10 text-center">
                <p className="text-3xl font-bold text-gray-800 tracking-tight py-5">Get To Know Us</p>
            </div>

            <div className="flex flex-col gap-6 w-full overflow-hidden">
                {/* Row 1 */}
                <div className="relative w-full">
                    <div className="animate-marquee-inline gap-4">
                        {row1.map((pic, index) => (
                            /* CHANGE 2: Removed fixed width classes, used h-full and w-auto */
                            <div key={`row1-${index}`} className="flex-shrink-0 h-48 md:h-64 rounded-2xl overflow-hidden shadow-sm">
                                <img 
                                    src={pic} 
                                    alt="" 
                                    /* CHANGE 3: w-auto ensures the image determines its own width based on its aspect ratio */
                                    className="w-auto h-full object-cover transition-transform duration-500 hover:scale-110" 
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 */}
                <div className="relative w-full">
                    <div className="animate-marquee-inline gap-4">
                        {row2.map((pic, index) => (
                            <div key={`row2-${index}`} className="flex-shrink-0 h-48 md:h-64 rounded-2xl overflow-hidden shadow-sm">
                                <img 
                                    src={pic} 
                                    alt="" 
                                    className="w-auto h-full object-cover transition-transform duration-500 hover:scale-110" 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetToNowUsGallery;