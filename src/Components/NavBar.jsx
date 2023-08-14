import React from 'react'
import { TabContainer } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
    <Navbar fixed="top" collapseOnSelect expand="lg" bg='danger' className="bg-body-tertiary bg-danger">
    
        <Navbar.Brand className="navbarLink" to="/">Aza-e-Hussain</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link className="navbarLink" to='/videos'>Manage Video</Link></Nav.Link>
            <Nav.Link><Link className="navbarLink" to='/gallery'>Manage Gallery</Link></Nav.Link>
            <Nav.Link><Link className="navbarLink" to='/feedbacks'>View Feedbacks Inquiry</Link></Nav.Link>
            <Nav.Link><Link className="navbarLink" to='/joinings'>Joining People</Link></Nav.Link>

           
          </Nav>
          <Nav>
            <Nav.Link> <Link  className="navbarLink" to="/login">LOGIN</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    
    </Navbar>
    </>
  )
}
