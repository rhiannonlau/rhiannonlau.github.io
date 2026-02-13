import React from "react";
import { NavLink } from "react-router-dom";

const projects = [];

const projectNames = projects.map(name => {
    return (
        <li><NavLink to={"/" + name} className="item btn">{name}</NavLink></li>
    )
});

const Navbar = () => {
    return (
        <div id="navbar" className="navbar">
            <button onClick={animate_navbar} className="item btn close large">Close &times;</button>
            <NavLink to="/" className="item btn">Home</NavLink>
            <div id="drop" className="dropdown">
                <button className="btn" href="projectsPage.html">Projects <span>&#x25BC;</span></button>
                <div id="projectsDrop" className="content" style={{display: 'none'}}>
                    <ol>
                        <li><NavLink to="/projects" className="item btn">All Projects</NavLink></li>
                        {projectNames}
                    </ol>
                </div>
            </div>
            <NavLink to="/resume" className="item btn">Resume</NavLink>
            <NavLink to="/about-me" className="item btn">About Me</NavLink>
        </div>
    );
};

export default Navbar;

function animate_navbar() {
    var x = document.getElementById("navbar");

    if (x) {
        x.addEventListener("animationend", function(e) {
            e.preventDefault();
    
            if(x.style.animationName == "slide-left") {
                x.style.display = "none";
            }
        });
    
        if (x.style.display === "none") {
            x.style.display = "block";
            x.style.animation = "1s slide-right";
        }
    
        else {
            x.style.animation = "1s slide-left";
        }
    }
}