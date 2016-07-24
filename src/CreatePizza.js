import React, { Component } from 'react';

class CreatePizza extends Component {

	render() {
		return (

			<div id="pizza-maker">
				<button onClick={()=> this.props.handleStartMakingPizza()
				}>New Pizza!</button>
			</div>
			);
	}
}

export default CreatePizza;