import React from 'react';

const Cards = (props) => {
    const {name, time, img, id} = props.workout;
    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{time}</p>
        </div>
    );
};

export default Cards;