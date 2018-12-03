import React from 'react';

const CoverImage = (props) => {
    return <div >
        {props.image}
        <h1>{props.title}</h1>
        <p>{props.text}</p>
    </div>
}

export default CoverImage;