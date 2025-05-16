import React from 'react';
// import Header from './components/header';
// import Navbar from './components/Navbar';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";

import Home from "./pages";
import Projects from "./pages/projects";
import AProject from "./pages/aProject";
import Resume from "./pages/resume";
import AboutMe from "./pages/aboutMe";

import PROJECTS from "./data/projects";

import { FiMenu, FiX } from "react-icons/fi";
import { SlArrowDown } from "react-icons/sl";
import { ImGithub, ImLinkedin } from "react-icons/im";
import githubImage from './assets/github_logo_transparent.png'
import linkedinImage from './assets/linkedin_logo_transparent.webp'

// import { useDispatch, useSelector } from 'react-redux';
// import { openGit } from './state/actions/externalLink';

function Header({ onProjects, onAProject }) {
    // const dispatch = useDispatch();

    return (
        <div>
            <button id="sidebarOpenBtn" onClick={animate_navbar} className="sidebarOpenBtn xlarge"><FiMenu /></button>
            {/* <p style="color: #DDDDDD; padding-left: 10px;"><a style={{color: '#DDDDDD'}} href="projects.html">Projects</a>{ aProject ? '&#9656 <b><a style="color: #DDDDDD" href="projectDanceAI.html">Dance AI</a></b>' : '' }</p> */}
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/rhiannonlau" className="github">
                <img src={githubImage} alt="Link to my Github" className="github"></img>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rhiannon-lau-410362273/" className="linkedin">
                <img src={linkedinImage} alt="Link to my LinkedIn" className="linkedin"></img>
            </a>
            {/* <button onClick={() => dispatch(openGit())}><ImGithub /></button> */}
        </div>
    );
}

const projectNames = PROJECTS.map(name => {
    return (
        <li><NavLink to={"/" + name} className="item btn">{name}</NavLink></li>
    )
});

const Navbar = () => {
    return (
        <div id="navbar" className="navbar">
            <button onClick={animate_navbar} className="item btn close large">Close <FiX /></button>
            <NavLink to="/" className="item btn">Home</NavLink>
            <div id="drop" className="dropdown">
                <button className="btn" href="projectsPage.html">Projects <SlArrowDown /></button>
                <div id="projectsDrop" className="content" style={{display: 'none'}}>
                    <ol>
                        <li><NavLink to="/projects" className="item btn">All Projects</NavLink></li>
                        {projectNames}
                    </ol>
                </div>
            </div>
            <NavLink to="/resume" className="item btn">Resume</NavLink>
            <NavLink to="/about-me" className="item btn">About Me</NavLink>
        </div>
    );
};

function animate_navbar() {
    var x = document.getElementById("navbar");

    if (x) {
        x.addEventListener("animationend", function(e) {
            e.preventDefault();
    
            if(x.style.animationName == "slide-left") {
                x.style.display = "none";
            }
        });
    
        if (x.style.display === "none") {
            x.style.display = "block";
            x.style.animation = "0.5s slide-right";
        }
    
        else {
            x.style.animation = "1s slide-left";
        }
    }
}

const projectRoutes = projects.map(name => {
    return (
        <Route path={"/projects/" + ""} element={<AProject />} />
    )
});

export default function App() {
    return (
        <>
            <Header aProject={""} />
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/about-me" element={<AboutMe />} />
                </Routes>
            </Router>
        </>
    );
}
