// src/components/ProjectCard.js
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './ProjectCard.css';
import { AiFillGithub } from 'react-icons/ai';
import { Helmet } from 'react-helmet';
import { AiFillQuestionCircle } from 'react-icons/ai';
import ProjectCardExpansion from './ProjectCardExpansion';


const ProjectCard = ({ project }) => {
    const [showComponent, setShowComponent] = useState(false);

    const toggleComponent = () => {
        setShowComponent(!showComponent);
    };

    const closeComponent = () => {
        setShowComponent(false);
    };

    return (
        <section>
            <div>
                <Helmet>
                    <title>HomePage</title>
                    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Crimson+Pro" />
                </Helmet>
            </div>
            <Card className="project-card">
                <Card.Body>
                    <Card.Title><b>{project.name}</b></Card.Title>
                    {/* <Card.Text>
                        <b>Tech Stack:</b> {project.technologies}
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{project.start_date} – {project.end_date}</ListGroup.Item>
                    </ListGroup> */}
                </Card.Body>
                <Card.Body>
                    <br />
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <div className='github-link' href={project.link}>
                            <AiFillGithub className='github-icon' />
                        </div>
                    </a>
                    <a onClick={toggleComponent}>
                        <div className='question-link'>
                            <AiFillQuestionCircle className='question-icon' />
                        </div>
                    </a>
                </Card.Body>
            </Card>
            {showComponent && <ProjectCardExpansion project={project} onClose={closeComponent} />}
        </section>
    );
};

export default ProjectCard;
