import './DocumentList.css';
import { Button, Col, Container, Nav, Navbar, Row, Table } from 'react-bootstrap';
function DocumentList() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img className='logo-header' src="/public/img/mq19.png" alt="" />
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
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>File</th>
                  <th>Porcent</th>
                  <th>Date</th>
                  <th>Size</th>
                  <th>Share</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img src='./icons/document.png' width={'30'} /> Name</td>
                  <td></td>
                  <td>10-22-2020</td>
                  <td>75pag's</td>
                  <td>
                    <Button variant="outline-light"><img src='./icons/envelope.png' width={'30'}/></Button>{' '}
                    <Button variant="outline-light"><img src='./icons/trash.gif' width={'30'}/></Button>{' '}  
                  </td>
                   
                </tr>
                <tr>
                <td><img src='./icons/document.png' width={'30'} /> Name</td>
                  <td></td>
                  <td>10-22-2020</td>
                  <td>75pag's</td>
                  <td>
                    <Button variant="outline-light"><img src='./icons/envelope.png' width={'30'}/></Button>{' '}
                    <Button variant="outline-light"><img src='./icons/trash.gif' width={'30'}/></Button>{' '}  
                  </td>
                </tr>
                <tr>
                <td><img src='./icons/document.png' width={'30'} /> Name</td>
                  <td></td>
                  <td>10-22-2020</td>
                  <td>75pag's</td>
                  <td>
                    <Button variant="outline-light"><img src='./icons/envelope.png' width={'30'}/></Button>{' '}
                    <Button variant="outline-light"><img src='./icons/trash.gif' width={'30'}/></Button>{' '}  
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DocumentList;