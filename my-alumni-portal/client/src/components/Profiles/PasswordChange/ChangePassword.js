import { React, useState} from 'react';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import './ChangePassword.css';
import Form from 'react-bootstrap/Form';
import pic from "../../../password.png";
import pic1 from "../../../kit.png";
import { Button, ButtonGroup } from '@chakra-ui/react'

function ChangePassword() {

  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    let toReq = 'http://localhost:3001/updateLoginDetails/';
    let obj = {
        PRN: localStorage.getItem("PRN"),
        password: password
    }

    const headers = {
        'Content-Type':'application/json'
    }

    Axios.put(toReq, obj, {
        headers:headers
    }).then(() => {
        document.getElementById("changedPasswd").innerHTML = "Changed Password Sucessfully";
        document.getElementById("changedPasswd").style.color = "green";
    })
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
    
    <h3>Change Password</h3>
    
    
    
    <div className="box-form">
        <div className="left">
          <div className="overlay">
          
            <img className='img2' src={pic} />


          </div>
        </div>


        <div className="right">
          <h3>Change Password Here</h3><br />
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label><b>PRN</b></Form.Label>
              <Form.Control type="text" placeholder={localStorage.getItem("PRN")} disabled={true} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label><b>Enter New Password</b></Form.Label>
              <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <div className='button'>
              <div id='wrongIDorPass'></div>
              <Button variant="success" className='submitbtn' type="submit">. Change Password .</Button>{' '}

            </div>
          </Form>

        </div>

      </div><br />

    </>

    

  )
}

export default ChangePassword