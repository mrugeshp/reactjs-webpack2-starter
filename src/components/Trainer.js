import React from 'react';

const Trainer = (props) => {
  return (
    <div>
      <h3>Traner information</h3>
      <hr/>
      Name: {props.trainer.name} <br />
      Email: {props.trainer.email} <br />
      Github URL: <a href={props.trainer.githubUrl}>Click</a>
    </div>
  );
};

module.exports = Trainer;
