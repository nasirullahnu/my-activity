import React from 'react';
import './Cards.css'

const Cards = (props) => {
    const { name, time, img, id, details } = props.workout;
    return (
        <div className='card'>
            <img src={img} alt="" />
            <div className='card-info'>
                <h2>{name}</h2>
                <p>{details}</p>
                <p>Time : <strong>{time}</strong> s</p>
            </div>
            <button className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Cards;