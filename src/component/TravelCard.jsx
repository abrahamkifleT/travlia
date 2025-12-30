const TravelCard = ({ image, title, description }) => {
    return (
        <div className="flex flex-col items-center text-center p-4 max-w-xs mx-auto">
            <div className="mb-6 relative">
                <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <h2 className="text-xl font-medium mb-3 text-gray-800 font-['Poppins']">
                {title}
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed font-['Poppins']">
                {description}
            </p>
        </div>
    )
}

export default TravelCard