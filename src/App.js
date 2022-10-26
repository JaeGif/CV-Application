import PersonalInfo from './components/PersonalInfo';
import Contact from './components/Contact';
import './reset.css';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Experience from './components/Experience';
import { Component } from 'react';
import uniqid from 'uniqid';
import cv from './assets/cv.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      experienceCount: 0,
    };
  }

  addExperience = () => {
    if (this.state.experienceCount === 4) {
      alert('No more than 4 jobs may be added');
      return;
    }
    this.setState({
      experienceCount: this.state.experienceCount + 1,
    });
  };
  removeExperience = () => {
    this.setState({
      experienceCount: this.state.experienceCount - 1,
    });
  };

  render() {
    const experience = [];

    for (let i = 0; i < this.state.experienceCount; i++) {
      experience.push(
        <Experience style={experienceLayout} key={uniqid()} number={i} />
      );
    }
    return (
      <div style={appStyling}>
        <div style={leftColumn}>
          <Contact style={contactLayout}></Contact>
          <Education style={educationLayout}></Education>
          <Skills style={skillsLayout}></Skills>
          <Languages style={languagesLayout}></Languages>
        </div>

        <div style={rightColumn}>
          <PersonalInfo style={personalInfoLayout}></PersonalInfo>
          <div style={experienceContainer}>
            {experience}
            <button onClick={this.addExperience}>New Job</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

const appStyling = {
  overflow: 'scroll',
  height: '1000px',
  padding: '20px',
  display: 'flex',
  backgroundImage: `url(${cv})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '800px',
  justifyContent: 'center',
  gap: '50px',
};
const leftColumn = {
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '270px',
  gap: '20px',
  width: '190px',
  color: 'white',
};
const rightColumn = {
  overflow: 'scroll',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '10px',
  width: '380px',
};
const contactLayout = {
  height: '150px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
};
const educationLayout = {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '5px',
  height: '185px',
  gap: '15px',
};
const skillsLayout = {
  height: '200px',
  marginBottom: '15px',
};
const languagesLayout = {
  height: '115px',
};
const personalInfoLayout = {
  height: '240px',
};
const experienceLayout = {
  height: '190px',
};
const experienceContainer = {
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  maxHeight: '750px',
};
