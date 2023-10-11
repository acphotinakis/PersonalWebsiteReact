// src/pages/Portfolio.js
import React from 'react';
import projects from '../../data/projects';
import ProjectCard from '~/components/Cards/ProjectCard';
import './Portfolio.css'; // Import the CSS file for styling

const Portfolio = () => {

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;