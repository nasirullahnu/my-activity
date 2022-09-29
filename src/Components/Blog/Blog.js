import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <h3><u>Common quesctions for Beginners</u></h3>
            <div className='quesction-container'>
                <p className='que'><strong>How does "React" work?</strong></p>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div className='quesction-container'>
                <p className='que'><strong>Difference Between "Props" & "States"</strong></p>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
            </div>
            <div className='quesction-container'>
                <p className='que'><strong>What else can UseEffect do besides fetch?</strong></p>
                <p>The useEffect Hook allows us to replace repetitive component lifecycle code. Essentially, a Hook is a special function that allows you to “hook into” React features. Hooks are a great solution if you've previously written a functional component and realize that you need to add state to it.</p>
            </div>
        </div>
    );
};

export default Blog;