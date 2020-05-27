import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <p>
      I'm {props.name} and I'm {props.age} years old!
    </p>
  );
};

export default person;
