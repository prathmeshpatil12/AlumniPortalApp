import { React, useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import { Button, ButtonGroup } from '@chakra-ui/react';
import '../../Internship/InternshipCRUD/AddInternship.css';


function AddCoordinator() {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    let navigate = useNavigate();

    const addCoordinator = (e) => {
        e.preventDefault();
        
        let obj = {
            name: name,
            username: username
        };

        const headers = {
            'Content-Type':'application/json'
        }

        Axios.post('http://localhost:3001/addCoordinator', obj, {
            headers : headers
        }).then(() => {
            document.getElementById('result').innerHTML = "Successfully added Coordinator";
            document.getElementById('result').style.color = "green";
        });
    }

    const goToDashboard = () => {
        navigate('/adminDashboard')
    }

    return (
        <>

<div className="box-form" id='studentboxform'>



<div className="right">
    <h2 id='h2tag'>Add Coordinator</h2><br />
    <Form onSubmit={addCoordinator}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><b>User Name</b></Form.Label>
            <Form.Control type="text" onChange={e => setUsername(e.target.value)} />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><b>Name</b></Form.Label>
            <Form.Control type="text" onChange={e => setName(e.target.value)} />
        </Form.Group>

        

        <div className='button'>
            <div id='wrongIDorPass'></div>
            <Button variant="success" className='submitbtn' type="submit">Add Coordinator</Button>{' '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="primary" onClick={goToDashboard}>Dashboard</Button>{' '}
            <br />


        </div>
    </Form>
    <br />
    <br />
</div></div>
        
        </>
    )
}

export default AddCoordinator