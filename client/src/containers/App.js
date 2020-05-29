import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';

class App extends Component {
  // Component property 'state' is monitored by React via setState
  state = {
    persons: [
      { id: 123, name: 'Rob', age: 51 },
      { id: 234, name: 'Tim', age: 44 },
      { id: 345, name: 'John', age: 99 },
    ],
  };

  switchNameHandler = (index) => {
    let newPersons = [...this.state.persons];
    newPersons[index] = { name: 'Blah', age: 23 };
    this.setState({ persons: newPersons });
  };

  render = () => {
    return (
      <div className='App'>
        <h1>Hi', I'm a React app!</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler(0)}>Switch name</button>
        <Persons
          persons={this.state.persons}
          switchNameHandler={this.switchNameHandler}
        />
      </div>
    );
  };
}

export default App;
