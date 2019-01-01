import React from 'react'
import styles from "../Cockpit/Cockpit.module.css"

const cockpit = (props) => {
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

  const classes = []
  if (props.persons.length <= 2) {
    classes.push(styles.red);
  }
  if (props.persons.length <= 1) {
    classes.push(styles.bold)
  }

  return (
    <div className={styles.Cockpit}>
      <h1>Hi, I'm a react app!</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button
        style={style}
        onClick={props.clicked}>Switch Name</button>
    </div>
      )
}

export default cockpit;