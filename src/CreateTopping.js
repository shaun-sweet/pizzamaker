import React, { Component } from 'react';

class CreateTopping extends Component {
	render(){
		if (this.props.makingTopping) {
			return (
			<div id="toppings">
				<div id="create-topping">
					<button onClick={this.props.finalize}>Finalize Topping</button><br />
					<label htmlFor="topping-name">Name of your topping: </label>
					<input 
					onChange={this.props.changeToppingName} 
					value={this.props.toppingName}
					placeholder="ex. beer battered steak " 
					id="topping-name" 
					name="topping-name" 
					type="text" 
				/>
				</div>
			</div>
			)
		}else{
			return (
			<div id="toppings">
				<div id="create-topping">
					<button onClick={this.props.startMakingTopping}>Create topping</button>
				</div>
			</div>
			);
		}

		
	}
}

export default CreateTopping;