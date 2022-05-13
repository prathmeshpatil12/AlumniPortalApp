import { React, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Button, ButtonGroup } from '@chakra-ui/react';
import '../../Internship/InternshipCRUD/AddInternship.css';

function RemoveCoordinator() {

    const [username, setUsername] = useState("");
    let navigate = useNavigate();

    const removeCoordinator = (e) => {
        e.preventDefault();
        let toReq = 'http://localhost:3001/removeCoordinator/' + username;

        Axios.delete(toReq).then((response) => {
            document.getElementById('resultdiv').innerHTML = "Deleted Coordinator";
            document.getElementById('resultdiv').style.color = "red";
        });
    }

    const goToDashboard = () => {
        navigate('/adminDashboard');
    }

    return (
        <>
            <div className="box-form" id='studentboxform'>



                <div className="right">
                    <h2 id='h2tag'>Remove Coordinator </h2><br />
                    <Form onSubmit={removeCoordinator}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><b>Username</b></Form.Label>
                            <Form.Control type="text" onChange={e => setUsername(e.target.value)} />

                        </Form.Group>
                        <div className='button'>
                            <div id='wrongIDorPass'></div>
                            <Button variant="success" className='submitbtn' type="submit">Remove Coordinator</Button>{' '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="primary" onClick={goToDashboard}>Dashboard</Button>{' '}
                            <br />


                        </div>
                    </Form>
                    <br />
                    <br />
                </div></div>
            
        </>
    )
}

export default RemoveCoordinator