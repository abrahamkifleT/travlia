import React from 'react'
import { FiSearch, FiMail, FiMenu } from 'react-icons/fi'
import logo from '../assets/Logo-1.png'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isSearchOpen, setIsSearchOpen] = React.useState(false);

    return (
        <header className='bg-[#2B2D21] text-white pt-3 px-4 relative'>
            <div className='flex justify-between items-center text-center'>
                <img src={logo} alt="" className='text-white w-12 h-auto md:w-24 md:h-auto invert' />

                {/* Desktop Navigation */}
                <div className='hidden md:block'>
                    <ul className='flex gap-6'>
                        <li className='cursor-pointer hover:text-[#FAD71B]'>Home</li>
                        <li className='cursor-pointer hover:text-[#FAD71B]'>About</li>
                        <li className='cursor-pointer hover:text-[#FAD71B]'>Toures</li>
                        <li className='cursor-pointer hover:text-[#FAD71B]'>Pages</li>
                        <li className='cursor-pointer hover:text-[#FAD71B]'>Blog</li>
                        <li className='cursor-pointer hover:text-[#FAD71B]'>Contact</li>
                    </ul>
                </div>

                <div className='flex items-center gap-5'>
                    {/* Search Section */}
                    <div className='relative flex items-center'>
                        {isSearchOpen && (
                            <input
                                type="text"
                                placeholder="Search..."
                                className="absolute right-8 p-1 rounded-md text-black focus:outline-none w-40"
                            />
                        )}
                        <FiSearch
                            className="text-2xl cursor-pointer hover:text-[#FAD71B]"
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                        />
                    </div>

                    {/* Desktop-only Right Side Items */}
                    <div className='hidden md:flex items-center gap-5'>
                        <FiMail className="text-2xl cursor-pointer hover:text-[#FAD71B]" />

                        <div className="text-left">
                            <p className="text-xs text-gray-400">Let's Build</p>
                            <p className="text-sm font-semibold">infor@company.com</p>
                        </div>

                        <button className='bg-[#FAD71B] py-2 px-4 text-black rounded-md font-semibold hover:bg-yellow-400 transition-colors'>
                            Explore Trip
                        </button>
                    </div>

                    {/* Mobile Hamburger Menu Icon */}
                    <FiMenu
                        className="text-2xl cursor-pointer md:hidden hover:text-[#FAD71B]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />

                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className='md:hidden absolute top-full left-0 w-full bg-[#2B2D21] z-50 shadow-lg border-t border-gray-700'>
                    <ul className='flex flex-col p-4 gap-4 text-left'>
                        <li className='cursor-pointer hover:text-[#FAD71B]'>Home</li>
                        <li className='cursor-pointer hover:text-[#FAD71B]'>About</li>
                        <li className='cursor-pointer hover:text-[#FAD71B]'>Toures</li>
                        <li className='cursor-pointer hover:text-[#FAD71B]'>Pages</li>
                        <li className='cursor-pointer hover:text-[#FAD71B]'>Blog</li>
                        <li className='cursor-pointer hover:text-[#FAD71B]'>Contact</li>

                        {/* Mobile Extras */}
                        <div className='border-t border-gray-700 pt-4 flex flex-col gap-4'>
                            <div className='flex items-center gap-2'>
                                <FiMail className="text-xl" />
                                <span>infor@company.com</span>
                            </div>
                            <button className='bg-[#FAD71B] py-2 px-4 text-black rounded-md font-semibold text-center'>
                                Explore Trip
                            </button>
                        </div>
                    </ul>
                </div>
            )}

        </header>
    )
}

export default Header