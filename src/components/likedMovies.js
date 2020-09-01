import React from 'react';

export default function likedMovies({ liked }) {
  return (
    <div className="liked-container ">
      <p className="liked-movies-title">Liked Movies</p>
      <div className="liked-list">
        <ul>
          {liked.map((idx) => (
            <li className="each-liked-movie" key={idx}>
              {idx}
              {/* <span className="remove">❌</span> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
