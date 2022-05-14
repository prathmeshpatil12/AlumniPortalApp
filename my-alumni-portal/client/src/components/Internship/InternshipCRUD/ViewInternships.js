import { React, useEffect, useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
<<<<<<< HEAD
import Button from 'react-bootstrap/Button';

function ViewInternships() {
    const[internshipList, setInternshipList] = useState([]);
=======
//import Button from 'react-bootstrap/Button';
import { Button, ButtonGroup } from '@chakra-ui/react';
import Form from 'react-bootstrap/Form';

import './ViewInternship.css'

import pic4 from "../../../kit.png";

function ViewInternships() {
    const [internshipList, setInternshipList] = useState([]);
    const [filter, setFilter] = useState("");
    const [value, setValue] = useState("");
>>>>>>> ab876bdf

    let navigate = useNavigate();


    useEffect(() => {
<<<<<<< HEAD
        Axios.get('http://localhost:3001/getInternships').then((response) => {
=======
        
        let toReq = 'http://localhost:3001/getInternships/' + 'all/' + 'all';

        Axios.get(toReq).then((response) => {
>>>>>>> ab876bdf
            const someList = response.data;
            setInternshipList(someList);
            console.log(internshipList);
        });
    }, []);

    const addInternship = () => {
        navigate('/addInternship');
    }

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }

    const applyFilter = (e) => {
        e.preventDefault();

        let toReq = 'http://localhost:3001/getInternships/' + filter + '/' + value;
        console.log(toReq);

        Axios.get(toReq).then((response) => {
            const someList = response.data;
            setInternshipList(someList);
            console.log(internshipList);
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
        <h2>Internships List</h2>
        <br />
        <button onClick={goToDashboard}>Go back to Dashboard</button>
        <br />
        <br />
        <button id='addbtn' onClick={addInternship}>Add Internship</button>
        <br />
        <br />

            <div className="jumbotron jumbotron-billboard">
                <div className="img"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={pic4} className="img-fluid rounded thumbnail-image" />
                        </div>
                        <div className='col-lg-6'>
                            <div className='center1'>
                                <br />
                                <Button colorScheme='purple' variant='solid' size='sm' id="btnbtn1" isDisabled="true">
                                    Internship Opportunities
                                </Button>
                                <br /><br />

                                <Button size='md'
                                    height='48px'
                                    width='200px'
                                    border='2px'
                                    borderColor='blackAlpha.500' colorScheme='purple' variant='outline' onClick={goToDashboard}>
                                    Go back to Dashboard
                                </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button size='md'
                                    height='48px'
                                    width='200px'
                                    border='2px'
                                    borderColor='blackAlpha.500' colorScheme='purple' variant='outline' onClick={addInternship}>
                                    Add Internship
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />

            <h2 id='h2tag'>Filters </h2><br />
                    <Form onSubmit={applyFilter}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><b>Filter on</b></Form.Label>
                        <select onChange={handleFilterChange}>
                            <option value="all">Select Option</option>
                            <option value="company_name">Company</option>
                            <option value="eligible_batches">Eligible Batches</option>
                            <option value="eligible_branches">Eligible Branches</option>
                        </select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Value</b></Form.Label>
                            <Form.Control type="text" onChange={e => setValue(e.target.value)} />
                        </Form.Group>

                        

                        <div className='button'>
                            <Button variant="success" className='submitbtn' type="submit">Apply Filter</Button>{' '}
                            <br />
                        </div>
                    </Form>


            <div id='rowlist'>

        </>
    )
}


export default ViewInternships