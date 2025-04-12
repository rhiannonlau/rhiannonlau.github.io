<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>My Website</title>

    <!-- Link to CSS and JS: -->
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet" href="sidebar.css">
    <link rel="stylesheet" href="universal.css">
    <script src="applications.js"></script>
</head>
<body>
    <!-- Sidebar -->
    <div id="mySidebar" class="sidebar" style="display: none;">
        <button onclick="animate_sidebar()" class="sidebarItem sidebarCloseBtn large">Close &times;</button>
        <a href='index.php' class="sidebarItem sidebarBtn">Home</a>
        <a href='resumePage.php' class="sidebarItem sidebarBtn">Resume</a>
        <div id="drop" class="sidebarDropdown">
            <button class="sidebarDropdownBtn" href="projectsPage.php">Projects <span>&#x25BC;</span></button>
            <div id="projectsDrop" class="sidebarDropdownContent">
                <a href="projectsPage.php" class="sidebarItem sidebarBtn">All Projects</a>
                <a href="#" class="sidebarItem sidebarBtn">Project 1</a>
                <a href="#" class="sidebarItem sidebarBtn">Project 2</a>
            </div>
        </div>
        <a href='aboutMePage.php' class="sidebarItem sidebarBtn">About Me</a>
    </div>

    <!-- Page -->
    <div style="display: inline-flex;">
        <button id="sidebarOpenBtn" onclick="animate_sidebar()" class="sidebarOpenBtn xlarge"><span>&#9776;</span></button>
        <p style="color: #DDDDDD; padding-left: 10px;"><a style="color: #DDDDDD" href="projectsPage.php">Projects</a> &#9656 <b><a style="color: #DDDDDD" href="projectDanceAI.php">Dance AI</a></b></p>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/rhiannonlau" style="position: absolute; top: 8px; right: 130px"> <!-- target="_blank" opens link in new tab -->
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
    </div>

    <h1 class="white">Project: Dance AI</h1>
    <h2 class="white">Type: Self-created project</h2>
    <p class="white large">Github repository link: <a target="_blank" rel="noopener noreferrer" href="https://github.com/rhiannonlau/CISC327_A2" class="yellow">github.com/rhiannonlau/CISC327_A2</a></p>
    <p class="white large">Technical details:</p>
    <ul class="white large" style="list-style-type:disc; padding-left: 100px;">
        <li>Group members: None</li>
        <li>Languages: Python</li>
        <li>Techniques: Deep learning (Convolutional Neural Networks) and probabilistic inference (Bayes Nets)</li>
    </ul>
    <p class="white large">Description:</p>
    <p class="white">Apply motion capture from video, and extracting the motions for further use. Run some basic analysis of the mocap outputs for dancer identification or dance style detection.
    </p>
</body>
</html>