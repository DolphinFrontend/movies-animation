import React, { useContext } from "react";
import { MoviesContext } from "../App";
import {motion} from "framer-motion"

const Movies = () => {
  const { filterMovie } = useContext(MoviesContext);

  return filterMovie.map((movies ,index) => (
    <motion.div className="movie-card" key={movies.id}
     layout
     initial={{opacity:0}}
     animate={{opacity:1}}
     exit={{opacity:0}}
     transition={{duration:0.5}}
    
    >
      <img 
        src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`} key={index}
        alt={movies.title}
       
      />
      <h2>{movies.title}</h2>
    </motion.div>
  ));
};

export default Movies;
