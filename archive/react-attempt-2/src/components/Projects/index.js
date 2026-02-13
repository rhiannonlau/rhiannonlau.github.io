import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProjectCard from './ProjectCard';
import { setProjects } from '../../state/actions/projects';

const Projects = () => {
    const projects = useSelector((state) => state.projects);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    const filterProjects = (data) => {
        if (filter === 'Most Recent') return data;

        return data.filter((item) => item.category === filter);
    };

    const projectCards = projects.map((project) => (
        <ProjectCard
            key={Math.random()}
            id={project.id}
            title={project.title}
            status={project.status}
            skills={project.skills}
            image={project.image}
        />
    ));

    return (
        <div>
            {projectCards}
        </div>
    );
};

export default Projects;