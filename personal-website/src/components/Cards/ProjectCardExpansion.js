import React from "react";
import './ProjectCardExpansion.css';
import { CCardTitle, CCardText, CCard } from '@coreui/react'
import { CCardBody } from '@coreui/react'
import { CCardHeader } from '@coreui/react'
import { AiFillGithub, AiFillCloseCircle } from 'react-icons/ai';
import { Helmet } from "react-helmet";

const ProjectCardExpansion = ({ project, onClose }) => {
    return (
        <CCard className="text-center main">
            <div>
                <Helmet>
                    <title>HomePage</title>
                    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Crimson+Pro" />
                </Helmet>
            </div>
            <CCardHeader className="circles-close">
                <div className="exit" onClick={onClose} >
                    <AiFillCloseCircle className="button" />
                </div>
                <div className="">
                    <a href={project.link} className="exit" target="_blank" rel="noopener noreferrer">
                        <AiFillGithub className="button" />
                    </a>
                </div>
            </CCardHeader>
            <CCardHeader className="project-name"><b>{project.name}</b> - Start: {project.start_date} || Completion: {project.end_date} </CCardHeader>
            <CCardBody>
                <CCardTitle className="stack"><b>Tech Stack:</b> {project.technologies}</CCardTitle>
                <CCardText className="description"><b>Description:</b> <br /> {project.description}</CCardText>
            </CCardBody>
        </CCard>
    );
};

export default ProjectCardExpansion;
