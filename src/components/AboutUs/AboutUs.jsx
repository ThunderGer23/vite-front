import './AboutUs.css'
import {Card, Col, Container,Nav,Navbar, Row} from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
function AboutUs() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                    </Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <Row>
                    <Col>
                    <img className='RotarImagen' src='public/img/mq16.png' />
                    <img className='RotarImagen' src='public/img/mq17.png' />
                    <img className='RotarImagen' src='public/img/mq18.png' />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                
                            </CardHeader>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AboutUs;