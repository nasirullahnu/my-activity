import React from 'react';
import './Cards.css'


// excersize cards 
const Cards = (props) => {
    const {handleToAddTime, workout} = props
    console.log(props);
    const { name, time, img, details, age } = props.workout;
    return (
        <div className='card'>
            <img src={img} alt="" />
            <div className='card-info'>
                <h2>{name}</h2>
                <p>{details}</p>
                <p>For Age: <strong>{age}</strong> yrs</p>
                <p>Time : <strong>{time}</strong>s</p>
            </div>
            <button onClick={() => handleToAddTime(workout)} className='btn-cart'>Add time</button>
        </div>
    );
};

export default Cards;