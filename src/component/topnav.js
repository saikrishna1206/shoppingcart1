import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function NavScrollExample({acceptCount,setAcceptCount}) {

  
  
  return (
    <Navbar bg="transparent" expand="lg">
      <Container fluid>
        <Navbar.Brand style={{color:'darkblue'}} href="#">OMEGA CLOTHINGS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <NavDropdown title="Shop" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">All Product</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Popular items
              </NavDropdown.Item>
              
              <NavDropdown.Item href="#action5">
                New Arrivals
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
          <Form className="d-flex mr-8">
            
            <Button variant="outline-success">
                Cart
                <span className='mx-2'>{acceptCount}</span>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;