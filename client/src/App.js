import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Rob', age: 51 },
      { name: 'Tim', age: 44 },
      { name: 'John', age: 99 },
    ],
  };
  render = () => {
    return (
      <div className='App'>
        <h1>Hi', I'm a React app!</h1>
        <p>This is really working!</p>
        <Person name='Rob' age='51' />
        <Person name='Tim' age='44' />
        <Person name='John' age='99'>
          My hobbies: drones and kayaks
        </Person>
      </div>
    );
  };
}

export default App;
