import React, { Component } from 'react';
import Form from './Form';
import Template from './Template';

export class Main extends Component {
  render() {
    return (
      <div style={mainStyles}>
        <div style={mainStructureStyles}>
          <Form />
          <Template />
        </div>
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
