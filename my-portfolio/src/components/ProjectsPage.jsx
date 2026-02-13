import { useState } from "react";
import PROJECTS from '../data/projects';
import ListProjects from './ListProjects';

import '../styles/ProjectsPage.css';

const ProjectsPage = () => {
    const [projects, setProjects] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const findMatchingProjects = () => {

    }

    return (
        <div className="main">
            <h2>Projects</h2>
            <div class="input-group mb-3 search-bar">
                <input type="text" class="form-control" placeholder="Search for a project"
                    onChange={event => setSearchValue(event.target.value)}></input>
                <button class="btn btn-outline-secondary" type="button" id="findProject" onClick={findMatchingProjects}>&#128269;</button>
            </div>
            <ListProjects projectList={projects}></ListProjects>
        </div>
    )
}

export default ProjectsPage