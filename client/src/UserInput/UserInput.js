import React, { Component } from 'react';
//import './UserInput.css';

class UserInput extends Component {
  state = {};

  render = () => {
    return <input type='text' onChange={this.props.onChangeHandler} />;
  };
}

export default UserInput;
