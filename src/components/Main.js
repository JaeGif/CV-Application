import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import Template from './Template';
import Footer from './Footer';

export class Main extends Component {
  render() {
    return (
      <div style={mainStyles}>
        <Header />
        <div style={mainStructureStyles}>
          <Form />
          <Template />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;

const mainStyles = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0px',
};

const mainStructureStyles = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: '100vw',
  height: '80vh',
};
