import React from 'react';

import "./Person.css"

const person = (props) => {
    return (
         <div className= "Person">
            <h1 onClick={props.click}>Hi, I'm {props.name}, I'm {props.age} years old.{props.children}</h1>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
     )
}

export default person;