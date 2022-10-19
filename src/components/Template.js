import React, { Component } from 'react';
import background from '../assets/cv.png';
import styles from './styles/template.module.css';

export class Template extends Component {
  render() {
    return (
      <div style={TemplateWrapperStyles}>
        <div style={summaryDisplayStyles}>
          <div style={nameWrapperStyles}>
            <h1 className={styles.headingText}>Jae</h1>
            <h1 className={styles.headingText}>Gifford</h1>
          </div>
          <p className={`${styles.regularText} ${styles.wrappingBodyText}`}>
            This is a summary of Jae, the best dude for the job. You know it,
            everyone knows it. I hope that the world will know it soon. Ya boi
            makes good websites. He also wanted to add enough text that the
            element would overflow so that he knows the exact limitations
          </p>
        </div>
      </div>
    );
  }
}

export default Template;

const TemplateWrapperStyles = {
  height: '80vh',
  width: '30vw',
  border: 'solid grey 2px',
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};
const nameWrapperStyles = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '.5vw',
};
const summaryDisplayStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  marginTop: '1.5vh',
  gap: '.5vh',
  marginLeft: '12vw',
};
