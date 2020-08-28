/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import MovieCard from './movieCard';

export default function searchMovies() {
  const [query, setQuery] = useState('');

  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const key = process.env.REACT_APP_TMDB_API_KEY;

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          type="text"
          className="input"
          name="query"
          placeholder="search here"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}
