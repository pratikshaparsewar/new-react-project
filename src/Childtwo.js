import React, { Component } from 'react';


export default class Childtwo extends Component{
    constructor(props){
        super(props)
        this.state = {
            color: "white"
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
     if( this.props.color == nextProps.color) {
         setTimeout(()=>{ this.setState({
             color:"green"
         }); }, 1000);
         return true;
     }
       else {
           return false;
       }
    }
    render(){
        
        return (
            <div style = {{backgroundColor: this.state.color}}>
                <p>Second child </p>
            </div>
        );
    }

}