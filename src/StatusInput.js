import React, { Component } from 'react';

class StatusInput extends Component {

	noPizzaBeingMade() {
		return (
			<div id="status-input">
				<p>I'm ready to make pizza already...</p>
			</div>
			);
		}
	

	getNameOfPizza(){
		return (
			<div id="status-input">
				<label htmlFor="pizza-name">Name of your pizza: </label>
				<input placeholder="Shaun's Pizza" id="pizza-name" name="pizza-name" type="text" />
				<ul id="current-toppings">
				</ul>
				<button>Send it to the fire!</button>
			</div>
			);
	}

	render() {
		if (this.props.makingPizza === false) {
			return this.noPizzaBeingMade();
		}else{
			return this.getNameOfPizza();
		}
	}
}

export default StatusInput;