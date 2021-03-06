import React, { Component } from 'react';
import Topping from './Topping';

class ToppingList extends Component {

	

	render() {
		var _this = this;
		return(
			<div id='display'>

				<h2 style={{width: 100+"%"}}>Topping List </h2>
				<h6 style={{width: 100+"%"}}>Click toppings to add them to your pizza </h6>
				{this.props.toppingList.map(function(topping, i){
					return (
							<Topping handleToppingClick={_this.props.handleToppingClick} info={topping} key={topping.id} />
						);
					})
				}
			</div>
			);
	}

}

export default ToppingList;