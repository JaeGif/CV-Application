import React, { Component } from 'react';

export class ExperienceRender extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { job } = this.props;
    return (
      <div>
        <span>
          <h3>{job.company}</h3>
          <h3>{job.jobTitle}</h3>
        </span>
        <span>
          <span>
            <p>{job.start}</p>
            <p>-</p>
            <p>{job.end}</p>
          </span>
          <p>{job.city}</p>
        </span>
        <p>{job.duties}</p>
      </div>
    );
  }
}

export default ExperienceRender;
