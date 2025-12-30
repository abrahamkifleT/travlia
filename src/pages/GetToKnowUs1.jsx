import GetToKnowUsCard from '../component/GetToKnowUsCard';
import Container5 from '../assets/Container (5).png';
import Container1 from '../assets/Container (1).png';
import Container3 from '../assets/Container (3).png';
import Container2 from '../assets/Container (2).png';
import Container4 from '../assets/Container (4).png';
import Container from '../assets/Container.png';

const GetToKnowUs1 = () => {
    const cardData = [
        { image: Container5, price: "$359", title: "Lithaniya - Santa Cruz", duration: "4 Days - 4 Nights" },
        { image: Container1, price: "$859", title: "Veloura - Monte Sienna", duration: "6 Days - 3 Nights" },
        { image: Container3, price: "$689", title: "Elvarra - Costa Lumia", duration: "5 Days - 2 Nights" },
        { image: Container2, price: "$1099", title: "Seraphina - Porto Luno", duration: "8 Days - 7 Nights" },
        { image: Container4, price: "$699", title: "Calethia - Isla Verona", duration: "7 Days - 3 Nights" },
        { image: Container, price: "$699", title: "Verona - Isla Calethia", duration: "7 Days - 3 Nights" },
        { image: Container5, price: "$1460", title: "Japan And Bali", duration: "9 Days - 10 Nights" },
        { image: Container3, price: "$1460", title: "Chao Phraya", duration: "9 Days - 10 Nights" },
        { image: Container1, price: "$1600", title: "London Express", duration: "6 Days - 1 Nights" },
    ];

    return (
        <div className="flex flex-col items-center mb-20 px-4 md:px-10 max-w-7xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold font-handwriting mb-2">GetToKnowUs</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
                {cardData.map((card, index) => (
                    <div key={index} className={index >= 3 ? "hidden md:block" : "block"}>
                        <GetToKnowUsCard
                            image={card.image}
                            price={card.price}
                            title={card.title}
                            duration={card.duration}
                        />
                    </div>
                ))}
            </div>
            <div className="mt-12 text-center text-gray-500 text-sm">
                Want to see our Recent News & Updates. <span className="font-bold text-black cursor-pointer">Click here to View More</span>
            </div>
            <div className="text-center mt-10">
                <h2 className="text-4xl font-bold font-handwriting">GetToKnowUs</h2>
            </div>
        </div>
    );
};

export default GetToKnowUs1;