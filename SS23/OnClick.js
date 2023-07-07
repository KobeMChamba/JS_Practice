import React from 'react';

import './styles.css';
// don't change the Component name "App"
export default function App() {
    //function clickHandler(){...}
    const clickHandler = () => {
        console.log('Stored!')
    }
    return <button onClick={clickHandler}>Bookmark</button>;
}

/* 
body {
    font-family: sans-serif;
    margin: 0;
    padding: 3rem;
    background-color: #2d2c2c;
    color: #959090;
}
*/