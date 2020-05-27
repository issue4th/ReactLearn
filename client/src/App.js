import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render = () => {
    let h1 = React.createElement('h1', null, "Hi I'm a React app!");
    return React.createElement('div', { className: 'App' }, h1);
  };
}

export default App;
