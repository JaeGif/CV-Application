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
      <form id={styles.formStructure}>
        <div className={styles.inputLabelsWrapper}>
          <label htmlFor='firstName'>First Name</label>
          <input name='firstName' type='text' />
        </div>

        <div className={styles.inputLabelsWrapper}>
          <label htmlFor='lastName'>Last Name</label>
          <input name='lastName' type='text' />
        </div>

        <div className={styles.inputLabelsWrapper}>
          <label htmlFor='title'>Job Title</label>
          <input name='title' type='text' placeholder='Desired title' />
        </div>

        <div className={styles.inputLabelsWrapper}>
          <label htmlFor='address'>Address</label>
          <input name='address' type='text' />
        </div>

        <div className={styles.inputLabelsWrapper}>
          <label htmlFor='phone'>Phone Number</label>
          <input name='phone' type='text' />
        </div>

        <div className={styles.inputLabelsWrapper}>
          <label htmlFor='email'>Email</label>
          <input name='email' type='text' />
        </div>

        <div className={styles.inputLabelsWrapper}>
          <label htmlFor='summary'>Summary</label>
          <textarea
            name='summary'
            type='text'
            placeholder='Summary of your skills'
          ></textarea>
        </div>
      </form>
    );
  }
}

export default PersonalInfo;
