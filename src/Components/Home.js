import React from 'react'

import Movies from './Movies'
import Navbar from './Navbar'
// import Search from './Search'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-black text-white p-4 ">
    <Movies/>
    </div>
    </>
  )
}

export default Home 