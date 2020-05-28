import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  // Component property 'state' is monitored by React via setState
  state = {};

  render = () => {
    return (
      <div className='App'>
        <h1>Exercise 1!</h1>
        <UserInput />
        <UserOutput />
      </div>
    );
  };
}

export default App;
