import React from 'react';

export default function votedMovies({ voted }) {
  return (
    <div>
      <p className="voted-movies-title">Voted Movies</p>
      <div className="voted-list">
        <ul>
          {voted.map((idx) => (
            <li className="each-liked-movie" key={idx}>
              {idx}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
