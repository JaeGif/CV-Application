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

  render() {
    return (
      <form>
        <div id={styles.formStructure}>
          <div className={styles.inputLabelsWrapper}>
            <label htmlFor='firstName'>First Name</label>
            <input className={styles.inputBoxes} name='firstName' type='text' />
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
