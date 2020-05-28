import React, { Component } from 'react';

class UserInput extends Component {
  state = {};

  inlineStyle = {
    backgroundColor: 'grey',
    border: '1px solid #f00',
  };

  render = () => {
    return (
      <input
        type='text'
        style={this.inlineStyle}
        onChange={this.props.onChangeHandler}
      />
    );
  };
}

export default UserInput;
