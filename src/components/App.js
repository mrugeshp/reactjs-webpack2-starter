import React from 'react';
import HelloMessage from './HelloMessage';
import Agenda from './Agenda';
import Trainer from './Trainer';
import Students from './Students';

const App = () => {
  let agendaItems = ['React', 'Angular', 'ES6'];
  let trainer = {
    name: 'Mrugesh',
    email: 'abc__@gmail.com',
    githubUrl: 'http://github.com/mrugeshp'
  };
  let students = ['Mrugesh', 'Ramesh', 'Suresh'];
  let studentsData = [
    {
      'name': 'Mrugesh',
      'surname': 'Panchal'
    },
    {
      'name': 'Ramesh',
      'surname': 'Patel'
    }
  ];
  return (
    <div className="myApp">
      <HelloMessage name="Mrugesh" />
      <Agenda name="React" items={agendaItems} />
      <Trainer trainer={trainer} />
      <Students students={students} studentsDetail={studentsData} />
    </div>
  );
};

module.exports = App;
