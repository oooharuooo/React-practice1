import React, { Component } from 'react';
import Pokecard from './Pokecard';
import "../css/Pokedex.css"

class Pokedex extends Component {
    render() {
        return (
            <div className="Pokedex">
                <h1>Pokedex</h1>
                <p>Your total scrore is: {this.props.exp}</p>
                <p>{this.props.isWinner ? "You win" : "You lose"}</p>
                <div className="Pokedex-Card">
                    {this.props.pokemon.map(p => (
                        <div>
                            <Pokecard 
                                id={p.id} 
                                name={p.name} 
                                type={p.type} 
                                exp={p.base_experience} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Pokedex;