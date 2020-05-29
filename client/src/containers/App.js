import React, { Component } from 'react';

import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  // Component property 'state' is monitored by React via setState
  state = {
    persons: [
      { id: 123, name: 'Rob', age: 51 },
      { id: 234, name: 'Tim', age: 44 },
      { id: 345, name: 'John', age: 99 },
    ],
    showPersons: false,
  };

  togglePersonshandler = (index) => {
    let showPersons = this.state.showPersons;
    this.setState({ showPersons: !showPersons });
  };

  switchNameHandler = (index) => {
    let newPersons = [...this.state.persons];
    newPersons[index] = { name: 'Blah', age: 23 };
    this.setState({ persons: newPersons });
  };

  render = () => {
    const showPersons = this.state.showPersons;
    const personsJsx = !showPersons ? null : (
      <Persons
        persons={this.state.persons}
        clickHandler={this.switchNameHandler}
      />
    );

    return (
      <div className='App'>
        <Cockpit
          showPersons={showPersons}
          clickHandler={this.togglePersonshandler}
        />
        {personsJsx}
      </div>
    );
  };
}

export default App;
