import './DocumentDetails.css'
import { Container, Col, Nav, Navbar, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DocumentDetails() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">

          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home"><img src='./icons/sad.png' width={'30'} /></Nav.Link>
            <Nav.Link href="#features"><img src='./icons/document.png' width={'30'} /></Nav.Link>
            <Nav.Link href="#pricing"><img src='./icons/envelope.png' width={'30'} /></Nav.Link>
            <Nav.Link href="#pricing"><img src='./icons/settings.png' width={'30'} /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row className='g-4'>
          <Col className='col-sm-12 col-md-3 me-4'>
            <Card className='shadow' style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  <div style={{ height: '300px' }} ></div>
                </Card.Text>
              </Card.Body>
            </Card>
            <div className='mt-4 text-md-center text-dark'>
              <Button variant="outline-light shadow"><span className='text-dark'>Analizar</span></Button>
            </div>
          </Col>
          <Col className='col-sm-12 col-md-7'>
            <div className="d-grid gap-3">
              <div style={{height:'100px'}}></div>
              <div>
                <button type="submit" class="btn btn-primary mb-3">
                  <span>Solicitar<br />Reporte</span>
                  </button>
                  </div>
              <div className="">
              <button type="submit" class="btn btn-primary mb-3"><span>Eliminar</span></button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DocumentDetails;