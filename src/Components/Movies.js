import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom'
// h-[26rem] w-56

const Movies = () => {
    const {movie} = useGlobalContext()
  return (
    <> 
    <div className="container">
        <div className="mdata flex flex-row items-center justify-center gap-9 flex-wrap  ">
            {
                movie.map((dataFromMovie)=>{
                    const{ imdbID, Title, Year, Poster, Type } = dataFromMovie
                    const MovieName = Title.substring(0,25)
                    return(
                        <NavLink to={`movie/${imdbID}`} key={imdbID}>
                            <div className="card bg-yellow-400 min-h-[28rem] min-w-64 md:min-h-[26rem] md:w-56 ">
                                <div className="cardinfo flex flex-col justify-center  items-center">
                                    <img className=' items-center' src={Poster === "N/A" ? `https://m.media-amazon.com/images/M/MV5BMDkxNzRmNDYtMDY0OS00N2JhLTkzZWUtMWE3MzZkNDk1MmJiXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_SX300.jpg` :`${Poster}`} alt="" />
                                    <h3 className='text-xl font-semibold text-center'>{MovieName.length >= 25 ? `${MovieName}...`: MovieName}</h3>
                                    <div className="flex  justify-between pb-4">
                                    <h5 className='mr-4'>({Year})</h5>
                                    <h5>{Type}</h5>
                                    </div>

                                </div>
                            </div>
                        </NavLink>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default Movies