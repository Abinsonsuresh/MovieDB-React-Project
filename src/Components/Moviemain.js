import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API }  from "./context"
import { NavLink } from 'react-router-dom'


const Moviemain = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState("")
    const [loading, setLoading] = useState(true)
    const {Title, Poster, Year, Type, Runtime, Released, Genre, Plot, Language, imdbRating, imdbVotes, BoxOffice, Rated, Director, Writer, Actors} = movie;

    const getMovies = async(url)=>{
        try{
            setLoading(true)

        const result = await fetch(url)
        const data = await result.json();
        if(data.Response === "True")
        {
            setLoading(false)
            setMovie(data)
        }
    }
    catch{
        console.log("Error")
    }
    }
    useEffect(()=>{
        getMovies(`${API}& &i=${id}`)
    },[id])
    if(loading)
    {
        return(
            <>
            <div className="main">
                <div>Loading</div>
            </div>
            </>
        )
    }
    return(
        <>
        <div className="cont">
        <h2>{Title}</h2>
        <img src={Poster} alt="" />
        <h3>{Year}</h3>
        <h3>{Type}</h3>
        </div>
        <NavLink to="/">Go Home</NavLink>
        </>
    )
}

export default Moviemain