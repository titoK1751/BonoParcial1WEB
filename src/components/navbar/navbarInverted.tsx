"use client";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AppNavbar(){
  const brand = <Navbar.Brand href="#home" className="ms-auto">React-Bootstrap</Navbar.Brand>;

  const navigation = (
    <Navbar.Collapse id="basic-navbar-nav" className="me-auto">
        <Form className="d-flex gap-2">
        <Button variant="outline-success">Search</Button>
        <Form.Control
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </Form>
      <Nav className="ms-3">
        <Nav.Link href="#link">About</Nav.Link>
        <Nav.Link href="#link">Pricing</Nav.Link>
        <Nav.Link href="#link">Features</Nav.Link>
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  );

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {navigation}
        {brand}
      </Container>
    </Navbar>
  );
}

export default AppNavbar;