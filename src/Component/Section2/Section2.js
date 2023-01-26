import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Section2.css';

const Section2 = () => {
    return (
        <div className='section2-body'>
            <div className="section2">
                <Container>
                    <Row>
                        <Col>
                            <h1>MEET OUR BEAUTIFUL TEAM</h1>
                        </Col>
                        <Row>
                            <Col></Col>
                            <Col md='6' className='section2-p'><p>We are a small team of designers and developers, who help brands with big ideas.
                            </p></Col>
                            <Col></Col>
                        </Row>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Section2;