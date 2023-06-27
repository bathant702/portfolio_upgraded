//home
import "./App.css";
//portfolio pages
import AboutMePage from "./pages/AboutMePage";
import ResumePage from "./pages/ResumePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResourcesPage from "./pages/ResourcesPage";
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
      </main>
      And here is where I put some stuff in order to start my React app.
    </div>
  );
}