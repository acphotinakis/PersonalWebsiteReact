import React from 'react';
import projects from '../../data/projects';
import './Portfolio.css'; // Import the CSS file for styling
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AiFillGithub } from 'react-icons/ai';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="project-list">
        {projects.map((project, index) => (
          <Card className='project-card' key={index}>
            <Card.Header as="h5">{project.name}</Card.Header>
            <Card.Body>
              <Card.Text className='timeframe'>{project.start_date} - {project.end_date}</Card.Text>
              <a className="link" href={project.link} target="_blank" rel="noopener noreferrer">
                <div className=''>
                  <AiFillGithub className='github' />
                </div>
              </a>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
