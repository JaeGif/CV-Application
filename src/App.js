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
      experience.push(<Experience key={uniqid()} number={i} />);
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
          <div style={experienceLayout}>
            {experience}
            <button onClick={this.addExperience}>Add Work</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

const appStyling = {
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
  display: 'flex',
  flexDirection: 'column',
  marginTop: '270px',
  gap: '20px',
  width: '190px',
  color: 'white',
};
const rightColumn = {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '10px',
  width: '378px',
};
const contactLayout = {
  height: '150px',
};
const educationLayout = {
  height: '185px',
};
const skillsLayout = {
  height: '220px',
};
const languagesLayout = {
  height: '150px',
};
const personalInfoLayout = {
  height: '240px',
};
const experienceLayout = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};
