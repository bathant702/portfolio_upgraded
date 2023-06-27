//home
import "./App.css";
//portfolio pages
import AboutMePage from "./components/AboutMePage";
import ResumePage from "./components/ResumePage";
import ProjectsPage from "./components/ProjectsPage";
import ResourcesPage from "./components/ResourcesPage";
//navigation
// import { useState } from 'react';
import NavBar from "./components/NavBar";
import SocialMediaBar from "./components/SocialMediaBar";

export default function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <SocialMediaBar />
        <AboutMePage />
        <ResumePage />
        <ProjectsPage />
        <ResourcesPage />
      </main>
      And here is where I put some stuff in order to start my React app.
    </div>
  );
}