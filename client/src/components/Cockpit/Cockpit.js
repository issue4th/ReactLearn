import React from 'react';

import classes from './Cockpit.css';

const buttonStyle = {
  color: 'white',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer',
};

const cockpit = (props) => {
  const showPersons = props.showPersons;
  const toggleStyle = {
    ...buttonStyle,
    backgroundColor: showPersons ? 'red' : 'green',
  };

  return (
    <div className={classes.Cockpit}>
      <h1>Hi', I'm a React app!</h1>
      <p>This is really working!</p>
      <button style={toggleStyle} onClick={props.clickHandler}>
        Toggle names
      </button>
    </div>
  );
};

export default cockpit;
