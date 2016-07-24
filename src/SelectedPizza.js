import React, { Component } from 'react';

class SelectedPizza extends Component {
	render(){
		return (
			<div id="selected-pizza">
				<h6>Selected Pizza Toppings: </h6>
				<p>{this.props.pizza}</p>
			</div>
			);
	}
}

export default SelectedPizza;