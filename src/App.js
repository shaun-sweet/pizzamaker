import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      toppings: {}
    }
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
        that.setState({'toppings': res});
      });
    })
  }

  componentDidMount() {
    this.getToppings();
  }
  render() {
    return (
          <p>To get started, edit <code>src/App.js</code> and save to reload.
          Let's try this out.</p>
    );
  }
}

export default App;
