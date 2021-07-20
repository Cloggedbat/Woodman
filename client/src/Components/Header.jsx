// Header - Navbar
import React, { useContext } from 'react';
import logo from '../assets/logov2.png'
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import {
  NavDropdown,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Col,
  Row,
} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import './header.css'



function Header() {
  const { loggedIn } = useContext(AuthContext);
  let authLinkText = "Sign In";
  if (loggedIn.id) {
    authLinkText = "Sign Out"
  }
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

            </Col>
          </Row>
        </Navbar.Brand>

        {/* <a className="navbar-brand" href="/">
            <img src={logo}></img>
          </a> */}

        {/* I would like to change how these look but is not nessisary now.......................Final styleFix */}
        <Col>
          <Nav className="mr-auto text-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/forms">Features</Nav.Link>
            <Nav.Link href="/FireDanger">Pricing</Nav.Link>



            <LinkContainer to="/login">
              <Nav.Link>{authLinkText}</Nav.Link>
            </LinkContainer>



          </Nav>
        </Col>
        <Col></Col>
        <Col></Col>

        <Col>
          <Nav className="mr-auto text-center"></Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form> */}
        </Col>
        {/* </Nav> */}
      </Navbar>

    </>
  );
};

export default Header;

