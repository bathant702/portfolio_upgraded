//home
import "./App.css";
import HomePage from '../HomePage/HomePage';
//portfolio pages
import AboutMePage from '../AboutMePage/AboutMePage';
import ResumePage from '../ResumePage/ResumePage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import ResourcesPage from '../ResourcesPage/ResourcesPage';
//navigation
// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import SocialMediaBar from '../../components/SocialMediaBar/SocialMediaBar';

export default function App() {
  
  return (
    <div className="App">
      <div><NavBar /></div>
      <div><SocialMediaBar /></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutMePage" element={<AboutMePage />} />
        <Route path="/ResumePage" element={<ResumePage />} />
        <Route path="/ProjectsPage" element={<ProjectsPage />} />
        <Route path="/ResourcesPage" element={<ResourcesPage />} />
      </Routes>

      And here is where I put some stuff in order to start my React app.
    </div>
  );
}