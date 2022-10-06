import './DocumentList.css'
import {Container,Nav,Navbar} from 'react-bootstrap';
function DocumentList() {
    return (  
        <>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">
                <img className='logo-header' src="/public/img/mq19.png" alt="" />
            </Navbar.Brand>
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

export default DocumentList;