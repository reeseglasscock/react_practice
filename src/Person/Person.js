import React from 'react'
import Radium from 'radium'
import styles from './Person.module.css'

const person = (props) => {
  const style = {
    '@media (min-width: 500px)' : {
      width: '450px'
    }
  }
  return (
    <div className={[styles.red, styles.person].join(' ')} style={style}>
      <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
      {renderChildren(props.children)}
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
}

const renderChildren = (children) => {
  if (children) {
    return <p>{children}</p>
  }
}

export default Radium(person);