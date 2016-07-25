import React, { Component } from 'react';
import './css/App.css';
import PizzaList from './PizzaList';
import CreatePizza from './CreatePizza';
import ToppingList from './ToppingList';
import StatusInput from './StatusInput';
import CreateTopping from './CreateTopping';

class App extends Component {

  constructor(){
    super()
    this.state = {
      pizzas: [],
      toppings: [],
      makingPizza: false,
      makingTopping: false,
      currentPizza: {
        name: "",
        toppings: []
      },
      topping: {
        name: ""
      }
    }
  }

  handlePizzaName(event){
    var currentPizza = this.state.currentPizza
    currentPizza.name = event.target.value
    this.setState({
      currentPizza: currentPizza
    });
  }

  handleReset(){
    this.setState({currentPizza: {
      name: "",
      toppings: []
    }});
  }

  handleToppingClick(topping) {
    var currentPizza = this.state.currentPizza
    currentPizza.toppings.push(topping)
    this.setState({
      currentPizza: currentPizza
    });
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
        that.setState({pizzas: res.slice(res.length-6, res.length)});
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
    $('h1')[0].scrollIntoView();
  }


  componentWillMount() {
    this.getToppings();
    this.getPizzas();
  }

  handleSendToFire(){
    var request = new Request('https://pizzaserver.herokuapp.com/pizzas', {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }),
      body: this._packagePizza()
    });
    fetch(request)
    this.getPizzas();
  }

  handleMakeTopping(){
    this.setState({
      makingTopping: true
    })
  }

  sendToppingAway(){
    var request = new Request('https://pizzaserver.herokuapp.com/toppings', {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }),
      body: this._packageTopping()
    });
    fetch(request);
    this.getToppings();
    this.setState({makingTopping: false})
  }

  handleToppingName(event) {
    this.setState({
      topping: {
        name: event.target.value
      }
    })
  }

  render() {
    return (
      <div className='main-container'>
        <PizzaList pizzas={this.state.pizzas}/>
        <div id="middle">
          <ToppingList toppingList={this.state.toppings} handleToppingClick={this.handleToppingClick.bind(this)} />
          <div id="controls">
            <CreateTopping 
            startMakingTopping={this.handleMakeTopping.bind(this)}
            makingTopping={this.state.makingTopping}
            toppingName={this.state.topping.name}
            changeToppingName={this.handleToppingName.bind(this)}
            finalize={this.sendToppingAway.bind(this)}
             />
              <CreatePizza  
              handleStartMakingPizza={this.startMakingPizza.bind(this)}
              />  
          </div>
        </div>
        <StatusInput 
        createPizza={this.handleSendToFire.bind(this)}
        pizzaName={this.state.currentPizza.name}
        updateName={this.handlePizzaName.bind(this)}
        reset={this.handleReset.bind(this)}
        makingPizza={this.state.makingPizza}
        currentPizza={this.state.currentPizza}
        />
        
      </div>
    );
  }

  _packageTopping(){
    return JSON.stringify({
      topping: this.state.topping
    });

  }

  _packagePizza() {
    var toppings = "";
    for(var i = 0; i < this.state.currentPizza.toppings.length; i++){
      toppings += this.state.currentPizza.toppings[i].name
      toppings += ", "
    }
    return JSON.stringify({
      "pizza": {
        "name": this.state.currentPizza.name,
        "description": toppings.substring(0, toppings.length-2)
        }
    });
  }

}

export default App;
