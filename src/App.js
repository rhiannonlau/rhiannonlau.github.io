import React from 'react';
import Header from './components/header';
import Navbar from './components/Navbar';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./pages";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import AboutMe from "./pages/aboutMe";

export default function App() {
    return (
        <>
            <Header />
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

