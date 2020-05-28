import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // Component property 'state' is monitored by React via setState
  state = {
    persons: [
      { name: 'Rob', age: 51 },
      { name: 'Tim', age: 44 },
      { name: 'John', age: 99 },
    ],
  };

  switchNameHandler = (index) => {
    let newPersons = [...this.state.persons];
    newPersons[index] = { name: 'Blah', age: 23 };
    this.setState({ persons: newPersons });
  };

  render = () => {
    let personsJsx = this.state.persons.map((person, index) => (
      <Person
        key={index}
        clickHandler={() => this.switchNameHandler(index)}
        name={person.name}
        age={person.age}
      />
    ));

    return (
      <div className='App'>
        <h1>Hi', I'm a React app!</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler(0)}>Switch name</button>
        {personsJsx}
      </div>
    );
  };
}

export default App;
