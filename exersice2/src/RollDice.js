import React,{ Component } from 'react';
import Dice from './Dice';
import "./RollDice.css"

class RollDice extends Component {
    static defaultProps = {
        number: ["one", "two", "three", "four", "five", "six"],
    }

    state = { dice1 : "one", dice2: "one", isRolling: false}

    rollNumberHandler = () => {
       let n = this.props.number[Math.floor(Math.random() * this.props.number.length)];
       let n2 = this.props.number[Math.floor(Math.random() * this.props.number.length)];
        this.setState({ dice1: n, dice2: n2, isRolling: true});
        
        setTimeout(() => {
            this.setState({ isRolling: false})
        },1000)
    }

    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Dice diceNumber={this.state.dice1} shakingDiced={this.state.isRolling} />
                    <Dice diceNumber={this.state.dice2} shakingDiced={this.state.isRolling} />
                </div>    
                <button onClick={this.rollNumberHandler} disabled={this.state.isRolling}>
                    {this.state.isRolling ? "Rolling..." : "Click to Roll"}
                </button>
            </div>
        );
    }
}

export default RollDice;