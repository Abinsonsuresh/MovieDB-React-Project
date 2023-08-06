import React from 'react'
import img from '../Assets/3.jpg'
import '../Components/vis.css'
import Movies from './Movies'
import Navbar from './Navbar'
import { useGlobalContext } from './context'
import { Link } from "react-router-dom";

// import Search from './Search'

const Home = () => {
  const{mode} =useGlobalContext()
  return (
    <>
    <div className='bgkaro h-[100vh] '>
    <Navbar/>
    <div className='p-4 md:p-24'>
    <div className>
      <div className='flex flex-col items-center justify-center mt-52'>
        <h2 className=' text-2xl md:text-5xl font-bold'>Welcome to the <span className='text-green-500'>world of Movies</span></h2>
        <h3 className=' text-center text-xl md:text-2xl font-medium md:font-semibold pt-5'>Find ratings and information for the newest movie and TV shows</h3>
      <button className=' mt-5 bg-green-500 w-52 h-14 rounded-full text-xl font-bold'><Link to='/Movies'>Go to Movies</Link></button>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Home 