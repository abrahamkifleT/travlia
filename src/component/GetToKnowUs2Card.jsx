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
            <div className="relative h-[250px]">
                <img src={image} alt={title} className="w-full h-full object-cover" />
                <div className="absolute -bottom-5 left-8 z-10">
                    <div className="bg-[#0D333D] text-white px-6 py-2.5 rounded-full font-medium shadow-md">
                        {price}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="px-8 pt-10 pb-8">
                <h3 className="text-2xl text-[#333] font-medium mb-6">
                    {title}
                </h3>

                <div className="border-t border-gray-100 mb-4"></div>

                <div className="flex items-center gap-2 mb-4">
                    <span className="font-bold text-gray-800">Destination:</span>
                    <span className="text-gray-600">{destination}</span>
                </div>

                <div className="border-t border-gray-100 mb-4"></div>

                <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-800 font-medium">{duration}</span>
                    <div className="flex gap-4 text-gray-400">
                        <FaHotel className="text-lg" />
                        <FaCar className="text-lg" />
                        <FaUtensils className="text-lg" />
                    </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    {description}
                </p>

                <div className="w-full">
                    <Button
                        title="EXPLORE TRIP"
                        color="#0D333D"
                        className="w-full justify-center py-4 text-sm tracking-wide"
                    />
                </div>
            </div>
        </div>
    );
};

export default GetToKnowUs2Card;