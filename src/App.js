import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <Person name="Peter" age="30"/>
        <Person name="Max" age="15">I am amazing and have some awesome hobbies like: </Person>
        <Person name="Stephanie" age="22"/>
      </div>
    );
  }
}

export default App;
