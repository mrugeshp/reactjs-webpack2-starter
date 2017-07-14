import React from 'react';

const Agenda = (props) => {
  return (
    <div>
      <h2>Agenda  for training on {props.name}</h2>
      <ul>
        {props.items.map( (item) => {
          return (
            <li key={item}>{item}</li>
          );
        })}
      </ul>
    </div>
  );
};

module.exports = Agenda;
