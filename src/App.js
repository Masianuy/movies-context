import React, { useState } from 'react';
import './App.css';
import WatchHeader from './components/WatchHeader/WatchHeader';
import WatchMain from './components/WatchMain/WatchMain';
import WatchSideBar from './components/WatchSideBar/WatchSideBar';
import { MovieContext } from './context';
import Data from './data.json';

function App() {

  const [movie, deployMovie] = useState(Data[0]);

  const selectMovie = (item) => {
    deployMovie(item);
  }
  
  return (
    <div className='user-card'>
      <MovieContext.Provider value={{
        movies: Data,
        selectMovie: selectMovie,
        movie: movie,
        }}>
        <WatchHeader />
        <WatchSideBar />
        <WatchMain />
      </MovieContext.Provider>
    </div>
  );
}

export default App;
