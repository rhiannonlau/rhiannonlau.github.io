import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header';
import HomePage from './components/HomePage';
import Sidebar from './components/Sidebar';
import ProjectsPage from './components/ProjectsPage';
import ProjectDetailed from './components/ProjectDetailed';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route path="/projects/:id" element={<ProjectDetailed />}></Route>
        <Route path="/aboutme" element={<AboutMe />}></Route>
      </Routes>
    </div>
  );
}

export default App;
