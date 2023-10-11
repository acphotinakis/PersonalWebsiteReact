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
            <div>
                <Helmet>
                    <title>HomePage</title>
                    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Crimson+Pro" />
                </Helmet>
            </div>
            <div className='welcome-typed'>
                <Container>
                    <Row>
                        <Col className='typedcol'>
                            <ReactTypingEffect
                                text={["Hi there ✌️, I'm"]}
                                cursorRenderer={cursor => <h1 className='typeEffectText'>{cursor}</h1>}
                                speed={100}
                                cursor='~'
                                displayTextRenderer={(text) => {
                                    return (
                                        <h1>
                                            {text.split('').map((char, i) => {
                                                const key = `${i}`;
                                                return (
                                                    <span className='typeEffectText'
                                                        key={key}
                                                    >{char}</span>
                                                );
                                            })}
                                        </h1>
                                    );
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='name'>
                <Container>
                    <Row>
                        <Col>
                            <h1 className='shadow-text'> {informationExpert.name}</h1>
                        </Col>
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
