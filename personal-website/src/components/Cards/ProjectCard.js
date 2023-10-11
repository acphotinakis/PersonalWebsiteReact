// src/components/ProjectCard.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './ProjectCard.css';


const ProjectCard = ({ project }) => {

    return (
        <section>
            <Card className="project-card">
                <Card.Body>
                    <Card.Title><b><u>{project.name}</u></b></Card.Title>
                    <Card.Text>
                        <b>Tech Stack:</b> {project.technologies}
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{project.start_date} – {project.end_date}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </section>
    );
};

export default ProjectCard;


