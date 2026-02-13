import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProjectDetailed = (props) => {
    const {id, name, longDescription, skills, status} = props.user

    const navigate = useNavigate()

    const goBack = () => {
        navigate('/projects')
    }

    return (
        <div>
            <h3>{name}</h3>
            <button type="button" onClick={goBack}>Back</button>
        </div>
    )
}

export default ProjectDetailed