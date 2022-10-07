import React,{useContext, useState} from 'react'
import { MoviesContext } from '../App'
import "../App.css"
import {genres} from "../untils"

const Button = () => {
  const [tabActive, setTabActive] = useState(0)
  const {movie ,setFilterMovie} =useContext(MoviesContext)



  const handleClickFilter = (id) => {
     setTabActive()
     const filteredMovie = movie.filter(movies => movies.genre_ids.includes(id))
     if(id === 0) {
      setFilterMovie(movie)
     } else {
      setFilterMovie(filteredMovie)
     }
  }

  return (
    <div className='button-wrapper'>
        {genres.map(genre =>
            <button 
            onClick={() => handleClickFilter(genre.id)}
            className={tabActive === genre.id ? "active" : undefined} 
            key={genre.id}>
              {genre.name}
              </button>
            )}
    </div>
  )
}

export default Button