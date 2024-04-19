import React from 'react';

function RevCards(props) {
    return (
        <div className={props.revCardClass}>
            <div className={props.revData}>
                <div className="user">
                    <img src={props.userLogo} alt="" />
                    <div className="userData">
                        <h3>{props.userName}</h3>
                        <p className='revDate'>{props.revDate}</p>
                    </div>
                </div>
                <div className="revStars">
                    <div className="stars"><img src={props.stars} alt="" /></div>
                    <div className="starRating"><p>{props.starRating}</p></div>
                </div>
            </div>
            <div className="rev-content">
                <p>{props.review}</p>
            </div>
        </div>
    )
}

export default RevCards;