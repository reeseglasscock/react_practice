import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  constructor(props) {
    super(props)
    console.log('Inside Persons.js Contructor', props)
  }

  componentWillMount() {
    console.log('Persons.js inside of componenetWillMount()')
  }

  componentDidMount() {
    console.log('Persons.js inside of componentDidMount()')
  }

  componentWillReceiveProps(nextProps) {
    console.log('Update Persons.js Inside of componentWillRecieveProps')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Update Persons.js Inside of shouldComponentUpdate')
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Update Persons.js Inside of componentWillUpdate')
  }

  render (){
    console.log('Persons.js inside render')
    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)} />
    })
  }

}


export default Persons;