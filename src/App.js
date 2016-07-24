import React, { Component } from 'react';
import './App.css';
import PizzaList from './PizzaList.js';
import PizzaMaker from './PizzaMaker.js';
import NewTopping from './NewTopping.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      pizzas: {},
      toppings: {},
    }
  }

  getPizzas() {
    var that = this;
    var request = new Request('https://pizzaserver.herokuapp.com/pizzas', {
      method: 'GET',
      mode: 'cors',
      headers: new Headers({
        'Content-type': 'application/json'
      })
    });
    fetch(request).then(function(res) {
      res.json().then(function(res) {
        that.setState({pizzas: res});
      });
    });
  }

  getToppings() {
    var that = this;
    var request = new Request('https://pizzaserver.herokuapp.com/toppings', {
      method: "GET",
      mode: 'cors',
      headers: new Headers({
        'Content-type': 'application/json'
      })
    });
    fetch(request).then(function(res) {
      res.json().then(function(res) {
        that.setState({toppings: res});
      });
    });
  }

  componentWillMount() {
    this.getToppings();
    this.getPizzas();
  }

  render() {
    return (
          <div className='main-container'>
            <p>needed components:</p>
            <PizzaList />
            <PizzaMaker />
            <NewTopping />
            <p>List current toppings to add to pizzas</p>
            <p>Add a topping to pizza (probably nested in the list of current toppings)</p>
            <p>Show the current toppings on a pizza</p>
          </div>
    );
  }
}

export default App;
