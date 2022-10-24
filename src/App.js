import PersonalInfo from './components/PersonalInfo';
import Contact from './components/Contact';
import './reset.css';
import Education from './components/Education';
import ProfileImage from './components/ProfileImage';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Experience from './components/Experience';
import { Component } from 'react';
import uniqid from 'uniqid';

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
      <div>
        <ProfileImage></ProfileImage>
        <PersonalInfo></PersonalInfo>
        <Contact></Contact>
        <Education></Education>
        <Skills></Skills>
        <Languages></Languages>

        <div>
          {experience}
          <button onClick={this.addExperience}>Add Work</button>
        </div>
      </div>
    );
  }
}

export default App;
