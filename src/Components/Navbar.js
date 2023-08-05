import React from 'react'
import Search from './Search'
import { useState } from 'react'
import {HiDocumentDownload, HiMenuAlt3} from 'react-icons/hi'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'




const Navbar = () => {
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


    return (
        <div  className="navbar h-20 max-w-[1380px] mx-auto flex justify-between items-center md:justify-between md:items-center p-4 bg-green-500  flex-row ">
            <div className='text-white font-bold text-4xl flex items-center'>Movie <span className='text-yellow-300'>DB</span> 

            </div>
            <div>
            <ul class="features text-xl bg-slate-500 md:bg-transparent text-white font-medium md:flex hidden space-x-2">
                    <li className='p-4 hover:underline hover:underline-offset-8'><a href="#"></a>Movies</li>
                    <li className='p-4 hover:underline hover:underline-offset-8'><a href="#"></a>Recommended</li>
            <li className='p-4 hover:underline hover:underline-offset-8'><a href="#"></a>About us</li>
                    <li className='p-4 hover:underline hover:underline-offset-8'><a href="#"></a>Contact</li>
                </ul>
            </div>



                <div className=' ml-36 z-50  md:hidden' onClick={toggleSearch}>
                    {
                        showSearchBar=== true ? <AiOutlineClose size={20} color='white'/>:<AiOutlineSearch size={20} color='white'/>
                    }

                </div>

                <div className={ showSearchBar===true ? 'md:hidden absolute left-0 p-2 top-0 bg-green-500 h-20  w-full flex items-center' : 'hidden md:flex'  }>
                    <Search/>
                </div>
  


            <div onClick={toggler} className='z-50 md:hidden'>
            {showNavbar===true ? <AiOutlineClose size={20} color='white'/> : <HiMenuAlt3 size={20} color='white'/> }
            </div>
            {/* MENU */}
            <div className={showNavbar===true ? 'md:hidden fixed right-0 top-0 w-[60%] h-full bg-green-500 border-gray-200 pt-20' : 'fixed right-[-100%]'}>
                <ul className='p-4'> 
                    <li className='p-4 border-b uppercase border-y-white'><a href="#"></a>About us</li>
                    <li className='p-4 border-b uppercase border-y-white'><a href="#"></a>Contact</li>
                    <li className='p-4 border-b uppercase border-y-white'><a href="#"></a>Movies</li>
                    <li className='p-4 uppercase'><a href="#"></a>Recommended</li>
                </ul>
            </div>
                
            </div>
  
    )
}

export default Navbar