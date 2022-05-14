import { React, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import { Button, ButtonGroup } from '@chakra-ui/react';
import '../../Internship/InternshipCRUD/AddInternship.css';

function RemoveAlumni() {

    const [PRN, setPRN] = useState("");
    let navigate = useNavigate();

    const removeAlumni = (e) => {
        e.preventDefault();
        let toReq = 'http://localhost:3001/removeAlumni/' + PRN;

        Axios.delete(toReq).then((response) => {
            document.getElementById('resultdiv').innerHTML = "Deleted Alumni";
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
                    <h2 id='h2tag'>Remove Alumini </h2><br />
                    <Form onSubmit={removeAlumni}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><b>PRN</b></Form.Label>
                            <Form.Control type="text" onChange={e => setPRN(e.target.value)} />

                        </Form.Group>
                        <div className='button'>
                            <div id='wrongIDorPass'></div>
                            <Button variant="success" className='submitbtn' type="submit">Remove Alumini</Button>{' '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="primary" onClick={goToDashboard}>Dashboard</Button>{' '}
                            <br />


                        </div>
                    </Form>
                    <br />
                    <br />
                </div></div>
            
        </>
    )
}

export default RemoveAlumni