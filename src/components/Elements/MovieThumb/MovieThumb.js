import React from 'react';
import './MovieThumb.css';

const MovieThumb = (props) => {
  return (
    <div className="moviethumb"> 
      <img src={props.image} alt="movie"/>
    </div>
  )
}

export default MovieThumb;