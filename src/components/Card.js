import React from 'react';
import '../components/Card.css'
import { useNavigate } from 'react-router-dom';

const Card = ({ src, title, description }) => {
    const navigate = useNavigate()
    return (
        <div className="card" onClick={() => navigate(`/explore?type=${title}`)}>
            <img src={src} alt={title} />
            <div className="card__info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>

    )
}

export default Card;