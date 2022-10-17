import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Experience from './Experience';

export class Form extends Component {
  render() {
    return (
      <form>
        <PersonalInfo />
        <Education />
        <Experience />
      </form>
    );
  }
}

export default Form;
