import React, { Component } from 'react'
import './Box.css'
import {choice} from './Helpers'

class Box extends Component {

    constructor(props) {
        super(props);
        this.state= {
           color: choice(this.props.colours)
        }
        this.clickHandler=this.clickHandler.bind(this);
    };

    generateColor() {

        let newColor;
        do{
            newColor=choice(this.props.colours);
        }while(this.state.color===newColor)
        this.setState({color: newColor});

    }

    clickHandler() {
        this.generateColor();
    }

    render() {
        return (
            <div>
                <div className="box" 
                style={{backgroundColor: this.state.color}}
                onClick={this.clickHandler}
                >

                </div>
                
            </div>
        )
    }
}

export default Box;