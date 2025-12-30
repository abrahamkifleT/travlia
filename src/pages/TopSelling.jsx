

import bgImage from '../assets/Container (3).png';
import Button from '../component/Button';
import Container2 from '../assets/Container (2).png';

const TopSelling = () => {
    return (
        <div className="w-full h-[600px] md:h-screen bg-cover bg-center mt-10 md:mt-30 flex flex-col justify-center md:justify-end md:pb-20" style={{ backgroundImage: `url('${bgImage}')` }}>
            <div className='flex items-center justify-center gap-15 w-full max-w-6xl mx-auto px-4'>
                <div className='mt-0 md:mt-20 text-center md:text-left'>
                    <h2 className='text-4xl md:text-5xl text-[#FAD71B]'>Top-Selling</h2>
                    <h1 className='text-4xl md:text-6xl'>HOLIDAY DEALS</h1>
                    <p className='text-white'>SAVE AN EXTRA 15% ACROSS</p>
                    <p className='text-white pb-10'>AFRICA AND THE MIDDLE EAST</p>
                    <Button title="SEE HOLIDAY DETAIL" icon="→" color='#FAD71B' className="" />
                </div>

                <img src={Container2} alt="" className="hidden md:block size-120" />

            </div>
        </div>
    );
};

export default TopSelling;