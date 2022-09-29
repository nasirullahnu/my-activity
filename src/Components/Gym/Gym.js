import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import './Gym.css'
import Calculations from '../Calculations/Calculations';

const Gym = () => {
    const [workouts, setWorkouts] = useState([])
    

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWorkouts(data))
    }, [])

    const [time, setTime] = useState([[]])

    const handleToAddTime = (times) => {
        // console.log(times)
        const newTime = [...time, times]
        setTime(newTime);
        // console.log(time)
    }

    return (
        <div className='activities-container'>
            <div className="activities-card-container">
                <h1>my-activity</h1>
                <h2>Workouts for Toay</h2>
                <div className='card-container'>
                    {
                        workouts.map(workout => <Cards
                            workout={workout}
                            key={workout.id}
                            handleToAddTime={handleToAddTime}
                        ></Cards>)
                    }
                </div>
            </div>
            <div className="time-container">
                <Calculations times={time}></Calculations>
            </div>
        </div>
    );
};

export default Gym;