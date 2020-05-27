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

  switchNameHandler = () => {
    let newPersons = [this.state.persons[1], this.state.persons[2]];
    newPersons.push({ name: 'Blah', age: 23 });
    this.setState({ persons: newPersons });
  };

  render = () => {
    return (
      <div className='App'>
        <h1>Hi', I'm a React app!</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          clickHandler={this.switchNameHandler}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          My hobbies: drones and kayaks
        </Person>
      </div>
    );
  };
}

export default App;
