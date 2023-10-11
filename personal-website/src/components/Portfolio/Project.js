// src/components/Portfolio/Project.js
import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="project">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      {/* Add other project details you want to display */}
    </div>
  );
};

export default Project;
