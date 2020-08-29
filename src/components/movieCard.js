/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function movieCard({ movie }) {
  const [button, setButton] = useState('gray');

  const buttonChange = (e) => {
    if(button === 'gray') setButton('#FE938C'); 
    if(button === '#FE938C') setButton('gray');
  }

  return (
    
    <div className="card" key={movie.id}>
      <FontAwesomeIcon className='like-icon' icon={faHeart} style={{color: button}} onClick={buttonChange} />

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
  );
}


