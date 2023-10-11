// src/components/Portfolio/ProjectDetails.js
import React from 'react';

const ProjectDetails = ({ project }) => {
  return (
    <div className="project-details">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p>Location: {project.location}</p>
      <p>Technologies Used: {project.technologies_used.join(', ')}</p>
      <p>Start Date: {project.start_date}</p>
      <p>End Date: {project.end_date}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        Project Link
      </a>
    </div>
  );
};

export default ProjectDetails;
