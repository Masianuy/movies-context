import React, { useContext } from 'react';
import { MovieContext } from '../../context';
import './WatchHeader.css';

function WatchHeader() {
  const {movie} = useContext(MovieContext);

  return (
    <header>
      <h6 className='header-title'>{movie.title}</h6>
      <div className='header-img'>
        <img src={movie.posterUrl} alt={movie.title} />
      </div>
    </header>
  )
}

export default WatchHeader