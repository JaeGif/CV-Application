import React, { Component } from 'react';
import reactLogo from '../assets/react.png';
import styles from './styles/header.module.css';

export class Header extends Component {
  render() {
    return (
      <header className={styles.rowSpace}>
        <div className={styles.rowCenter}>
          <p>This project was made with React!</p>
          <img
            id={styles.reactLogo}
            src={reactLogo}
            alt='react logo is M.I.A.'
          ></img>
        </div>
        <div>
          <p>Thanks for checking it out!</p>
        </div>
      </header>
    );
  }
}

export default Header;
