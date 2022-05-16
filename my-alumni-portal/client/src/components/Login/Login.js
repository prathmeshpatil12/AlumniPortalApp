
import { React, useState } from 'react';
import './Login.css';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import pic from "../../HighlightsAlumni.png";
import pic1 from "../../kit.png";
import { Button, ButtonGroup, useToast } from '@chakra-ui/react'

function Login() {

  const [PRN, setPRN] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = e => {
    e.preventDefault();
    let toReq = 'http://localhost:3001/loginDetails/' + PRN;

    Axios.get(toReq).then((response) => {
      const name = response.data[0].name;
      const type = response.data[0].type;
      if (password == response.data[0].password) {
        console.log("Correct PRN and password");
        localStorage.setItem("PRN", PRN);
        localStorage.setItem("Name", name);
        localStorage.setItem("Type", type)

        toast({
            title: 'Login Successful.',
            description: "Welcome to our portal",
            status: 'success',
            duration: 9000,
            isClosable: true,
        });
        //console.log(data);
        navigate('/');
    }else {
        document.getElementById("wrongIDorPass").innerHTML = "Wrong PRN or Password. Please Try Again!";
        document.getElementById("wrongIDorPass").style.color = "red";
      }
    });
  }

  return (
    <>
      <div className="box-form">
        <div className="left">
          <div className="overlay">
          <img className='img1' src={pic1} />  <h3>Welcom to KIT's College of Engineering Alumini Portal</h3>
            <img className='img2' src={pic} />
          </div>
        </div>

        <div className="right">
          <h3>Login here</h3><br />
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label><b>PRN</b></Form.Label>
              <Form.Control type="text" placeholder="Enter PRN" onChange={e => setPRN(e.target.value)} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label><b>Password</b></Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <div className='button'>
              <div id='wrongIDorPass'></div>
              <Button variant="success" className='submitbtn' type="submit">. Login .</Button>{' '}

            </div>
          </Form>

        </div>

      </div><br />
    </>
  )
}

export default Login