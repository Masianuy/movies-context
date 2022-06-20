import React, { useContext } from 'react';
import { MovieContext } from '../../context';
import './WatchSideBar.css';

function WatchSideBar() {
  const {movie} = useContext(MovieContext);

  return (
    <aside>
      <h2 className='side-title'>{movie.title}</h2>
      <div className='wrapper-img'>
        <img src={movie.posterUrl} alt={movie.title} />
      </div>
    </aside>
  )
}

export default WatchSideBar