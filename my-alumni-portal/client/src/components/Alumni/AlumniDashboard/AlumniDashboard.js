import { React, useEffect} from 'react';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './AlumniDashboard.css'

function AlumniDashboard() {
    let navigate = useNavigate();

    useEffect(() => {
      if(localStorage.getItem("Type")!="Alumni") {
        navigate("/");
      }
    })
  
    const logout = () => {
      localStorage.removeItem("PRN");
      localStorage.removeItem("Name");
      localStorage.removeItem("Type");
      navigate('/login');
    }
  
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/">Alumni Portal</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto myclass">
          <Nav.Link href="#features">Chat System</Nav.Link>
          <Nav.Link href="/viewInternships">Internship Opportunities</Nav.Link>
          <Nav.Link href="/viewJobs">Job Opportunities</Nav.Link>
          <Nav.Link href="/viewEvents">Events and Workshops</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/updateAlumniProfile">My Profile</Nav.Link>
          <Nav.Link onClick={logout}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default AlumniDashboard