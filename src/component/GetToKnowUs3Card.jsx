

import { FaCalendarAlt, FaCommentDots } from "react-icons/fa";

const GetToKnowUs3Card = ({ firstImage, secondImage, thirdImage }) => {
    return (
        <div className="mx-4 bg-[#F5F5F5] p-4 rounded-2xl">
            <div className="relative ">
                <img src={firstImage} alt="" className="rounded-4xl w-[350px] h-[300px] object-cover" />
                <div className="flex absolute bg-[#175F71] text-white bottom-10  px-3 py-2 rounded-2xl gap-5">
                    <div className="flex items-center  gap-2">
                        <FaCalendarAlt className="text-white text-sm" />
                        <p className="text-xs">07 July, 2025</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCommentDots className="text-white text-sm" />
                        <p className="text-xs">1 Comment</p>
                    </div>
                </div>
            </div>

            <p className="pt-5 pl-10 font-bold">Our Journey Memorable<br /> Adventures Worldwide</p>
        </div>
    )
}

export default GetToKnowUs3Card