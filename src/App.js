import React, { Component } from 'react';
import './App.css';
import PizzaList from './PizzaList';
import CreatePizza from './CreatePizza';
// import NewTopping from './NewTopping';
import Toppings from './Toppings';
import PizzaStatus from './PizzaStatus';
import StatusInput from './StatusInput';

class App extends Component {

  constructor(){
    super()
    this.state = {
      pizzas: [],
      toppings: [],
      makingPizza: false,
      currentPizza: {}
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
        that.setState({pizzas: res.slice(-7, -1)});
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

  startMakingPizza() {
    this.setState({makingPizza: true});
    $('#pizza-maker').toggle();

  }

  componentWillMount() {
    this.getToppings();
    this.getPizzas();
  }

  render() {
    return (
          <div className='main-container'>
            <PizzaList pizzas={this.state.pizzas}/>
            <div id="middle">
              <PizzaStatus toppingList={this.state.toppings} />
              <div id="controls">
                <Toppings />
                  <CreatePizza  
                  handleStartMakingPizza={this.startMakingPizza.bind(this)} 
                  />  
              </div>
            </div>
            <StatusInput 
            makingPizza={this.state.makingPizza}
            />
            
          </div>
    );
  }
}

export default App;
