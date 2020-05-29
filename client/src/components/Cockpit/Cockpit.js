import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
  return (
    <div className={classes.Cockpit}>
      <h1>Hi', I'm a React app!</h1>
      <p>This is really working!</p>
      <button onClick={props.clickHandler}>Switch name</button>
    </div>
  );
};

export default cockpit;
