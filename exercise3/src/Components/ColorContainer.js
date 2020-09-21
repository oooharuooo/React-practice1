import React, { Component } from 'react';
import ColorBox from './ColorBox';
import "./ColorContainer.css"

class ColorContainer extends Component {
    static defaultProps = {
        colorList: [  
            "AliceBlue",
            "AntiqueWhite",
            "Aqua",
            "Aquamarine",
            "Azure",
            "Beige",
            "Bisque",
            "Black",
            "BlanchedAlmond",
            "Blue",
            "BlueViolet",
            "Brown",
            "BurlyWood",
            "CadetBlue",
            "Chartreuse",
            "Chocolate",
        ]}

   

    randomColor = () => {
        const random = Math.floor(Math.random() * this.props.colorList.length);
        return this.props.colorList[random]
    }

    ran = () => {
        console.log('hi')
    }

    render() {
        return (
            <div className="ColorContainer">
                {this.props.colorList.map((cl => 
                    <ColorBox onClick={this.ran} color={this.randomColor()} />
                ))}
            </div>
        );
    }
}

export default ColorContainer;