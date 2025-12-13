
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from './Button';

function RootComponent() {
  return (
    <>
          <Navbar bg="light" data-bs-theme="light" fixed="top">
              
              <div className='pb-5'>
                  <Button/>
                  <hr /></div>
        <Container className='pt-3'>
          <Navbar.Brand href="#home">Main Menu</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}



export default RootComponent;