import { React, useState} from 'react';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import './UpdateStudentProfile.css';
import pic4 from "../../../kit.png";
import Form from 'react-bootstrap/Form';
import pic from "../../../HighlightsAlumni.png";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';


function UpdateAlumniProfile() {

  const [name, setName] = useState("");
  const [current_work, setCurrentWork] = useState("");
  const [masters_institute_india, setMastersInstituteIndia] = useState("");
  const [masters_university_abroad, setMastersUniversityAbroad] = useState(""); 
  const [current_company, setCurrentCompany] = useState("");
  const [department, setDepartment] = useState("");
  const [passout_year, setPassoutYear] = useState();
  const [contact_number, setContactNumber] = useState(""); 
  const [email_id, setEmailId] = useState("");
  const [linkdin_profile, setLinkdinProfile] = useState("");
  let navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    let toReq = 'http://localhost:3001/updateAlumniDetail/';
    let obj = {
        PRN: localStorage.getItem("PRN"),
        name: name,
        current_work: current_work,
        masters_institute_india: masters_institute_india,
        masters_university_abroad: masters_university_abroad,
        current_company: current_company,
        department: department,
        passout_year: passout_year,
        contact_number: contact_number,
        email_id: email_id,
        linkdin_profile: linkdin_profile
    }

    console.log(obj);

    const headers = {
        'Content-Type':'application/json'
    }

    Axios.put(toReq, obj, {
        headers:headers
    }).then(() => {
        document.getElementById("updatedDetails").innerHTML = "Updated Details Sucessfully";
        document.getElementById("updatedDetails").style.color = "green";
    })
  }

  const handleDepartmentChange = (event) => {
      setDepartment(event.target.value);
  }

  const handleWorkChange = (event) => {
    setCurrentWork(event.target.value);
}

  const logout = () => {
    localStorage.removeItem("PRN");
    localStorage.removeItem("Name");
    localStorage.removeItem("Type");
    navigate('/login');
  }

  const goToDashboard = () => {
    if(localStorage.getItem("Type")=="Admin") {
        navigate('/adminDashboard');
    } else if (localStorage.getItem("Type")=="Student") {
        navigate('/studentDashboard');
    } else if (localStorage.getItem("Type")=="Alumni") {
        navigate("/alumniDashboard");
    } else {
        navigate("/coordinatorDashboard");
    }
}

  return (
    <>

    <div className='bgcolor'>
      <div className="jumbotron jumbotron-billboard">
        <div className="container">
          <div className="row">
            <div>
              <Navbar collapseOnSelect expand="lg">
                <Container>
                <div className="col-lg-2"><img src={pic4} className="img-fluid rounded thumbnail-image" /> </div>    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Navbar.Brand href="/"><b>Alumni Portal</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto myclass">
                    <Nav.Link href="#features"><b>Chat System</b></Nav.Link>
                    <Nav.Link href="/viewInternships"><b>Internship Opportunities</b></Nav.Link>
                    <Nav.Link href="/viewJobs"><b>Job Opportunities</b></Nav.Link>
                    <Nav.Link href="/viewEvents"><b>Events and Workshops</b></Nav.Link>
                  </Nav>
                  <Nav>
                    <Nav.Link href="/updateAlumniProfile"><b>My Profile</b></Nav.Link>
                    <Nav.Link onClick={logout}><b>Logout</b></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="box-form" id='studentboxform'>
      <div className="right">

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><b>PRN</b></Form.Label>
            <Form.Control type="text" placeholder={localStorage.getItem("PRN")} disabled={true} />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><b>Name</b></Form.Label>
            <Form.Control type="text" placeholder={localStorage.getItem("Name")} onChange={e => setName(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><b>Current Work</b></Form.Label>
            <select onChange={handleWorkChange}>
              <option value="NULL">Select Option</option>
              <option value="Working in India">Working in India</option>
              <option value="Working abroad">Working abroad</option>
              <option value="Pursuing Masters in India">Pursuing Masters in India</option>
              <option value="Pursuing Masters Abroad">Pursuing Masters Abroad</option>
              <option value="Preparing for Masters in India">Preparing for Masters in India</option>
              <option value="Preparing for Masters Abroad">Preparing for Masters Abroad</option>
            </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><b>Current Company</b></Form.Label>
            <Form.Control type="text" onChange={e => setCurrentCompany(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><b>Master's Institute India</b></Form.Label>
            <Form.Control type="text" onChange={e => setMastersInstituteIndia(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><b>Master's University Abroad</b></Form.Label>
            <Form.Control type="text" onChange={e => setMastersUniversityAbroad(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><b>Passing Year</b></Form.Label>
            <Form.Control type="text" onChange={e => setPassoutYear(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><b>Department</b></Form.Label>
            <select onChange={handleDepartmentChange}>
              <option value="NULL">Select Option</option>
              <option value="CSE">Computer Science and Engineering</option>
              <option value="ENTC">Electronics and Telecommunication</option>
              <option value="MECH">Mechanical Engineering</option>
              <option value="ELE">Electrical Engineering</option>
              <option value="BIO">Biotech</option>
              <option value="CIVIL">Civil Engineering</option>
              <option value="ENV">Environment Engineering</option>
              <option value="AI">Artificial Intelligence</option>
              <option value="DS">Data Science</option>
            </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><b>Contact Number</b></Form.Label>
            <Form.Control type="text" onChange={e => setContactNumber(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><b>Email ID</b></Form.Label>
            <Form.Control type="text" onChange={e => setEmailId(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><b>Linkdin Profile Link </b></Form.Label>
            <Form.Control type="text" onChange={e => setLinkdinProfile(e.target.value)} />
          </Form.Group>

          <div className='button'>
            <div id='wrongIDorPass'></div>
            <Button variant="success" className='submitbtn' type="submit">Update Profile</Button>{' '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="primary" onClick={goToDashboard}>Dashboard</Button>{' '}
            <br />


          </div>
        </Form>
        <br />
        <br />

        
      </div>

    </div>
    <button onClick={goToDashboard}>Go back to Dashboard</button>
    </>
  )
}

export default UpdateAlumniProfile