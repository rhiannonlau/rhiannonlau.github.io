import { useNavigate } from "react-router-dom";

import '../styles/ProjectCard.css';

const ProjectCard = (props) => {
    const {id, name, shortDescription, languages} = props.user

    const navigate = useNavigate()

    const viewProject = () => {
        navigate('/projects/' + id)
    }

    return (
        <div className='card' onClick={viewProject}>
            <h4>{name}</h4>
            <p>{shortDescription}</p>
            <p>{languages}</p>
        </div>
    )
}

export default ProjectCard