import React, { Component } from 'react';

export class Experience extends Component {
  constructor() {
    super();
    this.state = {
      job: {
        company: '',
        jobTitle: '',
        start: '',
        end: '',
        city: '',
        duties: '',
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
              <input name='company' type='text'></input>
            </div>
            <div>
              <label htmlFor='title'>Title</label>
              <input name='title' type='text'></input>
            </div>
            <div>
              <label htmlFor='start'>Start Date</label>
              <input name='start' type='date'></input>
            </div>
            <div>
              <label htmlFor='end'>End Date</label>
              <input name='end' type='date'></input>
            </div>
            <div>
              <label htmlFor='duties'>Job Duties</label>
              <textarea name='duties'></textarea>
            </div>
            <button type='submit'>Submit</button>
          </form>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default Experience;
