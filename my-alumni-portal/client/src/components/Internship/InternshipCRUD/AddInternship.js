import { React, useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Button, ButtonGroup } from '@chakra-ui/react';
import './AddInternship.css';
function AddInternship() {
    
    const [company_name, setCompanyName] = useState("");
    const [position, setPosition] = useState("");
    const [eligible_batches, setEligibleBatches] = useState("");
    const [eligible_branches, setEligibleBrances] = useState("");
    const [experience_required, setExperienceRequired] = useState("");
    const [date_posted, setDatePosted] = useState("");
    const [registration_link, setRegistrationLink] = useState("");

    let navigate = useNavigate();

    const addInternship = (e) => {
        e.preventDefault();

        let date = new Date();
        date = date.toISOString().slice(0, 19).replace('T', ' ');
        setDatePosted(date)
        
        let obj = {
            company_name : company_name,
            position: position,
            eligible_batches: eligible_batches,
            eligible_branches: eligible_branches,
            experience_required: experience_required,
            date_posted: date_posted,
            registration_link: registration_link
        };

        const headers = {
            'Content-Type':'application/json'
        }

        Axios.post('http://localhost:3001/addInternship', obj, {
            headers : headers
        }).then(() => {
            document.getElementById('result').innerHTML = "Successfully added Internship";
            document.getElementById('result').style.color = "green";
        });
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
        
        <div className="box-form" id='studentboxform'>

        

<div className="right">
<h2 id='h2tag'>Add Internship </h2><br/>
  <Form onSubmit={addInternship}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label><b>Company Name</b></Form.Label>
      <Form.Control type="text" onChange={e => setCompanyName(e.target.value)} />

    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label><b>Position</b></Form.Label>
      <Form.Control type="text" onChange={e => setPosition(e.target.value)}  />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label><b>Eligible Batches</b></Form.Label>
      <Form.Control type="text" onChange={e => setEligibleBatches(e.target.value)}/>
    </Form.Group>


    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label><b>Experience Required</b></Form.Label>
      <Form.Control type="text" onChange={e => setExperienceRequired(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label><b>Registration Link</b></Form.Label>
      <Form.Control type="text" onChange={e => setRegistrationLink(e.target.value)}/>
    </Form.Group>

    <div className='button'>
      <div id='wrongIDorPass'></div>
      <Button variant="success" className='submitbtn' type="submit">Update Profile</Button>{' '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="primary" onClick={goToDashboard}>Dashboard</Button>{' '}
      <br />


    </div>
  </Form>
  <br />
  <br />
  </div></div>
        
            
            
        </>
    );
}

export default AddInternship