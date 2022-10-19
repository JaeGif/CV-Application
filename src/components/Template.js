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

        <div style={lowerHalfWrapperStyles} className={`${styles.regularText}`}>
          <div>
            <div className={styles.wrappingLeftSections}>
              <br />
              <p>13122128930</p>
              <br />
              <p>jaegiff@gmail.com</p>
              <br />
              <p>7242 Jackson Hill Rd. Newark NY 14513</p>
            </div>
            <div className={styles.wrappingLeftSections}>
              <h4>B.S. Chemistry</h4>
              <p>Purdue University</p>
              <p>3.27 GPA</p>
            </div>
            <div className={styles.wrappingLeftSections}>
              <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Vue</li>
                <li>Spring</li>
                <li>Tailwind</li>
              </ul>
            </div>
            <div className={styles.wrappingLeftSections}>
              <ul>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Go</li>
              </ul>
            </div>
          </div>
          <div>This is the experience</div>
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
  display: 'flex',
  flexDirection: 'column',
  gap: '5vh',
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
const lowerHalfWrapperStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  color: 'white',
  marginLeft: '-1vw',
};
