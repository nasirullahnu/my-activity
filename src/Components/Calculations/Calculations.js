import React from 'react';
import logo from '../image/profile.jpg'
import './Calculations.css'

const Calculations = () => {
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
                <dvi className="times">
                    <a href="">10s</a>
                    <a href="">20s</a>
                    <a href="">30s</a>
                    <a href="">40s</a>
                    <a href="">50s</a>
                </dvi>
            </div>
            <div className='excersize-details'>
                <h3>Excersize Details</h3>
                <div className='total-time'>
                    <h3>Excersize Time</h3>
                    <h3>0 s</h3>
                </div>
                <div className='total-time'>
                    <h3>Break Time</h3>
                    <h3>0 s</h3>
                </div>
                <div>

                </div>
            </div>
            <button className='completed'>Activity Completed</button>
        </div>
    );
};

export default Calculations;