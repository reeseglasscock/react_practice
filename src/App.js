import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 30},
      { name: 'Peter', age: 13},
      { name: 'Stacie', age: 44},
    ]
  }

  switchNameHandler = () => {
    // console.log(`I just go clicked!`)
    this.setState({
      persons: [
        { name: 'Chocolate Lab Brownies', age: 10000 },
        { name: 'Peter', age: 13 },
        { name: 'Stacie', age: 44 },
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <h1>Hi, I'm a react app!</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
