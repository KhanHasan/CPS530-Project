import React from "react";
// import * as ReactBootStrap from "react-bootstrap";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Navbar1() {
return(
     <div className="NavBar1">
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Hasans Page</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link to="./Page1">Page 1</Link>
        <Link to="./Page2">Page 2</Link>
        <Link to="./Page3">Page 3</Link>
        <Link to="./Page4">Page 4</Link>
        <Link to="./Page5">Page 5</Link>
        <Link to="./Page6">Page 6</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div> 
);
}

export default Navbar1;