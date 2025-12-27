import { Navbar, Nav, Container } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar className=" sticky-top bg-white mt-0 mb-2">
      <Container>
        <Navbar.Brand href="#home">Main Menu</Navbar.Brand>
        <Nav classaNme="me-auto">
          <Nav.Link href="#home">Inventory</Nav.Link>
          <Nav.Link href="#features">Stock</Nav.Link>
          <Nav.Link href="#pricing">Staff</Nav.Link>
          <Nav.Link href="#pricing">Finance</Nav.Link>
          <Nav.Link href="#pricing">User Management</Nav.Link>
          <Nav.Link href="#pricing">Reports</Nav.Link>
          <Nav.Link href="#pricing">Settings</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
