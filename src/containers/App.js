import React, { Component } from 'react';
import './App.css';
import Persons from "../components/Persons/Persons";
import Validator from "../components/ValidationComponent/ValidationComponent"
import Radium, { StyleRoot} from 'radium'

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 30},
      { id: '2', name: 'Peter', age: 13},
      { id: '3', name: 'Stacie', age: 44},
    ],
    showPersons: false,
    validator: {input: '', output: ''}
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

      const person = {
        ...this.state.persons[personIndex]
      }

      person.name = event.target.value;

      const persons = [...this.state.persons]
      persons[personIndex] = person

      this.setState({ persons: persons })

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  
  textChangedHandler = (event) => {
    const validator = event.target.value
    this.setState({validator: {input: validator}})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '2.5px solid black',
      padding: '8px',
      cursor: 'pointer',
      borderRadius: '70px',
      ':hover': {
        backgroundColor: 'lightGreen',
        color: 'black'
      }
    }

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
          persons = {this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          />
        </div>
      )
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'purple',
          color: 'white'
      }
    }

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    let validatorInput = this.state.validator.input;
    // let validatorOutput = '';

    // if (this.state.validator.input) {
    //   validatorOutput = (
        
    //   )
    // }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a react app!</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <div>
            <input 
            type="text" 
            onKeyUp={(event) => this.textChangedHandler(event)}/>
            <p>{validatorInput}</p>
            <Validator
              input={this.state.validator.input}
            />
          </div>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
