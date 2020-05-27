import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render = () => {
    return (
      <div className='App'>
        <h1>Hi', I'm a React app!</h1>
        <p>This is really working!</p>
        <Person name='Rob' age='51' />
        <Person name='Tim' age='44' />
        <Person name='John' age='99'>
          My hobbies: drones and kayaks
        </Person>{' '}
        />
        <Person />
        <Person />
        <Person />
      </div>
    );
  };
}

export default App;
