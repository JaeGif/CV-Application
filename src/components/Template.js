import React, { Component } from 'react';

export class Template extends Component {
  render() {
    return <div style={TemplateWrapperStyles}>Template</div>;
  }
}

export default Template;

const TemplateWrapperStyles = {
  height: '80vh',
  width: '57vh',
  border: 'solid grey 2px',
  backgroundColor: 'black',
};
