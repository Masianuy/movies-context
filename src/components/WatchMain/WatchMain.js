import React, { useContext, useState } from 'react';
import { MovieContext } from '../../context';
import './WatchMain.css';

function WatchMain() {

  const {movies, selectMovie} = useContext(MovieContext);

  const [isMovie, setMovie] = useState(movies[0]);

  const getMovie = (item) => {
    setMovie(item);
    selectMovie(isMovie);
  }
  return (
    <main>
      <ul className='list-films'> 
        {movies.map(item => {
          return <li className='item-film' key={item.id} onClick={() => getMovie(item)}>
            <span>{item.title}</span> {item.director}</li>
        } )}
      </ul>
    </main>
  )
}

export default WatchMain