import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
  // useState returns an array with exactly 2 elements
  // [0] The state (or state section)
  // [1] A function for updating the state
  const [state, setState] = useState({
    persons: [
      { name: 'Rob', age: 51 },
      { name: 'Tim', age: 44 },
      { name: 'John', age: 99 },
    ],
  });

  const [otherState, setOtherState] = useState({
    otherState: 'Not used here',
  });

  const switchNameHandler = () => {
    let newPersons = [state.persons[1], state.persons[2]];
    newPersons.push({ name: 'Blah', age: 23 });
    setState({ ...state, persons: newPersons });

    console.log(state);
    console.log(otherState);
  };

  return (
    <div className='App'>
      <h1>Hi', I'm a React app!</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={state.persons[0].name} age={state.persons[0].age} />
      <Person name={state.persons[1].name} age={state.persons[1].age} />
      <Person name={state.persons[2].name} age={state.persons[2].age}>
        My hobbies: drones and kayaks
      </Person>
    </div>
  );
};

export default App;
