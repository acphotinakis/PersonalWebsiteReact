import React from 'react';
import './Navigation.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Helmet } from 'react-helmet';
import { AiFillHome, AiFillInfoCircle, AiFillTool, AiFillContacts } from 'react-icons/ai';
import { GiLaptop } from 'react-icons/gi';
import { HiDocumentText } from 'react-icons/hi';


const Navbar = () => {

    return (
        <div>
            <Helmet>
                <title>HomePage</title>
                <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Crimson+Pro" />
            </Helmet>
            <div className={'sidebar'}>
                <Container>
                    <Row className='icon-row'>
                        <AiFillHome className='icon' />
                        <a href='/'>Home</a>
                    </Row>
                    <Row className='icon-row'>
                        <AiFillInfoCircle className='icon' />
                        <a href='/about'>About</a>
                    </Row>
                    <Row className='icon-row'>
                        <AiFillTool className='icon' />
                        <a href='/skills'>Skills</a>
                    </Row>
                    <Row className='icon-row'>
                        <GiLaptop className='icon' />
                        <a href='/projects'>Projects</a>
                    </Row>
                    <Row className='icon-row'>
                        <HiDocumentText className='icon' />
                        <a href='/resume'>Resume</a>
                    </Row>
                    <Row className='icon-row'>
                        <AiFillContacts className='icon' />
                        <a href='/contact'>Contact</a>
                    </Row>
                </Container>
            </div>
        </div >
    );
};

export default Navbar;
