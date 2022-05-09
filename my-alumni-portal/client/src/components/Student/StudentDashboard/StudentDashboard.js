import { React, useEffect} from 'react';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function StudentDashboard() {
    let navigate = useNavigate();

    useEffect(() => {
      if(localStorage.getItem("Type")!="Student") {
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
        <Navbar.Brand href="#home">Alumni Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Student" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">View Students</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Add Students</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Remove Student</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Transfer Students to Alumni</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Alumni" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">View Alumnis</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Add Alumni</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Remove Alumni</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Coordinator" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">View Coordinators</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Add Coordinator</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Remove Coordinator</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={logout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default StudentDashboard