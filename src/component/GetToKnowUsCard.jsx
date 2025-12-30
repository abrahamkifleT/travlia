import { FaArrowRight, FaLocationArrow } from "react-icons/fa";

const GetToKnowUsCard = ({ image, price, title, duration }) => {
    return (
        <div className="w-full max-w-[400px]">
            <div className="flex bg-white rounded-[20px] p-3 shadow-sm border border-gray-100 gap-4 items-stretch hover:shadow-md transition-shadow">
                {/* Image Section */}
                <div className="shrink-0">
                    <img
                        src={image}
                        alt={title}
                        className="w-[110px] h-full object-cover rounded-2xl"
                    />
                </div>

                {/* Content Section */}
                <div className="flex flex-col grow py-1 justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-black mb-1">{price}</h3>
                        <p className="text-gray-800 text-lg leading-snug font-medium mb-3">
                            {title}
                        </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center text-gray-900 text-sm font-semibold gap-2">
                            <FaLocationArrow className="text-black text-xs transform -rotate-45" />
                            <span>{duration}</span>
                        </div>

                        <div className="bg-[#EBF5F8] w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-[#dbebf0] transition-colors">
                            <FaArrowRight className="text-black text-xs" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetToKnowUsCard;