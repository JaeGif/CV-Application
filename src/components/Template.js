import React, { Component } from 'react';
import background from '../assets/cv.png';
import styles from './styles/template.module.css';

export class Template extends Component {
  render() {
    return (
      <div style={TemplateWrapperStyles}>
        <div style={nameWrapperStyles}>
          <h1>Jae</h1>
          <h1>Gifford</h1>
        </div>
      </div>
    );
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
const nameWrapperStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2vw',
};
