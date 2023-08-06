// import React, { useState } from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from  'react-icons/ai'
import Navbar from './Navbar'

// h-[26rem] w-56

const Movies = () => {
    const {movie, loading, onChangeNext, onChangePrev, page,totalResults} = useGlobalContext()


    
    if(loading)
    {
        return(
            <>
            <div className="h-[100vh] main flex justify-center items-center  text-white">
            { /* bg-gray-950  */}
                <div className='text-6xl'>Loading...</div>
            </div>
            </>
        )
    }
  return (
    <> 
    <Navbar/>
    <div className="container pt-4">
        <div className="mdata flex flex-row items-center justify-center gap-9 flex-wrap ">
            {
                movie.map((dataFromMovie)=>{
                    const{ imdbID, Title, Year, Poster, Type } = dataFromMovie
                    const MovieName = Title.substring(0,18)
                    const MType = Type.charAt(0).toUpperCase() + Type.slice(1)
                    return(
                        <NavLink to={`movie/${imdbID}`} key={imdbID}>
                            <div className="h-full border-2 border-green-500 hover:border-yellow-400 border-opacity-80 rounded-lg overflow-hidden">
                            <div className="card bg-green-500 min-h-[28rem] min-w-64 md:min-h-[26rem] md:w-56 hover:scale-105 hover:bg-yellow-400 ">
                                <div className="cardinfo flex flex-col justify-center  items-center">
                                    <img className='items-center w-full object-cover' src={Poster === "N/A" ? `https://m.media-amazon.com/images/M/MV5BMDkxNzRmNDYtMDY0OS00N2JhLTkzZWUtMWE3MzZkNDk1MmJiXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_SX300.jpg` :`${Poster}`} alt="" />
                                    <h3 className='text-xl  font-semibold text-center pt-3'>{MovieName.length >= 18  ? `${MovieName}...`: MovieName}</h3>
                                    <div className="flex  justify-between pb-4">
                                    <h5 className='mr-4   hover:text-white'>({Year})</h5>
                                    <h5 className=' '>{MType}</h5>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </NavLink>
                    )
                })
            }
        </div>
    </div>
    <div className='flex items-center justify-between pl-28 pr-28 pt-4 '>
    <button onClick={onChangePrev} disabled={page<=1} className='flex items-center justify-center rounded-md bg-green-600 h-8 w-20 hover:bg-yellow-500  z'><AiOutlineArrowLeft color='white' size={20}/>Prev</button>
    <button onClick={onChangeNext} disabled={page <= Math.ceil(totalResults/10) } className='flex items-center justify-center rounded-md bg-green-600 h-8 w-20 hover:bg-yellow-500 z'>Next<AiOutlineArrowRight color='white' size={20}/></button>
    </div>

    </>
  )
}

export default Movies