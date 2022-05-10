import React, { useEffect } from 'react';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';


function AdminDashboard() {

  let navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("Type")!="Admin") {
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
    <>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Alumni Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Student" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/viewStudents">View Students</NavDropdown.Item>
                <NavDropdown.Item href="/addStudent">Add Students</NavDropdown.Item>
                <NavDropdown.Item href="/removeStudent">Remove Student</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/transferStudent">Transfer Students to Alumni</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Alumni" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/viewAlumni">View Alumni</NavDropdown.Item>
                <NavDropdown.Item href="/addAlumni">Add Alumni</NavDropdown.Item>
                <NavDropdown.Item href="/removeAlumni">Remove Alumni</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Coordinator" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/viewCoordinators">View Coordinators</NavDropdown.Item>
                <NavDropdown.Item href="/addCoordinator">Add Coordinator</NavDropdown.Item>
                <NavDropdown.Item href="/removeCoordinator">Remove Coordinator</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default AdminDashboard

