import React, { Component } from 'react';
import Childone from './Childone.js';
import Childtwo from './Childtwo.js';
import Childthree from './Childthree.js';

export default class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "white"
        };
        this.colorChanged = this.colorChanged.bind(this);
    }
    colorChanged(event) {
        this.setState({
            color: event.target.value
        });
    }
    
    render() {
        // <Childone color={this.state.color}  />
        // var a = new Childone({
        //     color: "greden"
        // });
        // a.render();

        return ( <div> 
            <select style = { { margin: 30 } } onClick={this.colorChanged}>
                <option value="white"> White </option>
                <option value="red"> Red </option>
                <option value="red"> Red </option>
                <option value="blue"> Blue </option> 
                <option value="yellow"> Yellow </option>
            </select> 
            <Childone color={this.state.color}  />
             
            <Childtwo color={this.state.color} /> 
            <Childthree color={this.state.color} />

            </div>
        );
    }

}