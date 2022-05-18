import { React, useState } from 'react';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import pic from "../../../HighlightsAlumni.png";
import { Button, ButtonGroup } from '@chakra-ui/react';
import './UpdateStudentProfile.css';

function UpdateCoordinatorProfile() {

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [contact_number, setContactNumber] = useState("");
  const [email_id, setEmailId] = useState("");
  let navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    let toReq = 'http://localhost:3001/updateCoordinatorDetail/';
    let obj = {
      PRN: localStorage.getItem("PRN"),
      name: name,
      department: department,
      contact_number: contact_number,
      email_id: email_id,
    }

    console.log(obj);

    const headers = {
      'Content-Type': 'application/json'
    }

    Axios.put(toReq, obj, {
      headers: headers
    }).then(() => {
      document.getElementById("updatedDetails").innerHTML = "Updated Details Sucessfully";
      document.getElementById("updatedDetails").style.color = "green";
    })
  }

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  }

  const goToDashboard = () => {
    if (localStorage.getItem("Type") == "Admin") {
      navigate('/adminDashboard');
    } else if (localStorage.getItem("Type") == "Student") {
      navigate('/studentDashboard');
    } else if (localStorage.getItem("Type") == "Alumni") {
      navigate("/alumniDashboard");
    } else {
      navigate("/coordinatorDashboard");
    }
  }

  return (
    <>
  
    
      <div className="box-form" id='studentboxform'>



        <div className="right">

          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label><b>User Name</b></Form.Label>
              <Form.Control type="text" placeholder={localStorage.getItem("PRN")} disabled={true} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label><b>Name</b></Form.Label>
              <Form.Control type="text" placeholder={localStorage.getItem("Name")} onChange={e => setName(e.target.value)} />
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


            <div className='button'>
              <div id='wrongIDorPass'></div>
              <Button variant="success" className='submitbtn' type="submit">Update Profile</Button>{' '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="primary" onClick={goToDashboard}>Dashboard</Button>{' '}
              <br />


            </div>
          </Form>
          <br />
          <br />


        </div>

      </div><br />
    </>
  )
}

export default UpdateCoordinatorProfile