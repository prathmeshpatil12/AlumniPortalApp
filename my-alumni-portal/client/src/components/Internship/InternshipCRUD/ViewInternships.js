import { React, useEffect, useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Button from 'react-bootstrap/Button';
import { Button, ButtonGroup } from '@chakra-ui/react';
import Form from 'react-bootstrap/Form';

import './ViewInternship.css'

import pic4 from "../../../kit.png";

function ViewInternships() {
    const [internshipList, setInternshipList] = useState([]);
    const [filter, setFilter] = useState("");
    const [value, setValue] = useState("");

    let navigate = useNavigate();


    useEffect(() => {
        
        let toReq = 'http://localhost:3001/getInternships/' + 'all/' + 'all';
        console.log("1" + toReq);
        Axios.get(toReq).then((response) => {
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
        console.log("applyFilter")
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
            <div className='col-sm-4' id="filter">

            <h2 id='h2tag'>Filters </h2><br />
            <Form onSubmit={applyFilter}>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Filter on</Form.Label><br />
                <select onChange={handleFilterChange} id="select">
                    <option value="all" >Select Option</option>
                    <option value="company_name">Company</option>
                    <option value="eligible_batches">Eligible Batches</option>
                    <option value="eligible_branches">Eligible Branches</option>
                </select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Value</Form.Label>
                    <Form.Control type="text" onChange={e => setValue(e.target.value)} />
                </Form.Group>

                    <Button colorScheme='purple' variant='solid' size='sm' id="btnbtn" type='submit'>
                        Apply Filter
                    </Button>
                    <br />
                
            </Form>

            </div>

            <div id='rowlist'>

                <Row xs={3} md={2} className="g-4">
                    {internshipList.map((val, key) => (
                        <Col>
                            <Card id="card-bd">
                                <Card.Body >
                                    <Card.Title>{val.company_name}</Card.Title>
                                    <Card.Subtitle>
                                        Position : {val.position}
                                    </Card.Subtitle>
                                    <hr></hr>
                                    <Card.Text>
                                        Eligible Batches : {val.eligible_batches}
                                    </Card.Text>
                                    <Card.Text>
                                        Eligible Branches : {val.eligible_branches}
                                    </Card.Text>
                                    <Card.Text>
                                        Experience Required : {val.experience_required}
                                    </Card.Text>
                                    <br />
                                    <a href={val.registration_link} target="_blank">
                                        <Button colorScheme='purple' variant='solid' size='sm' id="btnbtn">
                                            Register
                                        </Button>
                                    </a>
                                    <br />
                                    <br />
                                    <Card.Footer>
                                        Last Day to Apply : {val.last_date_to_apply==null?'Date not specified':val.last_date_to_apply.slice(0, 10).split('-').reverse().join('-')}
                                    </Card.Footer>
                                    <Card.Footer>
                                        Date Posted : {val.date_posted.slice(0, 10).split('-').reverse().join('-')}
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
        </div>

        </>
    )
}


export default ViewInternships