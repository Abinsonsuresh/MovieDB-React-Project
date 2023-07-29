import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom'

const Movies = () => {
    const {movie} = useGlobalContext()
  return (
    <>
    <div className="container">
        <div className="mdata">
            {
                movie.map((dataFromMovie)=>{
                    const{ imdbID, Title, Year, Poster } = dataFromMovie
                    const MovieName = Title.substring(0,25)
                    return(
                        <NavLink to={`movie/${imdbID}`} key={imdbID}>
                            <div className="card">
                                <div className="cardinfo">
                                    <img src={Poster} alt="" />
                                    <h3>{MovieName.length >= 25 ? `${MovieName}...`: MovieName}</h3>
                                    <h5>{Year}</h5>
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