import { React, useEffect} from 'react';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import pic4 from "../../../kit.png";
import './StudentDashboard.css'


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
      <>
      
      <div className='bgcolor'>
        <div className="jumbotron jumbotron-billboard">
          <div className="container">
            <div className="row">
            
              <div>
              <Navbar collapseOnSelect expand="lg" >
                    <Container>
                <div className="col-lg-2"><img src={pic4} className="img-fluid rounded thumbnail-image" /> </div>    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <Navbar.Brand href="/"><b>Alumni Portal</b> </Navbar.Brand>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                      <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <NavDropdown title="Chat System" id="collasible-nav-dropdown" id='navcolor'>
                          <NavDropdown.Item href="https://join.slack.com/t/alumniportalkit/shared_invite/zt-197wj1kbn-5zIkzgdL~DC9Ho0Z5c2oRQ">Join Slack Channel</NavDropdown.Item>
                        </NavDropdown>
                          <Nav.Link href="/viewAlumni"><b>Search Alumni</b> </Nav.Link>
                          <Nav.Link href="/viewInternships"><b>Internship Opportunities</b> </Nav.Link>
                          <Nav.Link href="/viewJobs"><b>Job Opportunities</b> </Nav.Link>
                          <Nav.Link href="/viewEvents"><b>Events and Workshops</b> </Nav.Link>
                        </Nav>
                        <Nav>
                          <Nav.Link href="/updateStudentProfile"><b>My Profile</b> </Nav.Link>
                          <Nav.Link id='singleLine' onClick={logout}><b>Logout</b> </Nav.Link>
                        </Nav>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      
    </>
    
    )
}

export default StudentDashboard