import React from 'react';
import logo from '../../img/logo.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './Header.css'

const Header = () => {
    return (
        <div>
            <header>
                <Container className='menu-bar'>
                    <Row>
                        <Col md="4">
                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>
                        </Col>
                        <Col className='col'>
                            <div className='menu'>
                                <ul className='list'>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Work</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className='header-text'>
                    <h1>Hi there! We are the new kid on                                the block and we build awesome websites and mobile apps.</h1>
                    <a className='header-btn' href="#"> WORK WITH US!</a>
                </Container>
            </header>
        </div>
    );
};

export default Header;