import React, { Component } from 'react';
import './UserOutput.css';

class UserOutput extends Component {
  state = {};

  render = () => {
    return (
      <div className='UserOutput'>
        <p>Username: {this.props.userName}</p>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
      </div>
    );
  };
}

export default UserOutput;
