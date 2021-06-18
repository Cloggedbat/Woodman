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
  Col,
  Row

} from "react-bootstrap";
import './header.css'



const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <Row>
            <Col >

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

              {/* I would like to change how these look but is not nessisary now.......................Final styleFix */}
            </Col>
            <Col>
              <Nav className="mr-auto text-center">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/forms">Features</Nav.Link>
                <Nav.Link href="/FireDanger">Pricing</Nav.Link>
              </Nav>
            </Col>
            <Col>
              <Button className="login">Login</Button>
              
              <Button className="signUp" href="/SignUp">Sign Up!</Button>
              {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
            </Col>
          </Row>
        </Navbar.Brand>
      </Navbar>

    </>
  );
};

export default Header;

