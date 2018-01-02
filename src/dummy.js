import React, { Component } from 'react';



class Dummy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myowncolor: "pink"
        };
    }
    componentWillReceiveProps(nextProps) {
        console.log("current props",this.props);
        console.log("updated props",nextProps);
    }
    shouldComponentUpdate(nextProps, nextState){
         if(nextProps.colors === this.props.colors){
           return false;
        }
        if(nextState.myowncolor === this.state.myowncolor){
           return false;
        }
        return true;
    }
    componentWillUpdate(){
            console.log("going to update..");
    }
     componentDidUpdate(prevProps, prevState){
             console.log("current props",this.props);
             console.log("prev props",prevProps);
    }
    render() {
        console.log(this.state.myowncolor);
        return ( <p  onClick={()=>{ this.props.updateColor(); this.setState({myowncolor:"orange"})}}> {this.props.colors} </p>);
    }
}



export default Dummy;