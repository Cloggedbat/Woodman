// Header - Navbar
import React from 'react';
import logo from '../assets/logov2.png'
import {
  NavDropdown,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,

} from "react-bootstrap";
import './header.css'



const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="auto"
            height="auto"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />


          {/* <a className="navbar-brand" href="/">
            <img src={logo}></img>
          </a> */}

        </Navbar.Brand>
        {/* I would like to change how these look but is not nessisary now.......................Final styleFix */}
        <Nav className="mr-auto text-center">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/forms">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Button className="login">Login</Button>
        <Button className="signUp">Sign Up!</Button>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
      </Navbar>

    </>
  );
};

export default Header;

