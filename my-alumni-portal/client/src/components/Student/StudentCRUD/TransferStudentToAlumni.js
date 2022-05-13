import { React, useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Button, ButtonGroup } from '@chakra-ui/react';
import '../../Internship/InternshipCRUD/AddInternship.css';




function TransferStudentToAlumni() {

    const [PRN, setPRN] = useState("");
    const [name, setName] = useState("");
    let navigate = useNavigate();


    const goToDashboard = () => {
        navigate('/adminDashboard');
    }


    const transferStud = (e) => {
        e.preventDefault();
        let toReq1 = 'http://localhost:3001/loginDetails/' + PRN;
        Axios.get(toReq1).then((response) => {
            console.log(response.data[0].name);
            setName(response.data[0].name);
        });
        console.log(name);

        let toReq = 'http://localhost:3001/transferStudent/' + PRN;

        Axios.put(toReq).then((response) => {
            document.getElementById('resultdiv').innerHTML = "Student transferred";
            document.getElementById('resultdiv').style.color = "red";
        });

        let toReqdel = 'http://localhost:3001/removeStudent/' + PRN;

        Axios.delete(toReqdel).then((response) => {
        });

        let obj = {
            name: name,
            PRN: PRN
        };

        const headers = {
            'Content-Type': 'application/json'
        }

        Axios.post('http://localhost:3001/addAlumni', obj, {
            headers: headers
        }).then(() => {
        });

    }

    return (
        <>

            <div className="box-form" id='studentboxform'>



                <div className="right">
                    <h2 id='h2tag'>Transfer Student </h2><br />
                    <Form onSubmit={transferStud}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><b>PRN</b></Form.Label>
                            <Form.Control type="text" onChange={e => setPRN(e.target.value)} />

                        </Form.Group>
                        <div className='button'>
                            <div id='wrongIDorPass'></div>
                            <Button variant="success" className='submitbtn' type="submit">Transfer Student to Alumni</Button>{' '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="primary" onClick={goToDashboard}>Dashboard</Button>{' '}
                            <br />


                        </div>
                    </Form>
                    <br />
                    <br />
                </div></div>
            
        </>
    )
}

export default TransferStudentToAlumni