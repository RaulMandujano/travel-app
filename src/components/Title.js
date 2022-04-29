import React from 'react';
import '../components/Title.css';

const Title = ({title, description})=> {
    return(
        <div className="title">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Title;