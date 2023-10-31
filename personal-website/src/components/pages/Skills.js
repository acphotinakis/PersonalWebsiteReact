// src/pages/Skills.js
import React from 'react';
import './Skills.css';
import skills from '../../data/skills';
import Card from 'react-bootstrap/Card';

const Skills = () => {

    return (
        <div className="skills">
            <div className='skills-list'>
                {Object.entries(skills).map(([category, skillsList]) => (
                    <div className="skill-card" key={category}>
                        <h2>{category}</h2>
                        {skillsList.map((skill, index) => (
                            <Card className='project-card'>
                                <Card.Header as="h5">{skill}</Card.Header>
                                <Card.Body>
                                    <Card.Text className='timeframe'></Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;