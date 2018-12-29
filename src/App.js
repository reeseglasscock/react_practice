import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 30},
      { name: 'Peter', age: 13},
      { name: 'Stacie', age: 44},
    ],
    showPersons: false
  }

  switchNameHandler = () => {
    // console.log(`I just go clicked!`)
    this.setState({
      persons: [
        { name: 'Max', age: 10000 },
        { name: 'Peter', age: 13 },
        { name: 'Stacie', age: 44 },
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 30 },
        { name: event.target.value, age: 13 },
        { name: 'Stacie', age: 44 },
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Switch Name</button>
        <h1>Hi, I'm a react app!</h1>
        { this.state.showPersons === true ? 
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler}
            changed={this.nameChangeHandler} />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div> : null
        }
        
      </div>
    );
  }
}

export default App;
