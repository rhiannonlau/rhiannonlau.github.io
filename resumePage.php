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
    <div>
        <button id="sidebarOpenBtn" onclick="animate_sidebar()" class="sidebarOpenBtn xlarge"><span>&#9776;</span></button>
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

    <div>
        <h1 class="white">Resume</h1>
        <p class="large" style="color: palegoldenrod; padding: 0px 50px;">Skills</br> </p>
            <ul class="white large" style="list-style-type:disc; padding-left: 100px;">
                <li>Languages: Python, C#, C/C++, Java, JavaScript, Haskell, Prolog, MATLAB</li>
                <li>Project experience in SQL, PHP, and HTML</li>
                <li>Shell scripting in Bash</li>
                <li>Tools/databases: MySQL, Selenium, phpMyAdmin, Wix, MS Office</li>
                <li>Git version control system</li>
                <li>French (working proficiency)</li>
            </ul>
        <p class="large" style="color: palegoldenrod; padding: 0px 50px;">Education
    </p>
        <p class="white large">Bachelor of Computing (Honors) - Expected May 2025</p>
            <ul class="white large" style="list-style-type:disc; padding-left: 100px;">
                <li>Software design specialization</li>
                <li>Key courses: Artificial Intelligence (CNN, CSP, Bayes), Linear Data Analysis, Software Architecture, Algorithms I</li>
            </ul>
        <p class="large" style="color: palegoldenrod; padding: 0px 50px;">Extracurriculars</br> </p>
            <ul class="white large" style="list-style-type:disc; padding-left: 100px;">
                <li>NLS certified lifeguard and instructor</li>
                <li>RCM grade 8 piano</li>
                <li>Interests: dance, reading, game development</li>
            </ul>
        <p class="white large">
            Thank you for taking the time to review my portfolio.</br>
            Please feel free to look into my Github and LinkedIn using the icons at the top right.
            If you would like to contact me, I am always reachable through LinkedIn at any time.
        </p>
    </div>
</body>
</html>