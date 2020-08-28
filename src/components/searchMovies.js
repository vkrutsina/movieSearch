import React from 'react';

export default function searchMovies() {
  return (
    <form className="form">
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
