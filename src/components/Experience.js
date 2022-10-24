import React, { Component } from 'react';

export class Experience extends Component {
  constructor() {
    super();
    this.state = {
      company: 'Google',
      jobTitle: 'Sr. Software Engineer',
      start: '2016',
      end: '2020',
      city: 'Seattle',
      duties:
        "I did all of these things at my last job, but it's not a list because the developer doesn't like making everything a list on a resume.",
      isEdit: false,
    };
  }

  onCompanyChange = (e) => {
    this.setState({
      company: e.target.value,
    });
  };

  onStartChange = (e) => {
    this.setState({
      start: e.target.value.slice(0, 4),
    });
  };

  onEndChange = (e) => {
    this.setState({
      end: e.target.value.slice(0, 4),
    });
  };

  onCityChange = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  onDutiesChange = (e) => {
    this.setState({
      duties: e.target.value,
    });
  };

  onJobTitleChange = (e) => {
    this.setState({
      jobTitle: e.target.value,
    });
  };

  changeEdit = () => {
    console.log('click');
    if (this.state.isEdit) {
      this.setState({
        isEdit: false,
      });
    } else {
      this.setState({
        isEdit: true,
      });
    }
  };

  render() {
    const { company, jobTitle, start, end, city, duties, isEdit } = this.state;

    return (
      <div style={this.props.style}>
        {isEdit ? (
          <form>
            <div>
              <label htmlFor='company'>Company</label>
              <input
                onChange={this.onCompanyChange}
                name='company'
                type='text'
                placeholder={company}
              ></input>
            </div>
            <div>
              <label htmlFor='title'>Title</label>
              <input
                onChange={this.onJobTitleChange}
                name='title'
                type='text'
                placeholder={jobTitle}
              ></input>
            </div>
            <div>
              <label htmlFor='city'>City</label>
              <input
                onChange={this.onCityChange}
                name='city'
                type='text'
                placeholder={city}
              ></input>
            </div>
            <div>
              <label htmlFor='start'>Start Date</label>
              <input
                onChange={this.onStartChange}
                name='start'
                type='date'
                placeholder={start}
              ></input>
            </div>
            <div>
              <label htmlFor='end'>End Date</label>
              <input
                onChange={this.onEndChange}
                name='end'
                type='date'
                placeholder={end}
              ></input>
            </div>
            <div>
              <label htmlFor='duties'>Job Duties</label>
              <textarea
                onChange={this.onDutiesChange}
                name='duties'
                placeholder={duties}
              ></textarea>
            </div>
            <button onClick={this.changeEdit} type='button'>
              Add
            </button>
          </form>
        ) : (
          <div onClick={this.changeEdit}>
            <div>
              <h3>{company}</h3>
              <h3>{jobTitle}</h3>
            </div>
            <span style={dateCitySpan}>
              <span style={dateStyle}>
                <p>{start}</p>
                <p>-</p>
                <p>{end}</p>
              </span>
              <p>{city}</p>
            </span>
            <p>{duties}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Experience;

const dateStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '5px',
};
const dateCitySpan = {
  display: 'flex',
  justifyContent: 'space-between',
};
