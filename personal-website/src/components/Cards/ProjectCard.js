import * as React from 'react';


const ProjectCard = ({ project }) => {


    return (
        <div className="project-card">
            <div className='h3'>{project.name}</div>
            <div>{project.technologies}</div>
            <div>{project.start_date}</div>
        </div>
    );

};

export default ProjectCard;
