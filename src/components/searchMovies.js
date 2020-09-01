/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import MovieCard from './movieCard';

export default function searchMovies(props) {
  const [query, setQuery] = useState('');

  const [movies, setMovies] = useState([]);

  const [isBottom, setIsBottom] = useState(false);

  const [page, setPage] = useState(2);

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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
      setIsBottom(true);
    }
  }

  useEffect(() => {
    if (isBottom) {
      addMore();
      setIsBottom(false);
    }
  }, [isBottom]);

  const addMore = async () => {
    setIsBottom(false);
    console.log('pageADDMORE', page);
    const key = process.env.REACT_APP_TMDB_API_KEY;

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=${page}&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      let hi = movies.concat(data.results);
      setMovies(hi);
      setPage(page + 1);
    } catch (error) {
      console.error(error);
    }
  };

  const changeLikedMovies = (title) => {
    props.changeLiked(title);
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
          placeholder="search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="list-container">
        <div className="card-list">
          {movies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
              changeLikedMovies={changeLikedMovies}
            />
          ))}
          <div className="inf-message">
            {isBottom && 'Loading More Movies...'}
          </div>
        </div>
      </div>
    </>
  );
}
