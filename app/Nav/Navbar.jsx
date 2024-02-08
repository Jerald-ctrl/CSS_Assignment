"use client";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import '@/app/Nav/Navbar.css';
function DisplayNavbar() {
    return (
      <Navbar className="navbar">
        <Container>
          
            <Nav className = "navbar-nav">

              <Navbar.Brand href="/home" className = "navbar-nav-link">HOME</Navbar.Brand>
              <Nav.Link href="/Steam" className = "navbar-nav-link">STEAM</Nav.Link>
              <Nav.Link href="/Game" className = "navbar-nav-link">GAME</Nav.Link>
              <Nav.Link href="/History" className = "navbar-nav-link">HISTORY</Nav.Link>
            </Nav>
           
        </Container>
      </Navbar>
    );
  }
/* function BasicExample() {
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
} */

export default DisplayNavbar;