import PersonalInfo from './components/PersonalInfo';
import Contact from './components/Contact';
import './reset.css';
import Education from './components/Education';
import ProfileImage from './components/ProfileImage';

function App() {
  return (
    <div>
      <ProfileImage></ProfileImage>
      <PersonalInfo></PersonalInfo>
      <Contact></Contact>
      <Education></Education>
    </div>
  );
}

export default App;
