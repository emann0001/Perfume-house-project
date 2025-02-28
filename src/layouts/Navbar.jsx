import React from 'react'
import { Outlet } from 'react-router-dom'
import navLogo from "../assets/PZ.svg"
import AuthBtn from '../components/AuthBtn'
import menuImg from "../assets/Vector.png"

const Navbar = () => {
    return (
        <>
            <nav className='container mx-auto p-[25px] md:px-[15px] lg:py-[33px] lg:px-[99px] justify-between items-center flex'>
                {/* div-1 for nav logo */}
                <div className='flex items-center gap-4'>
                    <img src={navLogo} alt="nav-logo" />
                    <h2 className='hidden md:block font-Sansita text-[28.33px] font-700'>Perfume House</h2>
                </div>
                {/* div-2, for auth btns */}
                <div>
                    {/* div for btns */}
                    <div className='hidden md:block'>
                        <AuthBtn/>
                    </div>
                    {/* div for menu / hamburger img */}
                    <div className='md:hidden'>
                        <img src={menuImg} alt="menu-img" />
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar