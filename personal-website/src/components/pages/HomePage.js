import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './HomePage.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faFont } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BiLogoGmail } from 'react-icons/bi';
import { BsFillTelephonePlusFill } from 'react-icons/bs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import informationExpert from '~/data/personalInformation';
import ResumePDF from '~/assets/Photinakis_Andrew_Resume.pdf';
import RepImage from '~/assets/Repimage.jpeg';

library.add(faCoffee, faFont);

const HomePage = () => {
    const showPhoneNumberAlert = () => {
        window.alert(`Phone Number: ${informationExpert.phone_number}`);
    };

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = ResumePDF;
        link.target = '_blank';
        link.download = informationExpert.resume_name;
        link.click();
    };

    return (
        <div className='home-page'>
            <Helmet>
                <title>HomePage</title>
                <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Crimson+Pro" />
            </Helmet>
            <div className='name'>
                <Container>
                    <Row>
                        <Col>
                            <div className='circle-image'>
                                <img src={RepImage} alt="Your Image" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 className='shadow-text'> {informationExpert.name}</h1>
                        </Col>
                        <Col>Rochester Institute of Technology</Col>
                        <br />
                        <Col>Washington DC-Baltimore Area</Col>
                        <br />
                        <Col>Junior at Rochester Institute of Technology majoring in Computer Science with a minor in Finance. Strong interests in software engineering, data science, cloud computing, and high frequency/algorithmic trading. Interested in making new connections and looking for an internship/co-op for Spring/Summer 2024.</Col>
                    </Row>
                    <Row>
                        <Col className='badges'>
                            <a href={informationExpert.linked_url} target="_blank" rel="noopener noreferrer">
                                <AiFillLinkedin style={{ fontSize: '2rem' }} />
                            </a>
                            <a href={informationExpert.github_url} target="_blank" rel="noopener noreferrer">
                                <AiFillGithub style={{ fontSize: '2rem' }} />
                            </a>
                            <a href={`mailto:${informationExpert.email}`}>
                                <BiLogoGmail style={{ fontSize: '2rem' }} />
                            </a>
                            <div onClick={showPhoneNumberAlert}>
                                <BsFillTelephonePlusFill style={{ fontSize: '2rem' }} />
                            </div>
                        </Col>
                    </Row>
                    <Row className='resume-button' onClick={downloadResume}>
                        <div className='resume-txt-div'>
                            <text className='button-text'>Checkout my resume!</text>
                        </div>
                    </Row>
                </Container>
            </div>

        </div>
    );
};

export default HomePage;
