import React, { Component } from 'react';
import ExperienceRender from './ExperienceRender';
export class Experience extends Component {
  constructor() {
    super();
    this.state = {
      job: {
        company: 'Google',
        jobTitle: 'Sr. Software Engineer',
        start: '2016',
        end: '2020',
        city: 'Seattle',
        duties:
          "I did all of these things at my last job, but it's not a list because the developer doesn't like making everything a list on a resume.",
      },
      jobs: [],
      isEdit: false,
    };
  }

  render() {
    const { job, jobs, isEdit } = this.state;

    return (
      <div>
        {isEdit ? (
          <form>
            <div>
              <label htmlFor='company'>Company</label>
              <input
                name='company'
                type='text'
                placeholder={job.company}
              ></input>
            </div>
            <div>
              <label htmlFor='title'>Title</label>
              <input
                name='title'
                type='text'
                placeholder={job.jobTitle}
              ></input>
            </div>
            <div>
              <label htmlFor='start'>Start Date</label>
              <input name='start' type='date' placeholder={job.start}></input>
            </div>
            <div>
              <label htmlFor='end'>End Date</label>
              <input name='end' type='date' placeholder={job.end}></input>
            </div>
            <div>
              <label htmlFor='duties'>Job Duties</label>
              <textarea name='duties' placeholder={job.duties}></textarea>
            </div>
            <button type='submit'>Submit</button>
          </form>
        ) : (
          <div>
            <ExperienceRender job={job}></ExperienceRender>
          </div>
        )}
      </div>
    );
  }
}

export default Experience;
