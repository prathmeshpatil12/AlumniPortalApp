import React, { useEffect } from 'react';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

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
      <div className='bgcolor'>
        <div className="jumbotron jumbotron-billboard">
          <div className="container">
            <div className="row">
              <div>
      <Navbar collapseOnSelect expand="lg"  >
        <Container>
        <Navbar.Brand href="/"  id='navcolor'>Alumni Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Student" id="collasible-nav-dropdown"  id='navcolor'>
                <NavDropdown.Item href="/viewStudents" >View Students</NavDropdown.Item>
                <NavDropdown.Item href="/addStudent">Add Students</NavDropdown.Item>
                <NavDropdown.Item href="/removeStudent">Remove Student</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/transferStudent">Transfer Students to Alumni</NavDropdown.Item>
              </NavDropdown>
              
              <NavDropdown title="Alumni" id="collasible-nav-dropdown"  id='navcolor'>
                <NavDropdown.Item href="/viewAlumni">View Alumni</NavDropdown.Item>
                <NavDropdown.Item href="/addAlumni">Add Alumni</NavDropdown.Item>
                <NavDropdown.Item href="/removeAlumni">Remove Alumni</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Coordinator" id="collasible-nav-dropdown"  id='navcolor'>
                <NavDropdown.Item href="/viewCoordinators">View Coordinators</NavDropdown.Item>
                <NavDropdown.Item href="/addCoordinator">Add Coordinator</NavDropdown.Item>
                <NavDropdown.Item href="/removeCoordinator">Remove Coordinator</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link onClick={logout} id="navcolor">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminDashboard

