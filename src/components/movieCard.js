/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faVoteYea } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function movieCard({ movie }) {
  const [like, setLike] = useState('gray');
  const [vote, setVote] = useState('gray');
  const [liked, setLiked] = useState([]);

  const likeChange = (e) => {
    if (like === 'gray') {
      setLike('#FE938C');
      // localStorage.setItem(`${movie.name}`, movie.name);
      // console.log('localStorage', localStorage);
      // console.log('---', localStorage.getItem(movie.name));

      setLiked(...liked, movie.name);
    }
    if (like === '#FE938C') {
      setLike('gray');
      // localStorage.removeItem(movie.name);
      // console.log('localStorage', localStorage);
    }
  };

  const voteChange = (e) => {
    if (vote === 'gray') setVote('#38618C');
    if (vote === '#38618C') setVote('gray');
  };

  return (
    <div>
      <div className="card" key={movie.id}>
        <FontAwesomeIcon
          className="like-icon"
          icon={faHeart}
          style={{ color: like }}
          onClick={likeChange}
        />
        <FontAwesomeIcon
          className="vote-icon"
          icon={faVoteYea}
          style={{ color: vote }}
          onClick={voteChange}
        />
        <img
          className="card--image"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title + ' poster'}
        />
        <div className="cart--content">
          <h3 className="card--title">{movie.title}</h3>
          <p>
            <small>RELEASE DATE: {movie.release_date}</small>
          </p>
          <p>
            <small>RATING: {movie.vote_average}</small>
          </p>
          <p className="card-desc">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
