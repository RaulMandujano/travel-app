import React from 'react';
import "../components/OneCard.css"

const OneCard = ({src, title})=> {
    return(
        <div className="onecard">
            <img src={src} alt={title} />
            <div className="onecard__info">
                <span>Your World is</span>
                <span>Worth Sharing</span>
                <p>Turn your extra space into your next opportunity.</p>
                <button>Become a Host</button>
            </div>
        </div>
    )
}

export default OneCard;