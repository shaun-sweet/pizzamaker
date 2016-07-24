import React, { Component } from 'react';
import ShowTopping from './ShowTopping';
import CreateTopping from './CreateTopping';
import AddTopping from './AddTopping';

class Toppings extends Component {

	render() {
		return(
			<div id="toppings">
				<CreateTopping />
			</div>
			);
	}

}

export default Toppings;