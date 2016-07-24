import React, { Component } from 'react';
import Topping from './Topping';

class PizzaStatus extends Component {

	handleToppingClick(){
		console.log("sup");
	}

	render() {
		return(
			<div id='display'>
			<h2 style={{width: 100+"%"}}>Topping List </h2>
			{this.props.toppingList.map(function(topping, i){
				return (
						<Topping info={topping} key={topping.id} />
					);
			})
				
			}
			</div>
			);
	}

}

export default PizzaStatus;