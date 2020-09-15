import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p>Hi,My name is {props.name} </p>
            <p>I'm years {props.age} old</p>
        </div>
    );
}

export default UserOutput;