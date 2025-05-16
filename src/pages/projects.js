import React from "react";
import { Routes, Route } from "react-router-dom";
import ProjectPage from "../components/ProjectPage";

const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            <Routes>
                <Route path="/" element={<Projects />} />
                
                <Route path="/:title" element={<ProjectPage />} />
            </Routes>
        </div>
    );
};

export default Projects;