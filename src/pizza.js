import React, { Component } from 'react';

class Pizza extends Component {

	render(){
		return (
			<div id={"pizza"+this.props.id} key={this.props.id}>
				<a href="#" onClick={()=> this.props.onClick(this.props.toppings)}>{this.props.name}</a>
			</div>
			);
	}
}

export default Pizza;