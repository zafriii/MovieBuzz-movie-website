import React from 'react'
import { useGlobalContext } from '../Context'
import { IoSearchSharp } from "react-icons/io5";
import './movie.css'

function Search() {

  const {query, setQuery, isError} = useGlobalContext();

  

  return (
      <>
      
      
      <div className="search-section">

      <h2>Search <IoSearchSharp /> your favourite movies</h2>

      <form action='#' onSubmit={(e) => e.preventDefault()}>

          <div>

              <input

              type='text'
              placeholder='Enter movie name here...'
              value={query}
              onChange={(e)=>{setQuery(e.target.value)}}>

              </input>

          </div>


    <div className='text'>


      <h2>Stream movies online</h2>
      <p>Need some help deciding what to watch before all your popcorn runs out?
        We’ve got you covered! With this guide you can find the best movies to watch online across all languages,
      eras, and genres all under one roof. From seeing where to watch movies for free to keeping track of all 
      the new movie releases, our easy-to-use guide is your go-to hub for all things movies.
      Where to watch movies online?Want to know where to watch your favourite movies online?
      With a growing catalogue of more than 96,000+ films across all major streaming platforms, 
      our movie streaming guide is the ideal way to keep track of where to buy, rent or stream movies online.
      Our user-friendly search filter also make it easy to filter movies based on your personal preferences. 
      </p>





    </div>

          

          <div className="card-error">

                <p>{isError.show && isError.message }</p>

          </div>

      </form>
  </div>
      
      
      
      </>
  )
    
  
}

export default Search