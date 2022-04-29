import React from 'react';
import '../components/Card.css'

const Card = ({src, title, description}) => {
    return(
        <div className="card">
            <img src={src} alt={title} />
            <div className="card__info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>

    )
}

export default Card;