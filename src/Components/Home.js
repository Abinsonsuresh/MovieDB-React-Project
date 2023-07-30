import React from 'react'
import Search from './Search'
import Movies from './Movies'

const Home = () => {
  return (
    <>
    <div className="navbar flex md:justify-between md:items-center p-4 bg-gray-800  flex-col md:flex-row overflow-hidden">
    <div className='text-white font-bold text-4xl'>MovieDB</div>
    <div className="pt-4">

    <Search/>
    </div>
    </div>
    <div className="bg-black text-white p-4 ">
    <Movies/>
    </div>
    </>
  )
}

export default Home 