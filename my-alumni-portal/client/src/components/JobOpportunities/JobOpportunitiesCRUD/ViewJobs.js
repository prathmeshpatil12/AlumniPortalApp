import { React, useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Button from 'react-bootstrap/Button';
import '../../Internship/InternshipCRUD/ViewInternship.css';

import { Button, ButtonGroup } from '@chakra-ui/react';
import pic4 from "../../../kit.png";

function ViewJobs() {
    const [jobList, setJobList] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {

        

        Axios.get('http://localhost:3001/getJobs').then((response) => {
            const someList = response.data;
            setJobList(someList);
            console.log(jobList);
        });
    }, []);

    const goToDashboard = () => {
        if (localStorage.getItem("Type") == "Admin") {
            navigate('/adminDashboard');
        } else if (localStorage.getItem("Type") == "Student") {
            navigate('/studentDashboard');
        } else if (localStorage.getItem("Type") == "Alumni") {
            navigate("/alumniDashboard");
        } else {
            navigate("/coordinatorDashboard");
        }
    }

    const addJob = () => {
        navigate('/addJob');
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
                                    Job Opportunities
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
                                    borderColor='blackAlpha.500' colorScheme='purple' variant='outline' onClick={addJob}>
                                    Add Job
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />

            <div  id='rowlist'> 
            <Row xs={3} md={2} className="g-4" >
                {jobList.map((val, key) => (
                    <Col>
                        <Card id="card-bd">
                            <Card.Body>
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
                                <a href={val.registration_link} target="_blank">
                                    <br />
                                    <Button variant="dark" id="btnbtn">Register</Button>
                                </a>
                                <br />
                                <br />
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


export default ViewJobs