import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  // Component property 'state' is monitored by React via setState
  state = {
    userName: ['Rob', 'Timbo'],
    otherState: ["Don't touch"],
  };

  onInputChangeHandler = (index, event) => {
    let userNames = this.state.userName;
    userNames[index] = event.target.value;

    this.setState({ userName: userNames });
  };

  render = () => {
    return (
      <div className='App'>
        <h1>Exercise 1</h1>
        <div className='InputComponentThatIsnt'>
          <UserInput
            onChangeHandler={(text) => this.onInputChangeHandler(0, text)}
          />
          <UserOutput userName={this.state.userName[0]} />
        </div>
        <div className='InputComponentThatIsnt'>
          <UserInput
            onChangeHandler={(text) => this.onInputChangeHandler(1, text)}
          />
          <UserOutput userName={this.state.userName[1]} />
        </div>
      </div>
    );
  };
}

export default App;
