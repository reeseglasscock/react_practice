import React, { Component } from 'react';
import './App.css';
import Persons from "../components/Persons/Persons";
import Radium, { StyleRoot} from 'radium'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('Inside App.js Contructor', props)
    this.state = {
      persons: [
        { id: '1', name: 'Max', age: 30 },
        { id: '2', name: 'Peter', age: 13 },
        { id: '3', name: 'Stacie', age: 44 },
      ],
      showPersons: false,
      validator: { input: '', output: '' }
    }
  }

  componentWillMount() {
    console.log('App.js inside of componenetWillMount()')
  }

  componentDidMount() {
    console.log('App.js insdie of componentDidMount()')
  }

  deletePersonHandler = (personIndex) => {
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
    console.log('App.js inside of render')

    let persons = null

    if (this.state.showPersons) {
      persons = 
        <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}
        />
    }

    return (
      <StyleRoot>
        <Cockpit
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        validator={this.state.validator}
        clicked={this.togglePersonsHandler}>
        </Cockpit>
        {persons}
      </StyleRoot>
    );
  }
}

export default Radium(App);
