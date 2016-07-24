import React, { Component } from 'react';
import Pizza from './pizza';
import SelectedPizza from './SelectedPizza';

class PizzaList extends Component {
	constructor() {
		super();
		this.state = {
			selectedPizza: ""
		};
	}


	handleSelectedPizza(toppings){
		this.setState({
			selectedPizza: toppings
		});
	}

	render() {
		var _this = this;
		return (
			<div id="pizza-list">
				<h6>Last 6 Pizzas made</h6>
				{this.props.pizzas.map(function(pizza, i){
					return (
						<Pizza onClick={_this.handleSelectedPizza.bind(_this)} key={pizza.id} id={pizza.id} name={pizza.name} toppings={pizza.description} />
						)
				})}
				<SelectedPizza pizza={this.state.selectedPizza} />
			</div>
			);
	}
}

export default PizzaList;