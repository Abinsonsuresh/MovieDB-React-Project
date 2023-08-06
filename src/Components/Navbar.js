import React from 'react'
import Search from './Search'
import { useState } from 'react'
import { HiDocumentDownload, HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { Link, NavLink } from "react-router-dom";
// import Movies from './Movies'
import {MdOutlineDarkMode, MdOutlineLightMode} from  'react-icons/md'
import { useGlobalContext } from './context'






const Navbar = () => {
    const {mode, setMode} = useGlobalContext()
    const [showNavbar, setShowNavbar] = useState(false)
    const toggler = () => {
        // console.log("toggled")
        setShowNavbar(!showNavbar)
        // console.log(showNavbar)
    }

    const [showSearchBar, setShowSearchBar] = useState(false)
    const toggleSearch = () => {
        console.log("Search toggled")
        setShowSearchBar(!showSearchBar)
        console.log(showSearchBar)
    }
    const setModeTo =()=>{
        if(mode=== 'dark')
        {
            setMode("light")
        }
        else{
            setMode("dark")
        }
    }


    return (
        <div className="navbar h-20 max-w-[1380px] mx-auto flex justify-between items-center md:justify-between md:items-center p-4 bg-green-500  flex-row ">
            <div className='flex items-center justify-center'>
                <NavLink to='/'>

            <div  className='text-white font-bold text-4xl flex items-center'>Movie <span className='text-yellow-300'>DB</span> </div>
                </NavLink>
            <div onClick={setModeTo} className='ml-12 hover:cursor-pointer'>{mode==="dark"? <MdOutlineLightMode size={30}/>  : <MdOutlineDarkMode size={30}/> } {mode==="dark"?"Light":"Dark"}</div>
            </div>
            <div>
                <ul class="features text-xl bg-slate-500 md:bg-transparent text-white font-medium lg:flex hidden space-x-2">
                    <li className='p-4 hover:underline hover:underline-offset-8'> <Link to="/" >Home</Link></li>
                    <li className='p-4 hover:underline hover:underline-offset-8'> <Link to="/Movies" >Movies</Link></li>
                    <li className='p-4 hover:underline hover:underline-offset-8'> <Link to="/Recommended"> Recommended</Link></li>
                    <li className='p-4 hover:underline hover:underline-offset-8'> <Link to="/About"> About us</Link></li>
                    <li className='p-4 hover:underline hover:underline-offset-8'> <Link to="/Contact"> Contact</Link></li>

                </ul>
            </div>

            <div className='flex'>


                <div className='  z-50  lg:hidden' onClick={toggleSearch}>
                    {
                        showSearchBar === true ? <AiOutlineSearch size={30} color='white' /> : <AiOutlineSearch size={30} color='white' />
                    }

                </div>

                <div className={showSearchBar === true ? 'lg:hidden absolute left-0 p-2 top-0 bg-green-500 h-20  w-full flex items-center' : 'hidden lg:flex'}>
                    <Search />
                </div>



                <div onClick={toggler} className='z-50 lg:hidden'>
                    {showNavbar === true ? <AiOutlineClose size={30} color='white' /> : <HiMenuAlt3 size={30} color='white' />}
                </div>
                {/* MENU */}
                <div className={showNavbar === true ? 'lg:hidden fixed right-0 top-0 w-[60%] h-full bg-green-500 border-gray-200 pt-20' : 'fixed right-[-100%]'}>
                    <ul className='p-4'>

                        <li className='p-4 border-b uppercase border-y-white'> <Link to="/" >Home</Link></li>
                    <li className='p-4 border-b uppercase border-y-white'> <Link to="/Movies" >Movies</Link></li>
                    <li className='p-4 border-b uppercase border-y-white'> <Link to="/Recommended"> Recommended</Link></li>
                    <li className='p-4 border-b uppercase border-y-white'> <Link to="/About"> About us</Link></li>
                    <li className='p-4 uppercase'> <Link to="/Contact"> Contact</Link></li>

                    </ul>
                </div>

            </div>


        </div>

    )
}

export default Navbar