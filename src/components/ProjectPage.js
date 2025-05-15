import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { setProject } from '../state/actions';
import { useDispatch, useSelector } from 'react-redux';
// import { setError, setSuccess, setLoading } from ''
import PROJECTS from '../data/projects';

const ProjectPage = () => {
    const projectID = useParams().projectID;
    // const loadingState = useSelector((state) => state.loadingState);
    const dispatch = useDispatch();
    const project = useSelector((state) => state.project);
    const { title, description, image } = project;

    useEffect(() => {
        // dispatch(setLoading(true));
        const project = PROJECTS.find(p => p.id === parseInt(projectID));
        
        if (project) {
            dispatch(setProject(project));
            // dispatch(setSuccess(true));
        }
        // else {
        //     dispatch(setError(true));
        // }
        // dispatch(setLoading(false));
    }, []);

    // const loadProjects = async () => {
    //     dispatchEvent(setProject(await fetchProject()));
    // };

    // const fetchProject = async () => {
    //     try {
    //         const response = await fetch(`https://fakestoreapi.com/products/${productID}`);
    //         let data = await response.json();
    //         // dispatch(setLoading(false));
    //         // dispatch(setSuccess(true));
    //         return data;
    //     } catch (err) {
    //         // dispatch(setLoading(false));
    //         // dispatch(setError(true));
    //     }
    // };

    // if (loadingState.loading) {
    //     return (
    //         <div>
    //             <Loader />
    //         </div>
    //     );
    // }

    // if (loadingState.error) {
    //     return (
    //         <div>
    //             <div>Error.</div>{' '}
    //         </div>
    //     );
    // }

    return (
        <div>
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default ProjectPage;