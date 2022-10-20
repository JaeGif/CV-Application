import React, { Component } from 'react';
import styles from './styles/personalInfo.module.css';

export class PersonalInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      jobTitle: '',
      address: '',
      phoneNumber: '',
      email: '',
      summary: '',
    };
  }
  onFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };
  onLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };
  onTitleChange = (e) => {
    this.setState({
      jobTitle: e.target.value,
    });
  };
  onAddressChange = (e) => {
    this.setState({
      address: e.target.value,
    });
  };
  onEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  onSummaryChange = (e) => {
    this.setState({
      summary: e.target.value,
    });
  };

  render() {
    return (
      <form>
        <div id={styles.formStructure}>
          <div className={styles.inputLabelsWrapper}>
            <label htmlFor='firstName'>First Name</label>
            <input
              onChange={this.onFirstNameChange}
              className={styles.inputBoxes}
              name='firstName'
              type='text'
            />
          </div>

          <div className={styles.inputLabelsWrapper}>
            <label htmlFor='lastName'>Last Name</label>
            <input className={styles.inputBoxes} name='lastName' type='text' />
          </div>

          <div className={styles.inputLabelsWrapper}>
            <label htmlFor='title'>Job Title</label>
            <input
              className={styles.inputBoxes}
              name='title'
              type='text'
              placeholder='Desired title'
            />
          </div>

          <div className={styles.inputLabelsWrapper}>
            <label htmlFor='address'>Address</label>
            <input className={styles.inputBoxes} name='address' type='text' />
          </div>

          <div className={styles.inputLabelsWrapper}>
            <label htmlFor='phone'>Phone Number</label>
            <input className={styles.inputBoxes} name='phone' type='number' />
          </div>

          <div className={styles.inputLabelsWrapper}>
            <label htmlFor='email'>Email</label>
            <input className={styles.inputBoxes} name='email' type='email' />
          </div>

          <div className={styles.inputLabelsWrapper}>
            <label htmlFor='summary'>Summary</label>
            <textarea
              maxLength={380}
              className={styles.textAreas}
              name='summary'
              type='text'
              placeholder='Summary of your skills'
            ></textarea>
          </div>
          <button
            className={`${styles.nextButtons} ${styles.invalid}`}
            type='submit'
          >
            Next
          </button>
        </div>
      </form>
    );
  }
}

export default PersonalInfo;
