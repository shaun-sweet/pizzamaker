import React, { Component } from 'react';
import './App.css';
import PizzaList from './PizzaList';
import CreatePizza from './CreatePizza';
// import NewTopping from './NewTopping';
import AvailToppings from './AvailToppings';
import PizzaStatus from './PizzaStatus';

class App extends Component {

  constructor(){
    super()
    this.state = {
      pizzas: [],
      toppings: []
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
            <PizzaList pizzas={this.state.pizzas}/>
            <div id="status">
              <PizzaStatus />
              <div id="controls">
                <AvailToppings />
                <CreatePizza />
              </div>
            </div>
            
          </div>
    );
  }
}

export default App;
