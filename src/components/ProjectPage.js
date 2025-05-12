import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { setProject } from '../state/actions';
// import { useDispatch, useSelector } from 'react-redux';
// import { setError, setSuccess, setLoading } from ''

const ProjectPage = () => {
    const projectID = useParams().projectID;
    // const loadingState = useSelect((state) => state.loadingState);
    // const project = useSelector((state) => state.project);
    const { title, description, image } = project;

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