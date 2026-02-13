import { Link } from 'react-router-dom';

import '../styles/Sidebar.css';

const Sidebar = () => {

    return (
        <div className='sidebar'>
            <Link to='/home'><div className='option'>Home</div></Link>
            <Link to='/projects'><div className='option'>Projects</div></Link>
            <Link to='/aboutme'><div className='option'>About Me</div></Link>
        </div>
    )
}

export default Sidebar