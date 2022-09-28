import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import './Gym.css'

const Gym = () => {
    const [workouts, setWorkouts] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWorkouts(data))
    }, [])

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
                        ></Cards>)
                    }
                </div>
            </div>
            <div className="time-container">
                <h3>This is for time calculation</h3>
            </div>
        </div>
    );
};

export default Gym;