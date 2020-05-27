import React from 'react';
import './Person.css';
import { render } from 'react-dom';

const person = () => (
  <p>I'm a Person and I'm {Math.floor(Math.random() * 50)} years old!</p>
);

export default person;
