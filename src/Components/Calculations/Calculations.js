import React, { useState } from 'react';
import logo from '../image/profile.jpg'
import './Calculations.css'

const Calculations = (props) => {
    // console.log(props)
    const {times} = props;
   
    // excersize total time added to the side list 
    let workOutTime = 0;
    for (const timee of times){
        // console.log(timee)
        const finalTime = 0 + timee.time;
        // console.log(timee.time)
        // console.log(typeof finalTime);
        workOutTime = finalTime
    }

    const [timeBreak, setTimeBreak] = useState(0)

    // break time added to dom 
    const breakTime = (times) => {
        // console.log(times)
        setTimeBreak(times)

        // break time added to local storage 
        const quantity = localStorage.getItem(times)
        if(quantity){
            const newQuantity = parseInt(quantity) + 1
            localStorage.setItem(times, newQuantity);
        }
        else{
            localStorage.setItem(times,1)
        }
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
                </div>
            </div>
            <div className='excersize-details'>
                <h3>Excersize Details</h3>
                <div className='total-time'>
                    <h3>Excersize Time</h3>
                    <h3> {workOutTime} s</h3>
                </div>
                <div className='total-time'>
                    <h3>Break Time</h3>
                    <h3>{timeBreak} s</h3>
                </div>
                <div>
                </div>
            </div>
            <button className='completed'>Activity Completed</button>
        </div>
    );
};
export default Calculations;