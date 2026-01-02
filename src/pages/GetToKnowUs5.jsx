import GetToKnowUs3Card from "../component/GetToKnowUs3Card";
import firstImage from "../assets/118.png"
import secondImage from "../assets/cyclist-women.png"
import thirdImage from "../assets/Container (8).png"
const GetToKnowUs5 = () => {
    return (
        <div className="flex flex-col items-center my-15">
            <p>GetToKnowUs</p>
            <div className="flex flex-col md:flex-row mx-4 md:mx-20 pt-15 gap-8 md:gap-0">
                <GetToKnowUs3Card firstImage={firstImage} secondImage={secondImage} thirdImage={thirdImage} />

                <GetToKnowUs3Card firstImage={secondImage} secondImage={thirdImage} thirdImage={firstImage} />

                <GetToKnowUs3Card firstImage={thirdImage} secondImage={firstImage} thirdImage={secondImage} />
            </div>
        </div>
    )
}

export default GetToKnowUs5