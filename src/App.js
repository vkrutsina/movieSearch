import React from 'react';
import './App.css';
import SearchMovies from './components/searchMovies';
import LikedMovies from './components/likedMovies';
import VotedMovies from './components/votedMovies';

function App() {
  return (
    <>
      <div className="selected-movies-container">
        <div className="liked-movies">
          <LikedMovies />
        </div>
        <div class="voted-movies">
          <VotedMovies />
        </div>
      </div>
      <div className="container">
        <h1 className="title">Movie Search</h1>
        <SearchMovies />
      </div>
    </>
  );
}

export default App;
