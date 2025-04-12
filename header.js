// js code for the header, most importantly the sidebar so that it can be instantly changed when a new project is added

import { PROJECTS } from "../constants"

const pathname = window.location.pathname;

const pattern = "*project*.php";

function wildcardMatchRegExp(text, pattern) {
    const regexPattern =
        new RegExp('^' + pattern.replace(/\?/g, '.').replace(/\*/g, '.*') + '$');
    return regexPattern.test(text);
}

function sidebarCode() {
    return (
        `<div id="mySidebar" class="sidebar" style="display: none;">
            <button onclick="animate_sidebar()" class="sidebarItem sidebarCloseBtn large">Close &times;</button>
            <a href='index.php' class="sidebarItem sidebarBtn">Home</a>
            <a href='resumePage.php' class="sidebarItem sidebarBtn">Resume</a>
            <div id="drop" class="sidebarDropdown">
                <button class="sidebarDropdownBtn" style="height: 35px" href="projectsPage.php">Projects <span>&#x25BC;</span></button> <!-- the height specifier is necessary here instead of css-->
                <div id="projectsDrop" class="sidebarDropdownContent">
                    <a href="projectsPage.php" class="sidebarItem sidebarBtn">All Projects</a>
                    <a href="projectDiscordBdayBot.php" class="sidebarItem sidebarBtn">Discord Birthday Bot</a>
                    <a href="projectTaskManager.php" class="sidebarItem sidebarBtn">Task Manager</a>
                </div>
            </div>
            <a href='aboutMePage.php' class="sidebarItem sidebarBtn">About Me</a>
        </div>`
    )
}

// if it's the main project page, display the path button "Projects"
if (pathname.includes("projectsPage.php")) {
    sidebarCode();
    return(
        `<div>
            <button id="sidebarOpenBtn" onclick="animate_sidebar()" class="sidebarOpenBtn xlarge"><span>&#9776;</span></button>
            <p style="color: #DDDDDD; padding-left: 10px;"><b><a style="color: #DDDDDD" href="projectsPage.php">Projects</a></b></p>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/rhiannonlau" style="position: absolute; top: 8px; right: 130px"> <!-- target="_blank" opens link in new tab, rel=... is for security, prevents phishing -->
            <img src="res/github_logo_transparent.png" alt="Link to my Github"
                style="
                padding: 5px;
                width: 100px;
                -webkit-filter: invert(100%);
                filter: invert(100%) brightness(85%);">
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rhiannon-lau-410362273/" style="position:absolute; padding-top: 20px; right: 16px">
                <img src="res/linkedin_logo_transparent.webp" alt="Link to my LinkedIn"
                    style="
                    width: 100px;
                    filter: brightness(85%);">
            </a>
        </div>`
        
    )
}

// if it's any other project page, display the corresponding extra path button
// how to know which page it is on? should pages be given an id? if so, how to extract the id?
// what if when the "view project" btn is clicked, it sends the id number to header.js?
else if (wildcardMatchRegExp(pathname, pattern)) {
    sidebarCode();
    return(
        `<div>
            <button id="sidebarOpenBtn" onclick="animate_sidebar()" class="sidebarOpenBtn xlarge"><span>&#9776;</span></button>
            <p style="color: #DDDDDD; padding-left: 10px;"><a style="color: #DDDDDD" href="projectsPage.php">Projects</a> &#9656 <b><a style="color: #DDDDDD" href='${link}'>${title}</a></b></p>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/rhiannonlau" style="position: absolute; top: 8px; right: 130px"> <!-- target="_blank" opens link in new tab, rel=... is for security, prevents phishing -->
            <img src="res/github_logo_transparent.png" alt="Link to my Github"
                style="
                padding: 5px;
                width: 100px;
                -webkit-filter: invert(100%);
                filter: invert(100%) brightness(85%);">
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rhiannon-lau-410362273/" style="position:absolute; padding-top: 20px; right: 16px">
                <img src="res/linkedin_logo_transparent.webp" alt="Link to my LinkedIn"
                    style="
                    width: 100px;
                    filter: brightness(85%);">
            </a>
        </div>`
    )
}

// no path buttons
else {
    sidebarCode();
    return(
        `<div>
            <button id="sidebarOpenBtn" onclick="animate_sidebar()" class="sidebarOpenBtn xlarge"><span>&#9776;</span></button>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/rhiannonlau" style="position: absolute; top: 8px; right: 130px"> <!-- target="_blank" opens link in new tab, rel=... is for security, prevents phishing -->
            <img src="res/github_logo_transparent.png" alt="Link to my Github"
                style="
                padding: 5px;
                width: 100px;
                -webkit-filter: invert(100%);
                filter: invert(100%) brightness(85%);">
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rhiannon-lau-410362273/" style="position:absolute; padding-top: 20px; right: 16px">
                <img src="res/linkedin_logo_transparent.webp" alt="Link to my LinkedIn"
                    style="
                    width: 100px;
                    filter: brightness(85%);">
            </a>
        </div>`
    )
}