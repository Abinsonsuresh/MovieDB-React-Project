import React, { useContext, useEffect, useState } from 'react'
const AppContext = React.createContext()
export const API = `https://www.omdbapi.com/?&apikey=d2f10834`

const AppProvider = ({ children })=>{

    const [movie, setMovie]= useState([])
    const [search, setSearch]= useState("Avengers")
    const [loading, setLoading]= useState(true)
    const [error, setError]= useState({show:"false", msg:""})
    const[totalResults, settotalResults] = useState(0)
    const[mode, setMode] = useState("dark")

    console.log(totalResults)


    const [page, setPage] = useState(1)
    const onChangeNext =async()=>{
        setPage( prev => prev + 1)
        if(page <= Math.ceil(totalResults/10) )
        {
            getMovies(`${API}& &s=${search}& &page=${page}`)
        }
        else{

        }
        console.log(page)
    }

    const onChangePrev =()=>{
        setPage( prev => prev - 1)
        if(page >=1)
        {
            getMovies(`${API}& &s=${search}& &page=${page}`)
        }
        else{
            
        }
        console.log(page)
    }


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
                settotalResults(parseddata.totalResults)

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

    return <AppContext.Provider value={ {movie, search, setSearch, loading, mode, setMode, onChangeNext, onChangePrev, page,totalResults} }>{children}</AppContext.Provider>
}

const useGlobalContext=()=>{
    return useContext(AppContext)
}
export{ AppProvider, useGlobalContext }