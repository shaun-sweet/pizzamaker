import React, { Component } from 'react';

class Topping extends Component {
	render(){
		return(
			<div onClick={()=>this.props.handleToppingClick(this.props.info)} id={"topping#" + this.props.info.id} className="toppings">
				<a href={"#"+this.props.info.name}>{this.props.info.name}</a>
			</div>
			);
	}
}

export default Topping;