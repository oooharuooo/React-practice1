import React, { Component } from 'react';
import "./ColorBox.css"
class ColorBox extends Component {
    render() {
        return (
            <div >
                <button 
                    onClick={this.props.ran} 
                    className="ColorBox" 
                    style={{backgroundColor: this.props.color}}> 
                </button>
            </div>
        );
    }
}

export default ColorBox;