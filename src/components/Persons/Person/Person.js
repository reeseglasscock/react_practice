import React, { Component } from 'react'
import Radium from 'radium'
import styles from './Person.module.css'

class Person extends Component {
  constructor(props) {
    super(props)
    console.log('Inside Person.js Contructor', props)
  }

  componentWillMount() {
    console.log('Person.js inside of componenetWillMount()')
  }

  componentDidMount() {
    console.log('Person.js insdie of componentDidMount()')
  }
  render() {
    console.log('Person.js inside render')
    const style = {
      '@media (min-width: 500px)' : {
        width: '450px'
      }
    }
    return (
      <div className={[styles.red, styles.person].join(' ')} style={style}>
        <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
        {renderChildren(this.props.children)}
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
    )
  }
}

const renderChildren = (children) => {
  if (children) {
    return <p>{children}</p>
  }
}

export default Radium(Person);