import PersonalInfo from './components/PersonalInfo';
import Contact from './components/Contact';
import './reset.css';
import Education from './components/Education';
import ProfileImage from './components/ProfileImage';
import Skills from './components/Skills';
import Languages from './components/Languages';

function App() {
  return (
    <div>
      <ProfileImage></ProfileImage>
      <PersonalInfo></PersonalInfo>
      <Contact></Contact>
      <Education></Education>
      <Skills></Skills>
      <Languages></Languages>
    </div>
  );
}

export default App;
