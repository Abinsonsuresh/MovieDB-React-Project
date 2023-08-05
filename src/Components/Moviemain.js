import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API }  from "./context"
import { NavLink } from 'react-router-dom'


const Moviemain = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState("")
    const [loading, setLoading] = useState(true)
    const {Title, Poster, Year, Type, Runtime, Metascore, Awards, Country, Released, Genre, Plot, Language, imdbRating, imdbVotes, BoxOffice, Rated, Director, Writer, Actors} = movie;

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
            <div className="navbar flex justify-between items-center p-4  bg-green-500">
    <div className='text-white font-bold text-4xl'>MovieDB</div>
        <NavLink to="/">GO HOME</NavLink>
    </div>
        {/* <div className='border-2 border-yellow-200 border-opacity-80 rounded-lg overflow-hidden h-full p-4 '> */}
        <div className="cont text-white flex flex-col md:flex-row p-4 justify-center items-center md:items-start md:mt-10 gap-9 h-[120vh] bg-black">
        <div className='border-2 border-yellow-200 border-opacity-80 rounded-lg overflow-hidden h-[28rem] w-[19rem] md:h-[26rem] md:w-64 hover:scale-105'>
        <img className='h-[28rem] w-[19rem] md:h-[26rem] md:w-64 ' src={Poster} alt="" />
        </div>


        <div className="flex flex-col">
        <h2 className='text-4xl font-bold'>{Title}</h2>
        <div>{Year} ({Type})</div> 
        <div className='spa'> 

        <div>
            <div className="imdb flex  flex-col  justify-center">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8 text-yellow-400 ml-2" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
        <div>Imdb: {imdbRating} </div>
        <div>({imdbVotes})</div>
            </div>
        </div>
        <p>Metascore: {Metascore}</p>
        <p>Plot: {Plot}</p>
        <div>Rated: {Rated}</div>
        <div>Genre: {Genre}</div>
        <div>Released: {Released}</div>
        <div>Runtime: {Runtime}</div>
        <div>Genre: {Genre}</div>
        <div>Director: {Director}</div>
        <div>Writer: {Writer}</div>
        <div>Actors: {Actors}</div>
        <div>Language: {Language}</div>
        <div>Country: {Country}</div>
        <div>Awards: {Awards}</div>
        <div>BoxOffice: {BoxOffice}</div>
        </div>



        </div>
        </div>
        {/* </div> */}
        </>
    )
}

export default Moviemain