import React, { Component } from 'react';

class PizzaList extends Component {
	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div id="pizza-list">
				<p>This is a Pizza List {this.props.pizzas.map(function(pizza, i){
					
				})} </p>

			</div>
			);
	}
}

export default PizzaList;