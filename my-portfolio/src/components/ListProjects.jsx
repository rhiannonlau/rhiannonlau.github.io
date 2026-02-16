import ProjectCard from "./ProjectCard"
import { useState } from "react";

const ListProjects = ({projectList = []}) => {


    return (
        <div>
            { projectList.map(project => <ProjectCard key={project.id} user={project} ></ProjectCard>)}
        </div>
    )
}

export default ListProjects