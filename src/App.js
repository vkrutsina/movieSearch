import React, { useState } from 'react';
import './App.css';
import SearchMovies from './components/searchMovies';
import LikedMovies from './components/likedMovies';
import VotedMovies from './components/votedMovies';

function App() {
  const [liked, setLiked] = useState([]);

  const changeLiked = (title) => {
    setLiked((prevState) => [...prevState, title]);
  };

  return (
    <>
      <div className="selected-movies-container">
        <div className="liked-movies">
          <LikedMovies liked={liked} />
        </div>
        <div className="voted-movies">
          <VotedMovies />
        </div>
      </div>
      <div className="container">
        <h1 className="title">Movie Search</h1>
        <SearchMovies changeLiked={changeLiked} />
      </div>
    </>
  );
}

export default App;
