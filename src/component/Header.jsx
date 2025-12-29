import React from 'react'
import { FiSearch, FiMail, FiMenu } from 'react-icons/fi'
import logo from '../assets/Logo-1.png'

const Header = () => {
    return (
        <header className='bg-[#2B2D21] text-white pt-3 px-4'>
            <div className='flex justify-between content-center text-center'>
                <img src={logo} alt="" className='text-white w-15 h-10 invert' />
                <div >
                    <ul className='flex gap-6'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Toures</li>
                        <li>Pages</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className='flex gap-5'>
                    <FiSearch className="text-2xl cursor-pointer mr-5" />

                    <FiMail className="text-2xl cursor-pointer" />

                    <div>
                        <p>Let's Build</p>
                        <p>infor@company.com</p>
                    </div>

                    <button className='bg-[#FAD71B] my-2 py-2 px-4 text-black rounded-md'>
                        Explore Trip
                    </button>

                    <FiMenu className="text-2xl cursor-pointer mt-3" />

                </div>
            </div>

        </header>
    )
}

export default Header