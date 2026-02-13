import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, status, skills, link, image }) => {
    const project = { id, title, status, skills, link, image };
    const dispatch = useDispatch();

    return (
        <div className='box'>
            <Link to={`/${id}`}>
                <div className='img-box'>
                    <img className='images' src={image}></img>
                </div>
                <div className='bottom' style='width: 90%'>
                    <p className='large' style='text-align: center; color: #DDDDDD; margin-bottom: 0'>{title}</p>
                    <p style='text-align: center; font-size: 14px; color: #666666; margin-bottom: 0; padding-top: 5px'>Status: {status}</p>
                    <p style='text-align: center; font-size: 14px; color: #DDDDDD; padding-top: 0; margin-top: 5px;'>Skills: {skills}</p>
                    {/* <a class='viewButton' style='width: 50%' href='{link}'>View this project</a> */}
                </div>
            </Link>
        </div>
    );
};

export default ProjectCard;

// from the original projectsPage.html code
// var displayItem = (items)=> {
//     document.getElementById('root').innerHTML=items.map((item)=>{
//         var {image, title, status, skills, link} = item;
//         return (
//             `<div class='box'>
//                 <div class='img-box'>
//                     <img class='images' src=${image}></img>
//                 </div>
//                 <div class='bottom' style='width: 90%'>
//                     <p class='large' style='text-align: center; color: #DDDDDD; margin-bottom: 0'>${title}</p>
//                     <p style='text-align: center; font-size: 14px; color: #666666; margin-bottom: 0; padding-top: 5px'>Status: ${status}</p>
//                     <p style='text-align: center; font-size: 14px; color: #DDDDDD; padding-top: 0; margin-top: 5px;'>Skills: ${skills}</p>
//                     <a class='viewButton' style='width: 50%' href='${link}'>View this project</a>
//                 </div>
//             </div>`
//         )
//     }).join('')
// };