import React, { Component } from 'react';

class Pizza extends Component {

	render(){
		return (
			<div id={"pizza"+this.props.id} key={this.props.id}>
				<a href="#" onClick={()=> this.props.onClick(this.props.toppings)} data-toggle="modal" data-target="#pizzaModal">{this.props.name}</a>
			</div>
			);
	}
}

export default Pizza;