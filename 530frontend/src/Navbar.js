import React from "react";
// import * as ReactBootStrap from "react-bootstrap";
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navbar1() {
return(
     <div className="NavBar1">
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Hasans Page</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="./Page1">Page 1</Nav.Link>
        <Nav.Link href="./Page2">Page 2</Nav.Link>
        <Nav.Link href="./Page3">Page 3</Nav.Link>
        <Nav.Link href="./Page4">Page 4</Nav.Link>
        <Nav.Link href="./Page5">Page 5</Nav.Link>
        <Nav.Link href="./Page6">Page 6</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div> 
);
}

export default Navbar1;