import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PROJECTS from '../data/projects';

const ProjectDetailed = () => {
    // const {id, name, longDescription, skills, status} = props.user
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [longDescription, setLongDescription] = useState('')
    const [skills, setSkills] = useState('')
    const [status, setStatus] = useState('')

    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        loadProject()
    }, []);

    const loadProject = () => {
        setId(params.id)

        const project = PROJECTS[params.id - 1]
        setName(project.name)
        setLongDescription(project.longDescription)
        setSkills(project.skills)
        setStatus(project.status)
    }

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