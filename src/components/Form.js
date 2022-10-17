import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
/* import Education from './Education';
import Experience from './Experience'; */

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitPersonalInfo: false,
      submitEducation: false,
      submitExperience: false,
    };
  }

  render() {
    return (
      <div>
        <PersonalInfo />
      </div>
    );
  }
}

export default Form;
