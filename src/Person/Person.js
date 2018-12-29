import React from 'react'
import './Person.css'

const person = (props) => {
  return (
    <div className="Person">
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

export default person;