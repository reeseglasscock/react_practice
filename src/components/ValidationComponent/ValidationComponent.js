import React from 'react';

const validationComponent = (props) => {
  let validationMessage = 'Text long enough'

  if (props.input.length >= 5) {
    return (
      <p>{validationMessage}</p>
    )
  } else {
    return (
      <p>Text too short</p>
    )
  }
}

// const checkLength = (input) => {
//   if (input >= 5) {
//     return 
//   } else {
//     return <p>Text too short</p>
//   }
// }

export default validationComponent;