//import { PROJECTS } from "../constants"

function open(projLink) {
    window.location.href = projLink;
}

const pathname = window.location.pathname;

const PROJECTS=[
    {
        id: 0,
        image: 'res/cat.png',
        title: 'Task Manager Website',
        status: 'Finished',
        skills: 'PHP, JavaScript, CSS, SQL, Selenium',
        description: 'Website for managing tasks and projects.',
        link: "projectTaskManager.php"
    },
    {
        id: 1,
        image: 'res/cat.png',
        title: 'Discord Birthday Bot',
        status: 'In Progress',
        skills: 'Python, SQL, Discord API',
        description: 'N/A',
        link: "projectDiscordBdayBot.php"
    },
    {
        id: 2,
        image: 'res/cat.png',
        title: 'Dance AI',
        status: 'In Progress',
        skills: 'Python, CNN',
        description: '[description]',
        link: "projectDanceAI.php"
    },
    {
        id: 3,
        image: 'res/cer.png',
        title: 'Queen\'s Community Engagement Record',
        status: 'Finished',
        skills: 'Python Flask, MySQL',
        description: 'Final year capstone project for Queen\'s University.',
        link: "projectTaskManager.php"
    },
    {
        id: 4,
        image: 'res/PenwingsDream.png',
        title: 'Penwing\'s Dream',
        status: 'In Progress',
        skills: 'C#, Unity',
        description: 'Time management platformer game. 2nd place at the Queen\'s Creative Computing Showcase 2025W.',
        link: "projectTaskManager.php"
    }
]



function sortAlphabetically(array) {
    return array.slice().sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        return titleA.localeCompare(titleB);
    });
}

function sortReverseAlphabetically(array) {
    return array.slice().sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        return titleA.localeCompare(titleB) * -1;
    });
}

function sortMostRecent(array) {
    return array.slice().sort((a, b) => {
        const idA = a.id;
        const idB = b.id;
        if (idA < idB) {
            return 1;
        }
        else {
            return -1;
        }
    })
}

function sortLeastRecent(array) {
    return array.slice().sort((a, b) => {
        const idA = a.id;
        const idB = b.id;
        if (idA < idB) {
            return -1;
        }
        else {
            return 1;
        }
    })
}

function sortFinished(array) {
    return array.slice().sort((a, b) => {
        if (a.status == "Finished" && b.status == "In Progress") {
            return -1;
        }

        else if (a.status == "In Progress" && b.status == "Finished") {
            return 1;
        }
    })
}

function sortInProgress(array) {
    return array.slice().sort((a, b) => {
        if (a.status == "In Progress" && b.status == "Finished") {
            return -1;
        }

        else if (a.status == "Finished" && b.status == "In Progress") {
            return 1;
        }
    })
}


if (pathname.includes("index.php")) {
    // mimic index.php formatting so that it displays the last 4 in categories
    // with the last one being the big card
    const categories = [...new Set(PROJECTS.map((item)=> {return item}))]

    const lastItem = sortMostRecent(categories).slice(0);
    const lastFourItems = sortMostRecent(categories).slice(0, 4);

    var displayItem = (items)=> {
        document.getElementById('root').innerHTML=items.map((item)=>{
            var {id, image, title, description, link} = item;
            if (id == 4) {
                return (
                    `<a class='box' style='width: 150%; height: 100%' href='${link}'>
                        <div class='img-box' style='height: 75%'>
                            <img class='images' src=${image}></img>
                        </div>
                        <div class='bottom' style='width: 90%'>
                            <p class='large' style='text-align: center; color: #DDDDDD;'>${title}</p>
                            <p style='text-align: center; font-size: 14px; color: #DDDDDD;'>${description}</p>
                        </div>
                    </a>`
                )
            }
            else {
                return (
                    /* position: absolute;
                    left: 53%;
                    height: 15%;
                    width: 25%;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;'> */
                    `<a class='box' href='${link}' style='position: absolute;
                                                        left: 53%;
                                                        height: 15%;
                                                        width: 25%;
                                                        display: flex;
                                                        flex-direction: row; /* places the image and text side by side */
                                                        overflow: hidden;'>
                        <div class='img-box2' style='width: 40%;'> <!-- Removed display: inline-block; and padding-right: 50% -->
                            <img class='images' src=${image}></img>
                        </div>
                        <div style='width: 60%;'> <!-- Adjusted width to accommodate remaining space -->
                            <p style='color: #DDDDDD; text-align: left;'><span class='large'>${title}</span></br><span style='text-align: center; font-size: 12px;'>${description}</span></p>
                        </div>
                    </a>`
                )
            }
        }).join('')
    };

    displayItem(lastFourItems);
}

else if (pathname.includes("projectsPage.php")) {
    const categories = [...new Set(PROJECTS.map((item)=> {return item}))]

    document.getElementById('searchBar').addEventListener('keyup', (e)=>{
        const searchData = e.target.value.toLowerCase();
        const filterData = categories.filter((item)=> {
            return(
                item.title.toLocaleLowerCase().includes(searchData) || item.skills.toLocaleLowerCase().includes(searchData)
            )
        })
        displayItem(filterData)
    });

    document.getElementById('dispAlph').addEventListener('click', () => {
        const dispData = sortAlphabetically(categories);
        displayItem(dispData)
    });

    document.getElementById('dispRevAlph').addEventListener('click', () => {
        const dispData = sortReverseAlphabetically(categories);
        displayItem(dispData)
    });

    document.getElementById('dispMRec').addEventListener('click', () => {
        const dispData = sortMostRecent(categories);
        displayItem(dispData)
    });

    document.getElementById('dispLRec').addEventListener('click', () => {
        const dispData = sortLeastRecent(categories);
        displayItem(dispData)
    });

    document.getElementById('dispFin').addEventListener('click', () => {
        const dispData = sortFinished(categories);
        displayItem(dispData)
    });

    document.getElementById('dispProg').addEventListener('click', () => {
        const dispData = sortInProgress(categories);
        displayItem(dispData)
    });

    var displayItem = (items)=> {
        document.getElementById('root').innerHTML=items.map((item)=>{
            var {image, title, status, skills, link} = item;
            return (
                `<div class='box'>
                    <div class='img-box'>
                        <img class='images' src=${image}></img>
                    </div>
                    <div class='bottom' style='width: 90%'>
                        <p class='large' style='text-align: center; color: #DDDDDD; margin-bottom: 0'>${title}</p>
                        <p style='text-align: center; font-size: 14px; color: #666666; margin-bottom: 0; padding-top: 5px'>Status: ${status}</p>
                        <p style='text-align: center; font-size: 14px; color: #DDDDDD; padding-top: 0; margin-top: 5px;'>Skills: ${skills}</p>
                        <a class='viewButton' style='width: 50%' href='${link}'>View this project</a>
                    </div>
                </div>`
            )
        }).join('')
    };

    const def = sortMostRecent(categories);
    displayItem(def);
}