import React, { Component } from 'react';
import reactLogo from '../assets/react.png';

export class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <p>This project was made with React!</p>
          <img src={reactLogo} alt='react logo is M.I.A.'></img>
        </div>
      </header>
    );
  }
}

export default Header;
