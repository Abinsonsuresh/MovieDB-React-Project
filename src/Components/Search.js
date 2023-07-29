import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
    const { search, setSearch } = useGlobalContext
    const ChangeSearch =(event)=>{
        setSearch(event.target.value)
    }
  return (
    <>
    <section>
        <form action="#" onSubmit={(event)=>{event.preventDefault()}}></form>
        <div className="box">
            <input type="text" 
            placeholder='Search movie'
            value={search}
            onChange={ChangeSearch}/>
        </div>
    </section>
    </>
  )
}

export default Search