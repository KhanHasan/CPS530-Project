import React from "react";
// import * as ReactBootStrap from "react-bootstrap";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: #D6D5CB;
  text-decoration: none;
  margin: 0.5rem;
  font-size: 1.3em;
  font-family: 'Varela Round', sans-serif;
  position: relative;
  text-align: right;
`;

const StyledTitle = styled(Link)`
  color: White;
  text-decoration: none;
  margin: 0.5rem;
  font-size: 1.7em;
  position: relative;
  text-align: right;
`;

function Navbar1() {
return(
     <div className="NavBar1">
<Navbar bg="primary" expand="lg">
  <Container>
    <StyledTitle to="/">Hasans Page</StyledTitle>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <StyledLink to="./Page1">Page 1</StyledLink>
        <StyledLink to="./Page2">Page 2</StyledLink>
        <StyledLink to="./Page3">Page 3</StyledLink>
        <StyledLink to="./Page4">Page 4</StyledLink>
        <StyledLink to="./Page5">Page 5</StyledLink>
        <StyledLink to="./Page6">Page 6</StyledLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div> 
);
}

export default Navbar1;