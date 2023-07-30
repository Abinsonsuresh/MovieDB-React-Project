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
            <div className="h-[100vh] main flex justify-center items-center  bg-gray-950 text-white">
                <div className='text-6xl'>Loading...</div>
            </div>
            </>
        )
    }
    return(
        <>
            <div className="navbar flex justify-between items-center p-4 bg-gray-800">
    <div className='text-white font-bold text-4xl'>MovieDB</div>
        <NavLink to="/">GO HOME</NavLink>
    </div>
        <div className="cont text-white flex p-4 justify-center gap-9">
        <img src={Poster} alt="" />
        <div className="flex flex-col">
        <h2 className='text-4xl font-bold'>{Title}</h2>
        <div>{Year}</div>
        <div>{Type}</div>
        </div>
        </div>
        </>
    )
}

export default Moviemain