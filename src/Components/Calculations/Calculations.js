import React, { useState } from 'react';
import logo from '../image/profile.jpg'
import './Calculations.css'

const Calculations = (props) => {
    const {times} = props;
    let workTime = 0;
    for(const time of times){
        // console.log(time.time);
        const totalTime = workTime + time.time;
        // console.log(totalTime)
        workTime = parseFloat(totalTime);
        // console.log(workTime)
    }

    const [timeBreak, setTimeBreak] = useState(0)

    const breakTime = (times) => {
        console.log(times)
        const breakPlace = document.getElementById('break-place')
        const breakValue = parseInt(breakPlace.innerText)
        const totalBreak = breakValue + times;
        console.log(totalBreak);
        breakPlace.innerText = totalBreak;

        // setTimeBreak(totalBreak);
        
        // breakPlace.innerText = '';
        // breakPlace.innerText = totalBreak;
        // console.log(totalBreak);
    }
    

    return (
        <div>
            <div className='profile'>
                <img src={logo} alt="" />
                <div>
                    <h4>Nasir Ullah</h4>
                    <p>Comilla, Bangladesh</p>
                </div>
            </div>
            <div className='profile-info'>
                <div>
                    <h3>70<small>kg</small></h3>
                    <h4>weight</h4>
                </div>
                <div>
                    <h3>5.9</h3>
                    <h4>height</h4>
                </div>
                <div>
                    <h3>22<small>yr</small></h3>
                    <h4>age</h4>
                </div>
            </div>
            <div className="break">
                <h3>Add a Break</h3>
                <div className="times">
                    <button onClick={()=>breakTime(10)}>10</button>
                    <button onClick={()=>breakTime(20)}>20</button>
                    <button onClick={()=>breakTime(30)}>30</button>
                    <button onClick={()=>breakTime(40)}>40</button>
                    <button onClick={()=>breakTime(50)}>50</button>
                </div>
            </div>
            <div className='excersize-details'>
                <h3>Excersize Details</h3>
                <div className='total-time'>
                    <h3>Excersize Time</h3>
                    <h3>{workTime}s</h3>
                </div>
                <div className='total-time'>
                    <h3>Break Time</h3>
                    <h3 id='break-place'> 0</h3>
                </div>
                <div>

                </div>
            </div>
            <button className='completed'>Activity Completed</button>
        </div>
    );
};

export default Calculations;