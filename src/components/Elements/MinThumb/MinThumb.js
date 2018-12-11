import React from 'react';
import './MinThumb.css'

const MinThumb = (props) => {
  return (
    <div className="mdb-minThumb"> 
      <p>Now playing</p>
      <p className="now-playing">{props.title}</p>
    </div>
  )
}

export default MinThumb;