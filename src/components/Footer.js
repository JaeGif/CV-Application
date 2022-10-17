import React, { Component } from 'react';
import githubLogo from '../assets/github.png';
import styles from './styles/footer.module.css';

export class Footer extends Component {
  render() {
    return (
      <footer className={styles.rowCenter}>
        <p>Copyright JaeGif 2022</p>
        <img
          id={styles.githubLogo}
          src={githubLogo}
          alt='There should be a GH logo...'
        />
      </footer>
    );
  }
}

export default Footer;
