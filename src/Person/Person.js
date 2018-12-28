import React from 'react'

const person = (props) => {
  return (
    <div>
      <p>I'm a {props.name} and I am {props.age} years old!</p>
      {renderChildren(props.children)}
    </div>
  )
}

function renderChildren(children) {
  if (children) {
    return <p>I am awesome!</p>
  }
}

export default person;