import React, { Component } from 'react';


export default class Childone extends Component{
 
  shouldComponentUpdate(nextProps, nextState) {
    // You can access `this.props` and `this.state` here
    // This function should return a boolean, whether the component should re-render.
    if (this.props.color == nextProps.color) {
      return false;
    } else {
      return true;
    }
  }

  render(){
    console.log("re-render");    
    return (
      <div style={{backgroundColor: this.props.color}}>
        <p> First child </p>
      </div>
    )
  }

}