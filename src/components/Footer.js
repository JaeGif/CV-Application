import React, { Component } from 'react';
import githubLogo from '../assets/github.png';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <p>Copyright JaeGif 2022</p>
        <img src={githubLogo} alt='There should be a GH logo...' />
      </footer>
    );
  }
}

export default Footer;
