import { FaCar, FaHotel, FaUtensils } from "react-icons/fa";
import Button from "./Button";
import Container from "../assets/tour-2.png"; // Default image

const GetToKnowUs2Card = ({
    image = Container,
    price = "$1600",
    title = "London Express",
    destination = "Paris",
    duration = "6 Days - 1 Nights",
    description = "Accommodations, Flights, Transfers, Tours And Excursions, Activities"
}) => {
    return (
        <div className="bg-white rounded-[35px] shadow-xl overflow-hidden w-full max-w-[320px] font-['Poppins'] shrink-0 select-none">
            {/* Image Section */}
            <div className="relative h-[200px]">
                <img src={image} alt={title} className="w-full h-full object-cover" />
                <div className="absolute -bottom-3 left-6 z-10">
                    <div className="bg-[#0D333D] text-white px-4 py-1.5 rounded-full font-medium shadow-md text-sm">
                        {price}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="px-5 pt-6 pb-5">
                <h3 className="text-lg text-[#333] font-medium mb-3">
                    {title}
                </h3>

                <div className="border-t border-gray-100 mb-3"></div>

                <div className="flex items-center gap-2 mb-3">
                    <span className="font-bold text-gray-800 text-sm">Destination:</span>
                    <span className="text-gray-600 text-sm">{destination}</span>
                </div>

                <div className="border-t border-gray-100 mb-3"></div>

                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-800 font-medium text-sm">{duration}</span>
                    <div className="flex gap-3 text-gray-400">
                        <FaHotel className="text-base" />
                        <FaCar className="text-base" />
                        <FaUtensils className="text-base" />
                    </div>
                </div>

                <p className="text-gray-500 text-xs leading-relaxed mb-4">
                    {description}
                </p>

                <div className="w-full">
                    <Button
                        title="EXPLORE TRIP"
                        color="#0D333D"
                        className="w-full justify-center py-2.5 text-xs tracking-wide"
                    />
                </div>
            </div>
        </div>
    );
};

export default GetToKnowUs2Card;