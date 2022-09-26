import './DocumentDetails.css'
import {Container,Nav,Navbar} from 'react-bootstrap';

function DocumentDetails() {
    return (
        <>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
}

export default DocumentDetails;