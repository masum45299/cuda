import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import flag from '../../img/flag.png';
import crayon from '../../img/crayon.png';
import rocket from '../../img/rocket.png';
import gears from '../../img/gears.png';

import './Section.css'

const Section = () => {
    return (
        <div>
            <section>
                <div className="setion-text">
                    <Container>
                        <Row>
                            <Col>
                                <h1>SERVICES WE PROVIDE</h1>
                                <Row>
                                    <Col></Col>
                                    <Col md="6">
                                        <p className='section-p'>We are working with both individuals and businesses from all over the globe
                                            to create awesome websites and applications.
                                        </p>
                                    </Col>
                                    <Col></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div>
                    <Container>
                        <Row>
                            <Col md="3" className='box '>
                                <div>
                                    <img src={flag} alt="" />
                                    <div className='box-info'>
                                        <h3>Branding</h3>
                                        <p className='content'>Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit, sed diam nonummy nibh.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col md="3" className='box '>
                                <div>
                                    <img src={crayon} alt="" />
                                    <div className='box-info'>
                                        <h3>Branding</h3>
                                        <p className='content'>Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit, sed diam nonummy nibh.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col md="3" className='box'>
                                <div>
                                    <img src={gears} alt="" />
                                    <div className='box-info'>
                                        <h3>Branding</h3>
                                        <p className='content'>Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit, sed diam nonummy nibh.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="3" className='box'>
                                <div>
                                    <img src={rocket} alt="" />
                                    <div className='box-info'>
                                        <h3>Branding</h3>
                                        <p className='content'>Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit, sed diam nonummy nibh.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

        </div>
    );
};

export default Section;