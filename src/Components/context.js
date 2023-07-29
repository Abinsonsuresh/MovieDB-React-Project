import React, { useContext, useEffect, useState } from 'react'
const AppContext = React.createContext()
export const API = `https://www.omdbapi.com/?&apikey=d2f10834`

const AppProvider = ({ children })=>{

    const [movie, setMovie]= useState([])
    const [search, setSearch]= useState("Pokemon")
    const [loading, setLoading]= useState(true)
    const [error, setError]= useState({show:"false", msg:""})


    const getMovies =async(url)=>{
        try{
            setLoading(true)
            const result = await fetch(url)
            const parseddata = await result.json()
            console.log(parseddata)
            if(parseddata.Response === "True")
            {
                setLoading(false)
                setMovie(parseddata.Search)
            }
            else{
                setError({show:true, msg:parseddata.Error})
            }
        }
        catch(error){
            console.log("Error")
        }
    }

    useEffect(()=>{
        let timout = setTimeout(()=>{
            getMovies(`${API}& &s=${search}`)
        },600)
        return()=> clearTimeout(timout)
    },[search])

    return <AppContext.Provider value={ {movie, search, setSearch} }>{children}</AppContext.Provider>
}

const useGlobalContext=()=>{
    return useContext(AppContext)
}
export{ AppProvider, useGlobalContext }