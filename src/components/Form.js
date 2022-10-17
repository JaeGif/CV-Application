import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Experience from './Experience';

export class Form extends Component {
  render() {
    return (
      <div>
        <PersonalInfo />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default Form;
