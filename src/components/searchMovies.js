import React from 'react';

export default function searchMovies() {
  const searchMovies = async (e) => {
    e.preventDefault();

    const key = process.env.REACT_APP_TMDB_API_KEY;

    let query = 'Jurassic';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="form" onSubmit={searchMovies}>
      <label htmlFor="query" className="label">
        Movie Name
      </label>
      <input
        type="text"
        className="input"
        name="query"
        placeholder="search here"
      ></input>
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
