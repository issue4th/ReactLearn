import React from 'react';

import Person from '../Person/Person';

const persons = (props) => {
  let personsJsx = props.persons.map((person, index) => (
    <Person
      key={person.id}
      clickHandler={() => props.switchNameHandler(index)}
      name={person.name}
      age={person.age}
    />
  ));

  return <div>{personsJsx}</div>;
};

export default persons;
