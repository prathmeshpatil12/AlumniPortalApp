import { React, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import Form from 'react-bootstrap/Form';
import { Button, ButtonGroup } from '@chakra-ui/react';
import '../../Internship/InternshipCRUD/AddInternship.css';


function AddAlumni() {

    const [name, setName] = useState("");
    const [PRN, setPRN] = useState("");
    let navigate = useNavigate();
    const toast = useToast();

    const addAlumni = async (e) => {
        e.preventDefault();

        if(!PRN || !name){
            toast({
                title: 'Please fill all the fields.',
                description: "Empty fields.",
                status: 'warning',
                duration: 9000,
                isClosable: true,
            });
            return;
        }
        else{
            let obj = {
                name: name,
                PRN: PRN
            };

            const headers = {
                'Content-Type':'application/json'
            }

            axios.post('http://localhost:3001/addAlumni', obj, {
                headers : headers
            }).then(() => {
                toast({
                    title: 'Alumni account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                });
            });
            

        }
    }

    const goToDashboard = () => {
        navigate('/adminDashboard')
    }

    return (
        <>

<div className="box-form" id='studentboxform'>



<div className="right">
    <h2 id='h2tag'>Add Alumini </h2><br />
    <Form onSubmit={addAlumni}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><b>PRN</b></Form.Label>
            <Form.Control type="text" onChange={e => setPRN(e.target.value)} />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><b>Name</b></Form.Label>
            <Form.Control type="text" onChange={e => setName(e.target.value)} />
        </Form.Group>

        

        <div className='button'>
            <div id='wrongIDorPass'></div>
            <Button variant="success" className='submitbtn' type="submit">Add Alumini</Button>{' '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="primary" onClick={goToDashboard}>Dashboard</Button>{' '}
            <br />


        </div>
    </Form>
    <br />
    <br />
</div></div>
        
        </>
    )
}

export default AddAlumni