import React, { Component } from 'react';


export default class Childthree extends Component{
	constructor(props) {
		super(props);

		this.state = {
			color: this.props.color
		};
	}


	componentWillReceiveProps(nextProps) {
		var nextColor = nextProps.color;

		this.setState({
			color: nextColor
		});

		setTimeout(() => {
			this.setState({
				color: "black"
			});
		}, 3000);
	}


    render() {
        return (
        	<div style={{backgroundColor: this.state.color}}>
         		<p> third child</p>
        	</div>
    	);
    }

}