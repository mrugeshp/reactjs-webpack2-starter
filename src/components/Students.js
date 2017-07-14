import React from 'react';

const Students = (props) => {
  return (
    <div>
      <hr />
      <h4>Students List</h4>
      <ul>

        {props.studentsDetail.map( (studentdata) => {
          return (
            <li key={studentdata.name}>{studentdata.name} || {studentdata.surname}</li>
          );
        })}

      </ul>

      <ul>

        {props.students.map( (student) => {
          return (
            <li key={student}>{student}</li>
          );
        })}

      </ul>
    </div>
  );
};

module.exports = Students;
