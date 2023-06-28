import './App.css';
import Introduction from './Components/Introduction/Introduction';
import MySkills from './Components/MySkills/MySkills';
import AboutMe from './Components/AboutMe/AboutMe';
import Social from './Components/Social/Social';
import FloorAnimation from './Components/FloorAnimation/FloorAnimation';
import ProjectOne from './Components/ProjectOne/ProjectMain/ProjectOne';


function App() {
  return (
     <>
  <Social/>
  <Introduction/>
  <FloorAnimation variable={1.5}/>
  <AboutMe/>
  <FloorAnimation variable={1.7}/>
  <MySkills/>
  <FloorAnimation variable={2}/>
  <ProjectOne/>
  <FloorAnimation variable={2.3}/>

  

    
     </>
  );
}

export default App;
