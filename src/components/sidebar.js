export default function Sidebar() {
    return (
        <div id="mySidebar" className="sidebar">
            <button onClick={animate_sidebar()} className="item close btn large">Close &times;</button>
            <a href='index.html' className="item btn">Home</a>
            <a href='resumePage.html' className="item btn">Resume</a>
            <div id="drop" className="dropdown">
                <button className="dropdown btn" href="projectsPage.html">Projects <span>&#x25BC;</span></button>
                <div id="projectsDrop" className="dropdown content">
                    <a href="projectsPage.html" className="item btn">All Projects</a>
                    <a href="projectDiscordBdayBot.html" className="item btn">Discord Birthday Bot</a>
                    <a href="projectTaskManager.html" className="item btn">Task Manager</a>
                </div>
            </div>
            <a href='aboutMePage.html' className="item btn">About Me</a>
        </div>
    );
}

function animate_sidebar() {
    var x = document.getElementById("mySidebar");

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