import React, { Component } from 'react';
//import './UserInput.css';

class UserInput extends Component {
  state = {};

  onChangeHandler = () => {
    console.log('Input changed');
  };

  render = () => {
    return <input type='text' onChange={this.onChangeHandler} />;
  };
}

export default UserInput;
