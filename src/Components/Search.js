import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
    const { search, setSearch } = useGlobalContext()
    const ChangeSearch =(event)=>{
        setSearch(event.target.value)
    }
  return (
    <>
    <section>
        <form className='' action="#" onSubmit={(event)=>{event.preventDefault()}}></form>
        <div className="box flex  items-center ">
          <div className='mr-2 text-white font-medium text-md'>Search</div>
            <input className='rounded-lg h-8 w-80 md:w-64 p-4' type="text" 
            placeholder='Search movie'
            value={search}
            onChange={ChangeSearch}/>
        </div>
    </section>
    </>
  )
}

export default Search