import { useRef } from "react"
import { FaArrowLeft, FaArrowRight, FaTripadvisor } from "react-icons/fa"
import Button from "../component/Button"
import GetToKnowUs2Card from "../component/GetToKnowUs2Card"
import Image1 from "../assets/tour-2.png"
import Image2 from "../assets/Container (1).png"
import Image3 from "../assets/Container (2).png"
import Image4 from "../assets/Container (3).png"
import Image5 from "../assets/Container (4).png"
import Image6 from "../assets/Container.png"

const GetToKnowUs2 = () => {
    const scrollContainerRef = useRef(null)

    const cards = [
        {
            image: Image1,
            price: "$1599",
            title: "Japan And Bali",
            destination: "Maldives",
            duration: "5 Days - 2 Nights",
        },
        {
            image: Image2,
            price: "$1600",
            title: "London Express",
            destination: "Paris",
            duration: "6 Days - 1 Nights",
        },
        {
            image: Image3,
            price: "$1450",
            title: "Chao Phraya",
            destination: "Nepal",
            duration: "9 Days - 10 Nights",
        },
        {
            image: Image4,
            price: "$1460",
            title: "Japan And Bali",
            destination: "Italy",
            duration: "9 Days - 10 Nights",
        },
        {
            image: Image5,
            price: "$2100",
            title: "Swiss Alps",
            destination: "Switzerland",
            duration: "4 Days - 3 Nights",
        },
        {
            image: Image6,
            price: "$1800",
            title: "New York Escape",
            destination: "USA",
            duration: "5 Days - 4 Nights",
        }
    ];

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col items-center py-10 bg-gray-50 min-h-screen">
            <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex justify-start md:justify-center gap-2 md:gap-4 mb-10 md:w-full max-w-[1200px] px-4 pb-2">
                <Button title="Multi Holiday" className="whitespace-nowrap text-[10px] px-3 py-1.5 md:text-base md:px-6 md:py-2" />
                <Button title="F1 Holiday" color="#F4F6F8" className="whitespace-nowrap text-[10px] px-3 py-1.5 md:text-base md:px-6 md:py-2" />
                <Button title="Overwater villa Holiday" color="#F4F6F8" className="whitespace-nowrap text-[10px] px-3 py-1.5 md:text-base md:px-6 md:py-2" />
                <Button title="luxury Holiday" color="#F4F6F8" className="whitespace-nowrap text-[10px] px-3 py-1.5 md:text-base md:px-6 md:py-2" />
                <Button title="skill Holiday" color="#F4F6F8" className="whitespace-nowrap text-[10px] px-3 py-1.5 md:text-base md:px-6 md:py-2" />
            </div>

            <div className="relative w-full max-w-[1400px] flex items-center justify-center px-4">
                {/* Left Arrow */}
                <button
                    onClick={scrollLeft}
                    className="hidden md:flex absolute left-4 md:left-10 z-10 w-12 h-12 rounded-full bg-[#2C211A] items-center justify-center text-white shadow-lg hover:bg-black transition-colors"
                >
                    <FaArrowLeft className="text-xl" />
                </button>

                {/* Scrollable Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-4 md:gap-5 lg:gap-6 overflow-x-auto scrollbar-hide py-10 px-0 md:px-8 w-full snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {cards.map((card, index) => (
                        <div key={index} className="snap-center shrink-0 min-w-full flex justify-center md:min-w-0 md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)]">
                            <GetToKnowUs2Card
                                image={card.image}
                                price={card.price}
                                title={card.title}
                                destination={card.destination}
                                duration={card.duration}
                            />
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={scrollRight}
                    className="hidden md:flex absolute right-4 md:right-10 z-10 w-12 h-12 rounded-full bg-[#2C211A] items-center justify-center text-white shadow-lg hover:bg-black transition-colors"
                >
                    <FaArrowRight className="text-xl" />
                </button>
            </div>

            {/* Footer Rating Section */}
            <div className=" md:flex mt-8 items-center gap-2 text-sm font-medium">
                <span className="font-bold">Excellent!</span>
                <div className="flex gap-1 text-[#FAD71B]">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <span>5.0 Rating Out 5.0 based on 25636 Reviews</span>
                <div className="flex items-center gap-1 font-bold text-green-600 ml-2">
                    <FaTripadvisor className="text-2xl" />
                    <span>Tripadvisor</span>
                </div>
            </div>
        </div>
    )
}

export default GetToKnowUs2