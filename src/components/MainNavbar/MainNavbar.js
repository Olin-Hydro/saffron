import React from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Row, Col} from 'react-bootstrap';

import './MainNavbar.css'

const MainNavbar = () => {

  return (
    <Container>
      <Navbar bg="none" variant="light">
        <Container className='justify-content-between'>
          <Col xs={3}>
            <Navbar.Brand href="#home">
              <img
                src='./images/logo-mono-color.svg'
                className="d-inline-block align-top"
                alt="Olin Hydro logo"
              />
            </Navbar.Brand>
          </Col>
          <Col xs="auto">
            <Container className='navMenu'>
              <Nav className="me-auto justify-content-center">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#logs">Logs</Nav.Link>
                <Nav.Link href="#config">Config</Nav.Link>
                <Nav.Link href="#camera">Camera</Nav.Link>
              </Nav>
            </Container>
          </Col>
          <Col xs={3}>
              <Row className='justify-content-between'>
                <Col>
                  <img
                    src='./images/navbar/help.svg'
                    className="d-inline-block align-center"
                    alt="help"
                  />
                </Col>
                <Col>
                  <img
                    src='./images/navbar/github.svg'
                    className="d-inline-block align-center"
                    alt="view on github"
                  />
                </Col>
                <Col>
                  <img
                    src='./images/navbar/settings.svg'
                    className="d-inline-block align-center"
                    alt="settings"
                  />
                </Col>
            </Row>
          </Col>
        </Container>
      </Navbar>
    </Container>
  );
};

export default MainNavbar;
