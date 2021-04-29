import React from 'react';
import { Nav, Navbar, Form} from 'react-bootstrap';
import { Cart } from '../Cart';
import { Logo } from '../Logo';


export function Header() {
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <Nav.Link href="/">
          <Logo />
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/categories">Catálogo</Nav.Link>
            <Nav.Link href="/contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form inline>
          <Cart />
        </Form>
      </Navbar>
    </>
  );
}
