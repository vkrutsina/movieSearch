/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faVoteYea } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function movieCard({
  movie,
  changeLikedMovies,
  changeVotedMovies,
}) {
  const [like, setLike] = useState('gray');
  const [vote, setVote] = useState('gray');

  const likeChange = (e) => {
    e.preventDefault();

    if (like === 'gray') {
      setLike('#FE938C');
      changeLikedMovies(movie.title);
    }
    if (like === '#FE938C') {
      setLike('gray');
    }
  };

  const voteChange = (e) => {
    e.preventDefault();
    if (vote === 'gray') {
      setVote('#7AC74F');
      changeVotedMovies(movie.title);
    }
    if (vote === '#7AC74F') setVote('gray');
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
