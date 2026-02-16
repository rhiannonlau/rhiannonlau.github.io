import { useState } from "react";
import PROJECTS from '../data/projects';

import ListProjects from './ListProjects';
import SearchBar from "./SearchBar";
import ButtonSort from "./ButtonSort";

import '../styles/ProjectsPage.css';

const ProjectsPage = () => {
    const [projects, setProjects] = useState([])

    return (
        <div className="main-page">
            <h2>Projects</h2>
            <ButtonSort></ButtonSort>
            <SearchBar></SearchBar>
            <div className="projects-section">
                <ListProjects projectList={PROJECTS}></ListProjects>
            </div>
        </div>
    )
}

export default ProjectsPage