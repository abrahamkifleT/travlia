import Button from "../component/Button"
import logo from "../assets/logo-1.png"
import cta from "../assets/cta-bg3.webp.png"
import { FaCheckCircle } from "react-icons/fa";

const GetToKnowContainer = () => {
    return (
        <div className="relative bg-[#111E21] mx-4 md:mx-10 lg:mx-40 my-6 md:my-10 pb-10 md:pb-20 rounded-3xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
                <div className="mt-10 px-6 lg:mt-20 lg:pl-20 lg:pr-10 flex-1">
                    <img src={logo} alt="" className="mb-10 w-32" />
                    <p className="text-gray-300 mb-8 max-w-sm text-sm leading-relaxed">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi placeat possimus sint maiores dolore eius aut iusto totam quisquam quas.</p>
                    <div className="flex gap-6 mb-8">
                        <div className="flex items-center gap-2">
                            <FaCheckCircle className="text-[#3fd0d4]" />
                            <p className="text-gray-200 text-sm">Best Travel Deals</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheckCircle className="text-[#3fd0d4]" />
                            <p className="text-gray-200 text-sm">Flexible Booking</p>
                        </div>
                    </div>
                    <Button title="SEE HOLIDAY DETAIL" className="mb-6 !text-black text-xs font-bold px-6 py-3" color="#FAD71B" />
                </div>

                <div className="relative w-full lg:w-auto mt-8 lg:mt-0">
                    <div className="absolute my-10 rounded-full left-0 top-0 bottom-0 w-7 bg-black items-center justify-center z-10 h-full hidden md:flex">
                        <p className="text-white transform rotate-90 whitespace-nowrap tracking-wider text-xs ">Extra 15% across Africa and the middle East</p>
                    </div>
                    <img src={cta} alt="" className="md:pl-4 w-full h-64 md:h-[300px] lg:w-[500px] object-cover" />
                </div>
            </div>
        </div>
    )
}

export default GetToKnowContainer