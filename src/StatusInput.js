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
				<input 
					onChange={this.props.updateName} 
					value={this.props.pizzaName}
					placeholder="Shaun's Pizza" 
					id="pizza-name" 
					name="pizza-name" 
					type="text" 
				/>
				<ul id="current-toppings">
					{this.props.currentPizza.toppings.map(function(topping, i){
						return (
							<li key={topping.id} id={topping.id} name={topping.name}>{topping.name}</li>
							)
					})}
				</ul>
				<button onClick={this.props.createPizza}>Send it to the fire!</button>
				<button onClick={this.props.reset}>Reset Toppings</button>
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