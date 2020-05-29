import React from 'react';

import Person from '../Person/Person';

const persons = (props) =>
  props.persons.map((person, index) => (
    <Person
      key={person.id}
      clickHandler={() => props.clickHandler(index)}
      name={person.name}
      age={person.age}
    />
  ));

export default persons;
