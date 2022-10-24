import React, { Component } from 'react';

export class Education extends Component {
  constructor() {
    super();
    this.state = {
      start: '2016',
      end: '2020',
      college: 'Purdue University',
      degree: 'B.S. Chemistry',
      minor: 'Biochemistry',
      isEdit: false,
    };
  }

  onCollegeChange = (e) => {
    this.setState({
      college: e.target.value,
    });
  };
  onDegreeChange = (e) => {
    this.setState({
      degree: e.target.value,
    });
  };
  onMinorChange = (e) => {
    this.setState({
      minor: e.target.value,
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

  changeEdit = () => {
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
    const { start, end, college, degree, minor, isEdit } = this.state;

    return (
      <div style={this.props.style}>
        {isEdit ? (
          <form>
            <div>
              <div>
                <label htmlFor='college'>School</label>
                <input
                  onChange={this.onCollegeChange}
                  name='college'
                  type='text'
                  placeholder={college}
                ></input>
              </div>
              <div>
                <label htmlFor='degree'>Degree</label>
                <input
                  onChange={this.onDegreeChange}
                  name='degree'
                  type='text'
                  placeholder={degree}
                ></input>
              </div>
              <div>
                <label htmlFor='minor'>Minor</label>
                <input
                  onChange={this.onMinorChange}
                  name='minor'
                  type='text'
                  placeholder={minor}
                ></input>
              </div>
              <div>
                <label htmlFor='start'>Start Date</label>
                <input
                  onChange={this.onStartChange}
                  name='start'
                  type='date'
                ></input>
              </div>
              <div>
                <label htmlFor='end'>Graduation Year</label>
                <input
                  onChange={this.onEndChange}
                  name='end'
                  type='date'
                ></input>
              </div>
              <button onClick={this.changeEdit} type='submit'>
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div onClick={this.changeEdit}>
            <h3>{college}</h3>
            <h4>{degree}</h4>
            <h5>{minor}</h5>

            <span>
              <h5>{start}</h5>
              <p>-</p>
              <h5>{end}</h5>
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default Education;
