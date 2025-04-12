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
    <link rel="stylesheet" href="projectsPage.css">
    <script src="applications.js"></script>
</head>
<body>
    <!-- Sidebar -->
    <div id="mySidebar" class="sidebar" style="display: none;">
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
    </div>

    <!-- Header -->
    <div>
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
    </div>

    <!-- Page -->
    <div style="
        width: 97%;
        display: inline-flex;
        margin-top: 50px;
        align-items: center;
        justify-content: space-between;">
        <h1 class="white">Home</h1>
        <a class="white viewButton" href="projectsPage.php">View All</a>
    </div>
    <!--
    <h2 class="white">Current project</h2>
    <div style="padding: 0 20% 0 20%">
        <div class="currProjCard">
            <img src="res/cat.png" alt="" style="width: 90%" class="center">
            <div class="currProjCardText">
                <h3 class="white"><b>Project 1</b></h4>
                <--<p class="white">Commission</p>->
            </div>
        </div>
        <div class="projGallery">
            <div class="projCard">
                <img src="res/cat.png" alt="" style="width: 100%">
                <div class="currProjCardText">
                    <h3 class="white text"><b>Project 2</b></h4>
                    <--<p class="white">Commission</p>->
                </div>
            </div>

            <div class="projCard">
                <img src="res/cat.png" alt="" style="width: 100%">
                <div class="currProjCardText">
                    <h3 class="white text"><b>Project 3</b></h4>
                    <--<p class="white">Commission</p>->
                </div>
            </div>

            <div class="projCard">
                <img src="res/cat.png" alt="" style="width: 100%">
                <div class="currProjCardText">
                    <h3 class="white text"><b>Project 4</b></h4>
                    <--<p class="white">Commission</p>->
                </div>
            </div>
        </div>
        <div style="clear: both"></div> <-- ensures the surrounding div adheres to the images' borders ->
    </div>
-->
    
    <div class="container">
        <div class="data" style="width: 98%">
            <div class="body" style="margin: auto; width: 70%; padding: 10px;">
                <h1 style="color: white; padding: 0px 50px;">Current project</h1>
                <div id="root" style="margin-left: 35px;"></div>
            </div>
        </div>
    </div>
    <script src="projects.js"></script>
    <!-- could add filtering again for this page -->

    <h1 style="color: white; padding: 0px 17%;">About This Website</h1>
    <p class="white large" style="padding: 0px 17%;">This website was created by me using PHP, CSS, and JavaScript. I referred to some guides and online forums, but no other software, including A.I. like ChatGPT, were used.</p>
</body>
</html>