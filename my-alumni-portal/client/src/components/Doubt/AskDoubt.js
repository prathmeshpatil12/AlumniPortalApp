import { React, useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react';
import Form from 'react-bootstrap/Form';
import { useToast } from '@chakra-ui/react';


function AskDoubt() {

    const [senderEmailId, setSenderEmailId] = useState("");
    const [senderName, setSenderName] = useState("");
    const [subject, setSubject] = useState("");
    const [doubt, setDoubt] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const toast = useToast();


    useEffect(() => {
        if(location.state==null) {
            navigate('/viewAlumni');
        }
        console.log(location);
    }, []);


    const askDoubt = (e) => {
        e.preventDefault();
        console.log(location.state["Email Id"]);

        let obj = {
            recieverEmailId:location.state["Email Id"],
            recieverName:location.state["Name"],
            senderEmailId:senderEmailId,
            senderName:senderName,
            subject:subject,
            doubt:doubt
        };

        console.log(obj);
    
        const headers = {
            'Content-Type': 'application/json'
        }
    
        Axios.post('http://localhost:3001/askDoubt', obj, {
            headers: headers
        }).then(async (response) => {
            toast({
                title: 'Mail sent successfully. Please wait for a reply.',
                description: "We've mailed details of your doubt to the alumni. You can expect reply on your email soon.",
                status: 'success',
                duration: 9000,
                isClosable: true,
            });
        });
        
    }


  return (
      <>
        <h1>AskDoubt</h1>
        <h2 id='h2tag'>Doubt Template </h2><br />
        <Form onSubmit={askDoubt}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><b>Enter Your Name</b></Form.Label>
                <Form.Control type="text" onChange={e => setSenderName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><b>Enter Your Email ID</b></Form.Label>
                <Form.Control type="text" onChange={e => setSenderEmailId(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><b>Doubt Subject</b></Form.Label>
                <Form.Control type="text" onChange={e => setSubject(e.target.value)} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Enter Your Doubt</Form.Label>
                <Form.Control as="textarea" rows={7} onChange={e => setDoubt(e.target.value)}/>
            </Form.Group>

            

            <div className='button'>
                <Button colorScheme='purple' variant='solid' size='md' className='submitbtn' type="submit">Ask Doubt!</Button>{' '}
                <br />
                <div id='messageEmail'></div>
            </div>
        </Form>
        <br />
        <br />
      </>
  )
}

export default AskDoubt