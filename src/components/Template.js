import React, { Component } from 'react';
import background from '../assets/cv.png';
import styles from './styles/template.module.css';
import profileImg from '../assets/zoinks.jpg';

export class Template extends Component {
  render() {
    return (
      <div style={TemplateWrapperStyles}>
        <div>
          <div style={fitImage}>
            <img
              style={profileImage}
              src={profileImg}
              alt='This is your face'
            />
            <div style={summaryDisplayStyles}>
              <div style={nameWrapperStyles}>
                <h1 className={styles.headingText}>Jae</h1>
                <h1 className={styles.headingText}>Gifford</h1>
              </div>
              <p className={`${styles.regularText} ${styles.wrappingBodyText}`}>
                This is a summary of Jae, the best dude for the job. You know
                it, everyone knows it. I hope that the world will know it soon.
                Ya boi makes good websites. He also wanted to add enough text
                that the element would overflow so that he knows the exact
                limitations
              </p>
            </div>
          </div>
        </div>
        <div style={lowerHalfWrapperStyles} className={`${styles.regularText}`}>
          <div>
            <div
              className={`${styles.wrappingLeftSections} ${styles.spacingContacts} ${styles.smallerText}`}
            >
              <p>131-2212-8930</p>
              <p>jaegiff@gmail.com</p>
              <p>7242 Jackson Hill Rd. Newark NY 14513</p>
            </div>
            <div className={`${styles.wrappingLeftSections}`}>
              <h4>B.S. Chemistry</h4>
              <h5>Biochemistry</h5>
              <br />
              <p>Purdue University</p>
              <span className={styles.flexLine}>
                <p>2016</p>
                <p>-</p>
                <p>2020</p>
              </span>
              <p>GPA 3.27</p>
            </div>
            <div
              className={`${styles.wrappingSkills} ${styles.spacingColumnStart}`}
            >
              <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Vue</li>
                <li>Spring</li>
                <li>Tailwind</li>
                <li>MS Office</li>
                <li>Organization</li>
              </ul>
            </div>
            <div
              className={`${styles.wrappingLeftSections} ${styles.spacingColumnStart}`}
            >
              <ul>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Go</li>
              </ul>
            </div>
          </div>
          <div className={`${styles.wrappingRightSections}`}>
            <div className={styles.wrappingExperience}>
              <h3>ARL Maryland</h3>
              <span className={styles.flexLine}>
                <p>2018</p>
                <p>-</p>
                <p>2021</p>
              </span>
              <div>
                <ul>
                  <li>This is a description of my job duties</li>
                  <li>This is a description of my job duties</li>{' '}
                  <li>This is a description of my job duties</li>
                  <li>
                    This is a longer description of my job duties to check the
                    wrapping
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.wrappingExperience}>
              <h3>ARL Maryland</h3>
              <span className={styles.flexLine}>
                <p>2018</p>
                <p>-</p>
                <p>2021</p>
              </span>
              <div>
                <ul>
                  <li>This is a description of my job duties</li>
                  <li>This is a description of my job duties</li>{' '}
                  <li>This is a description of my job duties</li>
                  <li>
                    This is a longer description of my job duties to check the
                    wrapping
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.wrappingExperience}>
              <h3>ARL Maryland</h3>
              <span className={styles.flexLine}>
                <p>2018</p>
                <p>-</p>
                <p>2021</p>
              </span>
              <div>
                <ul>
                  <li>This is a description of my job duties</li>
                  <li>This is a description of my job duties</li>{' '}
                  <li>This is a description of my job duties</li>
                  <li>
                    This is a longer description of my job duties to check the
                    wrapping
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.wrappingExperience}>
              <h3>ARL Maryland</h3>
              <span className={styles.flexLine}>
                <p>2018</p>
                <p>-</p>
                <p>2021</p>
              </span>
              <div>
                <ul>
                  <li>This is a description of my job duties</li>
                  <li>This is a description of my job duties</li>{' '}
                  <li>This is a description of my job duties</li>
                  <li>
                    This is a longer description of my job duties to check the
                    wrapping
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Template;

const TemplateWrapperStyles = {
  height: '630px',
  width: '450px',
  border: 'solid grey 2px',
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  gap: '37.5px',
};
const nameWrapperStyles = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '10px',
};
const summaryDisplayStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  marginTop: '12.5px',
  gap: '5px',
};
const lowerHalfWrapperStyles = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '463px',
  gap: '30px',
};
const profileImage = {
  height: '125px',
  border: 'solid 1px black',
  borderRadius: '50%',
  marginTop: '10px',
  marginLeft: '40px',
};
const fitImage = {
  display: 'flex',
  justifyContent: 'center',
};
