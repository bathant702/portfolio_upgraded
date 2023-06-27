//home
import "./App.css";
import HomePage from '../HomePage/HomePage';
//portfolio pages
import AboutMePage from '../AboutMe/AboutMe';
import ResumePage from '../Resume/Resume';
import ProjectsPage from '../Projects/Projects';
import ResourcesPage from '../Resources/Resources';
//nav bars
import {Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import SocialMediaBar from '../../components/SocialMediaBar/SocialMediaBar';

function App() {
  return (
    <div className="App">
      <div><NavBar /></div>
      <div><SocialMediaBar /></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutMe" element={<AboutMePage />} />
        <Route path="/Resume" element={<ResumePage />} />
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="/Resources" element={<ResourcesPage />} />
      </Routes>

      And here is where I put some stuff in order to start my React app.
    </div>
  );
}

export default App;
