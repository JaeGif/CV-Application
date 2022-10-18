import React, { Component } from 'react';
import background from '../assets/cv.png';

export class Template extends Component {
  render() {
    return <div style={TemplateWrapperStyles}></div>;
  }
}

export default Template;

const TemplateWrapperStyles = {
  height: '80vh',
  width: '57vh',
  border: 'solid grey 2px',
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};
