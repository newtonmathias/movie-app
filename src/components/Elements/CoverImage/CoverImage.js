import React from 'react';

const CoverImage = (props) => {
    return <div >
        <img src={props.image} alt="movie"/>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
    </div>
}

export default CoverImage;