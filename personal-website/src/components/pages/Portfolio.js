
import React from 'react';
import projects from '../../data/projects';
import './Portfolio.css'; // Import the CSS file for styling
import Card from 'react-bootstrap/Card';
import { AiFillGithub } from 'react-icons/ai';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="project-list">
        {projects.map((project, index) => (
          <Card className='project-card' key={index}>
            <Card.Header as="h5" className='project-name'>{project.name}</Card.Header>
            <Card.Body className='project-details'>
              <Card.Text className='timeframe'><strong>{project.start_date} - {project.end_date}</strong></Card.Text>
              <a className="link" href={project.link} target="_blank" rel="noopener noreferrer">
                <div className=''>
                  <AiFillGithub className='github' />
                </div>
              </a>
              <div className='project-skills'>
                {project.technologies_used?.map((technology, techIndex) => (
                  <Card className='skill-card'>
                    <Card.Body><strong>{technology}</strong></Card.Body>
                  </Card>
                ))}
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
