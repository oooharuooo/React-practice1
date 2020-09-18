import React, { Component } from 'react';
import "./Dice.css"

class Dice extends Component {
    render() {
        return (
                <i className={`Dice fas fa-dice-${this.props.diceNumber} ${this.props.shakingDiced && "shaking"}`} />
        );
    }
}

export default Dice