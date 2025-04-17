import { animate_navbar } from "../utils/navbarUtils";
import githubImage from '../assets/github_logo_transparent.png'
import linkedinImage from '../assets/linkedin_logo_transparent.webp'

function Header() {
    return (
        <div>
            <button id="sidebarOpenBtn" onClick={animate_navbar} className="sidebarOpenBtn xlarge"><span>&#9776;</span></button>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/rhiannonlau" className="github">
                <img src={githubImage} alt="Link to my Github" className="github"></img>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rhiannon-lau-410362273/" className="linkedin">
                <img src={linkedinImage} alt="Link to my LinkedIn" className="linkedin"></img>
            </a>
        </div>
    );
}

export default Header;