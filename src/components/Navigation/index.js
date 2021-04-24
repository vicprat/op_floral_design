import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Search } from '../Search';

export function Navigation() {
  return (
    <Navbar bg="none" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="categories">Catalogo</Nav.Link>
          <Nav.Link href="contact">Contacto</Nav.Link>
          <Search />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
