import React, { Component } from 'react';
import styles from './styles/fonts.module.css';
import form from './styles/forms.module.css';

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
      <div>
        {isEdit ? (
          <form style={formVisibilityAid} className={form.formStyle}>
            <div>
              <div className={form.labelFields}>
                <label htmlFor='college'>School</label>
                <input
                  onChange={this.onCollegeChange}
                  name='college'
                  type='text'
                  placeholder={college}
                ></input>
              </div>
              <div className={form.labelFields}>
                <label htmlFor='degree'>Degree</label>
                <input
                  onChange={this.onDegreeChange}
                  name='degree'
                  type='text'
                  placeholder={degree}
                ></input>
              </div>
              <div className={form.labelFields}>
                <label htmlFor='minor'>Minor</label>
                <input
                  onChange={this.onMinorChange}
                  name='minor'
                  type='text'
                  placeholder={minor}
                ></input>
              </div>
              <div className={form.labelFields}>
                <label htmlFor='start'>Start Date</label>
                <input
                  onChange={this.onStartChange}
                  name='start'
                  type='date'
                ></input>
              </div>
              <div className={form.labelFields}>
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
          <div style={this.props.style} onClick={this.changeEdit}>
            <h3 className={styles.mediumTitleText}>{college}</h3>
            <div>
              <h4 className={styles.regularText}>
                <em>{degree}</em>
              </h4>
              <h5 className={styles.regularText}>
                <em>{minor}</em>
              </h5>
            </div>
            <span style={dateStyle}>
              <h4>{start}</h4>
              <p>-</p>
              <h4>{end}</h4>
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default Education;

const dateStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '5px',
};
const formVisibilityAid = {
  backgroundColor: 'white',
  color: 'black',
  padding: '10px',
  border: '2px solid navy',
  borderRadius: '5px',
};
