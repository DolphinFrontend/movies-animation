import { AnimatePresence } from 'framer-motion';
import React , {createContext, useEffect, useState} from 'react';
import './App.css';
import Button from './components/Button';
import Movies from './components/Movies';


export const MoviesContext = createContext()

function App() {
      const [movie, setMovie] = useState([])
      const [filterMovie, setFilterMovie] = useState([])

  const fetchPopularMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=47abfb3abf2b058c96dacec5a996c8d2&language=en-US&page=1`
    );

    const movies = await response.json()
    setMovie(movies.results)
    setFilterMovie(movies.results)
  };

  useEffect(() => {
   fetchPopularMovie()
  },[])

  const value = {
    movie,
    filterMovie,
    setFilterMovie
  }
    
  


  return (
    <MoviesContext.Provider value={value} >
    <div className="app">
       <Button/>
       <div className='movie-container'>
        <AnimatePresence>
        <Movies/>
        </AnimatePresence>
       </div>
    </div>
    </MoviesContext.Provider>
  );
}

export default App;
