import React, { Component } from 'react';
import "../css/Pokecard.css"

class Pokecard extends Component { 
    render() {
        const pokeAPI = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;
        let ThreeDegit = (num) => (num <= 999 ? `00${num}`.slice(-3): num);
        const imgSrc = `${pokeAPI}${ThreeDegit(this.props.id)}.png`

        return (
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
                <img src = {imgSrc} />
                <div>Type: {this.props.type}</div>
                <div>Exp: {this.props.exp}</div>
            </div>
        );
    }
}

export default Pokecard;